import Image from "next/image";
import { FaBookOpen, FaCamera, FaSmile, FaVideo } from "react-icons/fa";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ImageIcon } from "lucide-react";

const CreatePost = () => {
  return (
    <div className="bg-white dark:bg-zinc-900 md:p-5 p-2.5  border rounded-sm md:rounded-md md:mb-5 mb-2">
      <div className="flex gap-1.5 items-center">
        <Image
          className="rounded-full w-10 h-10"
          src="/images/profile.png"
          alt="logo"
          width={50}
          height={50}
          priority
        />

        <Dialog>
          <DialogTrigger className="border hover:bg-gray-100 dark:hover:bg-transparent px-6 py-2 text-start text-sm dark:text-gray-300 text-gray-700 rounded-full w-full cursor-pointer">
            Create Post
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle className="text-center">
                Create a New Post
              </DialogTitle>
              <hr className="my-2.5" />
              <div className="flex items-center gap-3 mb-3">
                <Image
                  className="rounded-full  border-2 border-gray-200 hover:border-primary transition-all"
                  src="/images/profile.png"
                  alt="User Avatar"
                  width={50}
                  height={50}
                  priority
                />
                <div>
                  <h3 className="text-md font-semibold">Rakib Hossen</h3>
                  <button className="py-[2px] px-4 border rounded-full text-sm">
                    Anyone
                  </button>
                </div>
              </div>
              <DialogDescription>
                <textarea
                  name="post"
                  className="min-h-56 p-2 w-full text-base  border-none   focus:outline-none focus:ring-0 focus:border-none "
                  placeholder="What's on your mind? Share your thoughts..."
                ></textarea>
              </DialogDescription>
              <hr className="my-2.5" />
              <div className="justify-between gap-5">
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
        <ImageIcon className="text-green-500 md:hidden" />
      </div>
      <div className="md:flex hidden  justify-between gap-1.5 items-center md:w-11/12 mx-auto mt-4">
        <Dialog>
          <DialogTrigger className="flex gap-1 items-center dark:text-gray-300 text-gray-700 cursor-pointer border rounded-full px-3 py-1">
            {/* <div> */}
            <FaVideo className="text-red-500" />
            <span className="text-sm">Video</span>
            {/* </div> */}
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle className="text-center">
                Create a New Post
              </DialogTitle>
              <hr className="my-2.5" />
              <div className="flex items-center gap-3 mb-3">
                <Image
                  className="rounded-full  border-2 border-gray-200 hover:border-primary transition-all"
                  src="/images/profile.png"
                  alt="User Avatar"
                  width={50}
                  height={50}
                  priority
                />
                <div>
                  <h3 className="text-md font-semibold">Rakib Hossen</h3>
                  <button className="py-[2px] px-4 border rounded-full text-sm">
                    Anyone
                  </button>
                </div>
              </div>
              <DialogDescription>
                <textarea
                  name="post"
                  className="min-h-16 p-2 w-full text-base bg-transparent text-gray-800 dark:text-white resize-none border-none focus:outline-none focus:ring-0 focus:border-none shadow-none placeholder:text-gray-500 dark:placeholder:text-gray-400"
                  placeholder="What's on your mind?"
                ></textarea>
                <label
                  htmlFor="fileUpload"
                  className="cursor-pointer border border-gray-300 dark:border-zinc-700 rounded-lg p-4 bg-white dark:bg-zinc-900 shadow-sm hover:shadow-md flex  flex-col justify-center items-center gap-3 h-32 transition w-full"
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
                    // onChange={(e) => console.log(e.target.files[0])}
                  />
                </label>
              </DialogDescription>
              <hr className="my-2.5" />
              <div className=" justify-between  gap-5">
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

        <div className="flex gap-1 items-center dark:text-gray-300 text-gray-700 cursor-pointer border rounded-full px-3 py-1">
          <FaCamera className="text-green-500" />
          <span className="text-sm">Photo</span>
        </div>
        <div className="flex gap-1 items-center dark:text-gray-300 text-gray-700 cursor-pointer border rounded-full px-3 py-1">
          <FaBookOpen className="text-blue-500" />
          <span className="text-sm">Story</span>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
