import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { FaSmile } from "react-icons/fa";
import UserHeader from "./UserHeader";
interface UploadModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}
const UploadModal = ({ open, onOpenChange }: UploadModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
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
              className="min-h-16 p-2 w-full text-base bg-transparent text-gray-800 dark:text-white resize-none border-none focus:outline-none focus:ring-0 focus:border-none shadow-none placeholder:text-gray-500 dark:placeholder:text-gray-400"
              placeholder="What's on your mind?"
            ></textarea>
            <label
              htmlFor="fileUpload"
              className="cursor-pointer border border-gray-300 dark:border-zinc-700 rounded-lg p-4 bg-white dark:bg-zinc-900 shadow-sm hover:shadow-md flex flex-col justify-center items-center gap-3 h-32 transition w-full mt-3"
            >
              <div className="flex items-center justify-center w-10 h-10 bg-blue-100 dark:bg-zinc-800 text-blue-600 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15.172 7l-6.586 6.586a2 2 0 002.828 2.828L18 9.828M16 3h5v5M21 3l-9 9"
                  />
                </svg>
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-800 dark:text-white">
                  Add Photos/Video
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Click to upload files
                </p>
              </div>

              <input
                type="file"
                id="fileUpload"
                accept="image/*,video/*"
                className="hidden"
              />
            </label>
          </DialogDescription>
          <hr className="my-2.5" />
          <div className=" justifyBetween  gap-5">
            <button className="p-1 border rounded-full text-sm">
              <FaSmile className="text-gray-500 dark:text-gray-300 text-xl cursor-pointer" />
            </button>
            <button className="py-1 px-4 border rounded-full text-sm">
              Post
            </button>
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default UploadModal;
