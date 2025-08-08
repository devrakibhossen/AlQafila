"use client";

import Image from "next/image";
import { CgPoll } from "react-icons/cg";
// import { ImageIcon } from "lucide-react";
import PostModal from "./PostModal";
import StoryModal from "./StoryModal";
import { useState } from "react";
import UploadModal from "./UploadModal";
import { useUser } from "@/context/UserContext";

const CreatePost = () => {
  const { userInfo } = useUser();
  const [openUploadModal, setOpenUploadModal] = useState(false);
  return (
    <div className="bg-white border dark:border-zinc-800/40 dark:bg-zinc-900 md:p-5 p-2.5   md:rounded-sm md:rounded-md md:mb-5 mb-2 ">
      <div className="flex gap-1.5 items-center">
        <Image
          className="rounded-full w-10 h-10"
          src={
            userInfo?.profileImage ||
            "https://i.ibb.co/wq1b1Dr/1714319190841-2.jpg"
          }
          alt="logo"
          width={50}
          height={50}
          priority
        />

        <PostModal />

        <CgPoll
          onClick={() => setOpenUploadModal(true)}
          className="text-green-500 md:hidden ml-3 text-2xl hidden"
        />
      </div>
      <div className="flex justify-between gap-4 items-center md:w-11/12 mx-auto mt-4">
        <div
          onClick={() => setOpenUploadModal(true)}
          className="flex gap-1 items-center  justify-center transition duration-200 dark:bg-zinc-950 bg-gray-100 hover:bg-gray-200 dark:text-gray-300 text-gray-700 cursor-pointer w-full rounded-full p-2"
        >
          <CgPoll className="green-accent md:text-xl" />
          <span className="text-sm">Create Poll</span>
        </div>

        {/* <div
          onClick={() => setOpenUploadModal(true)}
          className="flex gap-1 items-center dark:text-gray-300 text-gray-700 cursor-pointer border rounded-full px-3 py-1"
        >
          <FaCamera className="green-accent" />
          <span className="text-sm">Photo</span>
        </div> */}
        <StoryModal />
      </div>
      <UploadModal open={openUploadModal} onOpenChange={setOpenUploadModal} />
    </div>
  );
};

export default CreatePost;
