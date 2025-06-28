"use client";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import UserHeader from "./UserHeader";

import PostForm from "./PostForm";
import { useState } from "react";

const PostModal = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="w-full">
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger className="border hover:bg-gray-100 dark:hover:bg-transparent px-6 py-2 text-start text-sm dark:text-gray-300 text-gray-700 rounded-full w-full cursor-pointer">
          Create Post
        </DialogTrigger>
        <DialogContent className="p-2.5">
          <DialogHeader>
            <DialogTitle>
              <UserHeader
                name="Rakib Hossen"
                image="https://i.ibb.co/wq1b1Dr/1714319190841-2.jpg"
              />
            </DialogTitle>
            <PostForm onPostSuccess={() => setOpen(false)} />
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default PostModal;
