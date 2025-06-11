import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { DialogDescription } from "@/components/ui/dialog";
import { LucideImagePlus, SquarePlay } from "lucide-react";
import { FaSmile } from "react-icons/fa";
import { toast } from "sonner";

const postSchema = z.object({
  text: z.string().min(1, "Post content is requried"),
});
type PostFormValues = z.infer<typeof postSchema>;
const PostForm = ({ onSuccess }: { onSuccess: () => void }) => {
  const form = useForm<PostFormValues>({
    resolver: zodResolver(postSchema),
    defaultValues: {
      text: "",
    },
  });
  const onSubmit = (values: PostFormValues) => {
    try {
      const hashtags = values.text.match(/#\w+/g) || [];
      const cleanTags = hashtags.map((tag) => tag.replace("#", ""));

      const postData = {
        text: values.text,
        tags: cleanTags,
        createdAt: new Date().toISOString(),
      };

      console.log("✅ Post Data:", postData);
      form.reset();
      onSuccess();
      toast.success("Post created successfully!");
    } catch (error) {
      toast.error(`There was an error ${error}`);
    }
  };
  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <DialogDescription>
            <FormField
              control={form.control}
              name="text"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <textarea
                      className="min-h-56 p-2 w-full text-base  border-none resize-none  focus:outline-none focus:ring-0 focus:border-none overflow-y-auto"
                      placeholder="What's on your mind? "
                      {...field}
                    ></textarea>
                  </FormControl>
                </FormItem>
              )}
            />
          </DialogDescription>
          <hr className="my-2.5" />
          <div className="justifyBetween gap-5">
            <div className="flex  items-center gap-4">
              <div className="relative">
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) {
                      console.log("📷 Selected Image:", file);
                    }
                  }}
                  id="imageUpload"
                  className="hidden"
                />
                <label
                  htmlFor="imageUpload"
                  className="green-accent cursor-pointer"
                >
                  <LucideImagePlus />
                </label>
              </div>

              <div className="relative">
                <input
                  type="file"
                  accept="video/*"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) {
                      console.log("📷 Selected video:", file);
                    }
                  }}
                  id="videoUpload"
                  className="hidden"
                />
                <label
                  htmlFor="videoUpload"
                  className="green-accent cursor-pointer"
                >
                  <SquarePlay />
                </label>
              </div>

              <button
                type="button"
                className=" text-2xl green-accent cursor-pointer"
              >
                <FaSmile />
              </button>
            </div>
            <button
              type="submit"
              className="py-1 px-4 border bg-green-accent rounded-full text-sm"
            >
              Post
            </button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default PostForm;
