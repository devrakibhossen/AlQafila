"use client";

import Image from "next/image";
import { FaCamera, FaVideo } from "react-icons/fa";

import { ImageIcon } from "lucide-react";
import PostModal from "./PostModal";
import StoryModal from "./StoryModal";
import { useState } from "react";
import UploadModal from "./UploadModal";

const CreatePost = () => {
  const [openUploadModal, setOpenUploadModal] = useState(false);
  return (
    <div className="bg-white dark:bg-zinc-900 md:p-5 p-2.5  border rounded-sm md:rounded-md md:mb-5 mb-2">
      <div className="flex gap-1.5 items-center">
        <Image
          className="rounded-full w-10 h-10"
          src="https://i.ibb.co/wq1b1Dr/1714319190841-2.jpg"
          alt="logo"
          width={50}
          height={50}
          priority
        />

        <PostModal />

        <ImageIcon
          onClick={() => setOpenUploadModal(true)}
          className="text-green-500 md:hidden ml-3"
        />
      </div>
      <div className="hidden md:flex justify-between gap-1.5 items-center md:w-11/12 mx-auto mt-4">
        <div
          onClick={() => setOpenUploadModal(true)}
          className="flex gap-1 items-center dark:text-gray-300 text-gray-700 cursor-pointer border rounded-full px-3 py-1"
        >
          <FaVideo className="green-accent" />
          <span className="text-sm">Video</span>
        </div>

        <div
          onClick={() => setOpenUploadModal(true)}
          className="flex gap-1 items-center dark:text-gray-300 text-gray-700 cursor-pointer border rounded-full px-3 py-1"
        >
          <FaCamera className="green-accent" />
          <span className="text-sm">Photo</span>
        </div>
        <StoryModal />
      </div>
      <UploadModal open={openUploadModal} onOpenChange={setOpenUploadModal} />
    </div>
  );
};

export default CreatePost;
