"use client";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { DialogDescription } from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LucideImagePlus, SquarePlay } from "lucide-react";
import { FaSmile } from "react-icons/fa";
import { toast } from "sonner";
import { useEffect, useState } from "react";
import Image from "next/image";
import { RxCross2 } from "react-icons/rx";
import EmojiPicker from "emoji-picker-react";
import { EmojiClickData } from "emoji-picker-react";
import { useUser } from "@/context/UserContext";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store/store";
import { createPost } from "../../store/features/postsSlice";
// import { DropdownMenu } from "@/components/ui/dropdown-menu";
const CLOUD_NAME = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
const UPLOAD_PRESET = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET;
const postSchema = z.object({
  text: z.string().min(1, "Post content is required"),
});
type PostFormValues = z.infer<typeof postSchema>;
interface PostFormProps {
  onPostSuccess: () => void;
}
const PostForm = ({ onPostSuccess }: PostFormProps) => {
  const [selectedImageFiles, setSelectedImageFiles] = useState<File[]>([]);
  const [selectedVideoFile, setSelectedVideoFile] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [videoPreviewUrl, setVideoPreviewUrl] = useState<string | null>(null);
  const { userInfo } = useUser();
  const dispatch = useDispatch<AppDispatch>();

  // const [selectedEmoji, setSelectedEmoji] = useState([]);
  // const [showPicker, setShowPicker] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
    setValue,
  } = useForm<PostFormValues>({
    resolver: zodResolver(postSchema),
    defaultValues: {
      text: "",
    },
  });
  const textValue = watch("text");
  const handleEmojiClick = (emojiData: EmojiClickData) => {
    const emoji = emojiData.emoji;
    setValue("text", textValue + emoji);
  };
  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const files = Array.from(event.target.files);
      console.log("Selected files array:", files);
      if (files.length > 5) {
        toast.error("Max 5 images uploaded");
        event.target.value = "";
        setSelectedImageFiles([]);
        return;
      }
      // setSelectedImageFiles(files);
      setSelectedImageFiles((prev) => [...prev, ...files].slice(0, 5));
      // console.log("handleImageChange :", files);
    } else {
      setSelectedImageFiles([]);
    }
  };
  const handleVideoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      setSelectedVideoFile(file);
    } else {
      setSelectedVideoFile(null);
    }
  };

  useEffect(() => {
    if (selectedVideoFile) {
      const url = URL.createObjectURL(selectedVideoFile);
      setVideoPreviewUrl(url);
      return () => URL.revokeObjectURL(url);
    } else {
      setVideoPreviewUrl(null);
    }
  }, [selectedVideoFile]);

  const uploadToCloudinary = async (file: File): Promise<string | null> => {
    if (!CLOUD_NAME || !UPLOAD_PRESET) return null;

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", UPLOAD_PRESET);

    try {
      const res = await fetch(
        `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/upload`,
        {
          method: "POST",
          body: formData,
        }
      );
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error?.message || "Upload failed");
      }
      return data.secure_url;
    } catch (err) {
      console.error("Upload error:", err);
      return null;
    }
  };

  const onSubmit = async (values: PostFormValues) => {
    setIsLoading(true);
    try {
      const hashtags = values.text.match(/#\w+/g) || [];
      const cleanTags = hashtags.map((tag) => tag.replace("#", ""));

      const removeHashtags = (text: string) => {
        return text
          .replace(/#[\w]+/g, "")
          .replace(/\s{2,}/g, " ")
          .trim();
      };
      const imageUrls: string[] = [];
      let videoUrl: string | null = null;

      if (selectedImageFiles.length > 0) {
        console.log("Uploaded image file:", selectedImageFiles);
        const uploadPromises = selectedImageFiles.map(uploadToCloudinary);
        const urls = await Promise.all(uploadPromises);
        imageUrls.push(...urls.filter((url): url is string => !!url));
      }
      if (selectedVideoFile) {
        videoUrl = await uploadToCloudinary(selectedVideoFile);
      }
      if (!userInfo?.email) return;
      const postData = {
        authorEmail: userInfo?.email,
        text: removeHashtags(values.text),
        hashtags: cleanTags,
        video: videoUrl
          ? {
              type: "video",
              video: videoUrl,
            }
          : undefined,
        images: imageUrls.map((url) => ({
          type: "image",
          images: url,
        })),
      };

      await dispatch(createPost(postData));
      // dispatch(fetchPosts());
      console.log("✅ Post Data:", postData);
      onPostSuccess();
      reset();
      setSelectedImageFiles([]);
      setSelectedVideoFile(null);
      setVideoPreviewUrl(null);
      toast.success("Post created successfully!", {
        className: "bg-green-600 text-white font-semibold",
      });
    } catch (error) {
      toast.error(`There was an error ${error}`);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <DialogDescription className="h-80 overflow-auto ">
          <textarea
            id="text"
            className="h-36 p-2 w-full text-base  border-none resize-none  focus:outline-none focus:ring-0 focus:border-none overflow-y-auto"
            placeholder="What's on your mind? "
            {...register("text")}
          ></textarea>
          {errors.text && (
            <p className="text-red-500 text-sm mt-1">{errors.text.message}</p>
          )}

          {selectedImageFiles.length > 0 && (
            <div className="grid grid-cols-2 gap-2 mt-2">
              {selectedImageFiles.map((file, index) => (
                <Image
                  key={index}
                  src={URL.createObjectURL(file)}
                  alt={`Selected ${index}`}
                  className="h-40 object-cover rounded"
                  width={400}
                  height={400}
                />
              ))}
            </div>
          )}
          {videoPreviewUrl && (
            <div className="mt-4 relative">
              <video
                src={videoPreviewUrl}
                controls
                className="w-full max-h-60 object-contain rounded"
              >
                Your browser does not support the video tag.
              </video>

              <button
                type="button"
                onClick={() => {
                  setSelectedVideoFile(null);
                  setVideoPreviewUrl(null);
                }}
                className="absolute top-2 cursor-pointer right-2 bg-red-500 text-white rounded-full p-1 text-xs"
              >
                <RxCross2 />
              </button>
            </div>
          )}
        </DialogDescription>
        {/* <hr className="my-2.5" /> */}
        <div className="justifyBetween gap-5 mt-2">
          <div className="flex  items-center gap-4">
            <div className="relative">
              <input
                type="file"
                accept="image/*"
                id="image"
                multiple
                onChange={handleImageChange}
                className="hidden"
              />

              <label htmlFor="image" className="green-accent cursor-pointer">
                <LucideImagePlus />
              </label>
            </div>

            <div className="relative">
              <input
                type="file"
                accept="video/*"
                id="video"
                onChange={handleVideoChange}
                className="hidden"
              />

              <label htmlFor="video" className="green-accent cursor-pointer">
                <SquarePlay />
              </label>
            </div>

            <DropdownMenu>
              <DropdownMenuTrigger>
                <FaSmile className="hover-green-accent transition" size={18} />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <EmojiPicker onEmojiClick={handleEmojiClick} />
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <button
            type="submit"
            className="py-1 px-4 border bg-green-accent rounded-full text-sm"
          >
            {isLoading ? "Posting..." : "Post"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default PostForm;
