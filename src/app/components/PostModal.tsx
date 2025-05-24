import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { FaSmile } from "react-icons/fa";
import UserHeader from "./UserHeader";

const PostModal = () => {
  return (
    <div className="w-full">
      <Dialog>
        <DialogTrigger className="border hover:bg-gray-100 dark:hover:bg-transparent px-6 py-2 text-start text-sm dark:text-gray-300 text-gray-700 rounded-full w-full cursor-pointer">
          Create Post
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-center">Create a New Post</DialogTitle>
            <hr className="my-2.5" />
            <UserHeader
              name="Rakib Hossen"
              image="https://i.ibb.co/wq1b1Dr/1714319190841-2.jpg"
            />
            <DialogDescription>
              <textarea
                name="post"
                className="min-h-56 p-2 w-full text-base  border-none   focus:outline-none focus:ring-0 focus:border-none "
                placeholder="What's on your mind? Share your thoughts..."
              ></textarea>
            </DialogDescription>
            <hr className="my-2.5" />
            <div className="justifyBetween gap-5">
              <div className="flex  items-center gap-2">
                <button className="py-1 px-4 border rounded-full text-sm">
                  Photo
                </button>
                <button className="py-1 px-4 border rounded-full text-sm">
                  Video
                </button>
                <button className="p-1 border rounded-full text-sm">
                  <FaSmile className="text-gray-500 dark:text-gray-300 text-xl cursor-pointer" />
                </button>
              </div>
              <button className="py-1 px-4 border rounded-full text-sm">
                Post
              </button>
            </div>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default PostModal;
