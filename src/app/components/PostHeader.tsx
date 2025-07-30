"use client";
import Image from "next/image";
import Link from "next/link";
import { toast } from "sonner";
import React, { useState } from "react";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { MdOutlineBookmarkBorder } from "react-icons/md";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MdOutlineReportProblem } from "react-icons/md";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
interface AuthorType {
  _id: string;
  profileImage?: string;
  username: string;
  name?: string;
}

const PostHeader = ({
  authorInfo,
  createdAt,
}: {
  authorInfo: AuthorType;
  createdAt: string | undefined;
}) => {
  const { username, name, profileImage } = authorInfo;
  const [following, setFollowing] = useState<boolean>(false);
  const post = {
    profileStatus: "follow",
    profilePic: "",
    username: "",
  };

  const handleFollowing = () => {
    console.log("Following");
    setFollowing(!following);
  };

  const handlePostSave = () => {
    toast.success("Post Saved Successfully!");
  };

  dayjs.extend(relativeTime);

  return (
    <div className="justifyBetween gap-1.5  mb-3.5 md:px-3 pt-3  px-2.5 ">
      <div className="flex gap-1.5 items-center">
        <Image
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAA..."
          className="rounded-full w-9 h-9 "
          src={profileImage || "https://i.ibb.co/wq1b1Dr/1714319190841-2.jpg"}
          alt="logo"
          width={50}
          height={28}
          priority
        />
        <div>
          <h3 className="text-black text-md dark:text-white font-semibold">
            <Link href="/">{name || username.slice(0, 11)}</Link>
          </h3>
          <p className="text-xs dark:text-gray-300 text-gray-700">
            {dayjs(createdAt).fromNow()}
          </p>
        </div>
      </div>
      <div className="justifyBetween gap-1.5">
        {post.profileStatus === "follow" && (
          <button
            onClick={() => handleFollowing()}
            className="py-1 text-sm px-4  green-accent  cursor-pointer"
          >
            {following ? "following" : "Follow"}
          </button>
        )}
        <DropdownMenu>
          <DropdownMenuTrigger>
            <HiOutlineDotsHorizontal className="text-lg cursor-pointer" />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-52  lg:mr-40 md:mr-11 mr-4  rounded-lg">
            <DropdownMenuItem className="cursor-pointer">
              <div className="flex items-center gap-2 text-red-400">
                <MdOutlineReportProblem className="h-4 w-4" />
                <span>Reports</span>
              </div>
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer">
              <div
                onClick={() => handlePostSave()}
                className="flex  gap-1.5 items-center cursor-pointer "
              >
                <MdOutlineBookmarkBorder />
                <p className="text-[13px]">Save</p>
              </div>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default PostHeader;
