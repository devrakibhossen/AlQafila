"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useDispatch } from "react-redux";
import { updateUserProfile } from "../../../store/features/userSlice";
import { AppDispatch } from "@/store/store";

const CLOUD_NAME = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
const UPLOAD_PRESET = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET;

// Zod schema
const formSchema = z.object({
  profileImage: z.any().optional(),
  coverImage: z.any().optional(),
  name: z.string().min(3, "Name is required"),
  bio: z.string().max(100, "Bio must be under 100 characters"),
  locations: z.string().optional(),
});

interface UserData {
  _id: string;
  name: string;
  email: string;
  bio: string;
  locations: string;
  profileImage: string | null;
  coverImage: string | null;
}
interface PersonalInfoProps {
  user: UserData;
  isEditOption: boolean;
}
type FormData = z.infer<typeof formSchema>;

const PersonalInfo = ({ user, isEditOption }: PersonalInfoProps) => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch<AppDispatch>();
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: user?.name || "",
      bio: user?.bio || "",
      profileImage: undefined,
      coverImage: undefined,
      locations: user?.locations,
    },
  });

  const uploadImage = async (file: File): Promise<string | null> => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", UPLOAD_PRESET || "");

    try {
      const res = await fetch(
        `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/upload`,
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await res.json();
      return data.secure_url;
    } catch (err) {
      console.error("Upload error:", err);
      return null;
    }
  };

  const onSubmit = async (data: FormData) => {
    setLoading(true);

    let profileImageUrl: string | null = user?.profileImage || null;
    let coverImageUrl: string | null = user?.coverImage || null;

    if (data.profileImage && data.profileImage[0]) {
      profileImageUrl = await uploadImage(data.profileImage[0]);
    }

    if (data.coverImage && data.coverImage[0]) {
      coverImageUrl = await uploadImage(data.coverImage[0]);
    }

    const finalData = {
      name: data.name,
      bio: data.bio,
      locations: data.locations,
      profileImage: profileImageUrl,
      coverImage: coverImageUrl,
    };
    dispatch(updateUserProfile({ email: user?.email, data: finalData }));
    console.log("Final Data:", finalData);

    setLoading(false);
    setOpen(false);
    reset();
  };

  return (
    <div>
      <Dialog
        open={open}
        onOpenChange={(isOpen) => {
          setOpen(isOpen);
          if (isOpen && user) {
            reset({
              name: user?.name || "",
              bio: user?.bio || "",
              profileImage: user?.profileImage || "",
              coverImage: user?.coverImage || "",
              locations: user?.locations || "",
            });
          }
        }}
      >
        <DialogTrigger asChild>
          {isEditOption && (
            <Button className="bg-green-accent w-full text-sm cursor-pointer">
              Edit Profile
            </Button>
          )}
        </DialogTrigger>

        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Update your personal Info</DialogTitle>
          </DialogHeader>

          <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="profileImage">Profile Image</Label>
              <Input
                id="profileImage"
                type="file"
                accept="image/*"
                {...register("profileImage")}
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="coverImage">Cover Image</Label>
              <Input
                id="coverImage"
                type="file"
                accept="image/*"
                {...register("coverImage")}
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" {...register("name")} />
              {errors.name && (
                <p className="text-red-500 text-xs">{errors.name.message}</p>
              )}
            </div>
            <div className="grid gap-2">
              <Label htmlFor="locations">Location</Label>
              <Input id="locations" {...register("locations")} />
              {errors.locations && (
                <p className="text-red-500 text-xs">
                  {errors.locations.message}
                </p>
              )}
            </div>

            <div className="grid gap-2">
              <Label htmlFor="bio">Bio (100 char)</Label>
              <Textarea
                id="bio"
                className="resize-none max-h-20"
                placeholder="Write something short..."
                {...register("bio")}
              />
              <p className="text-xs text-gray-500">
                Max 100 characters. You typed {watch("bio")?.length || 0}
              </p>
              {errors.bio && (
                <p className="text-red-500 text-xs">{errors.bio.message}</p>
              )}
            </div>

            <DialogFooter>
              <DialogClose asChild>
                <Button variant="outline" type="button">
                  Cancel
                </Button>
              </DialogClose>
              <Button
                type="submit"
                disabled={loading}
                className="bg-green-accent hover:bg-transparent"
              >
                {loading ? "Saving..." : "Save changes"}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default PersonalInfo;
