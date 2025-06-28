"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MdOutlineReportProblem } from "react-icons/md";
// interface PostType {
//   profilePic: string;
//   username: string;
//   time: string;
//   profileStatus: string;
//   //   _id: string;
// }
// const PostHeader = ({ post }: { post: PostType }) => {
const PostHeader = () => {
  const [following, setFollowing] = useState<boolean>(false);
const post ={
  profileStatus:"follow",
  profilePic:"",
  username:""
}
  const handleFollowing = () => {
    // console.log(id);
    console.log("Following");
    setFollowing(!following);
  };
  return (
    <div className="justifyBetween gap-1.5  mb-3.5 md:px-3 pt-3 px-2.5">
      <div className="flex gap-1.5 items-center">
        <Image
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAA..."
          className="rounded-full w-11 h-11 "
          src={
            post?.profilePic || "https://i.ibb.co/wq1b1Dr/1714319190841-2.jpg"
          }
          alt="logo"
          width={50}
          height={28}
          priority
        />
        <div>
          <h3 className="text-black dark:text-white font-semibold">
            <Link href="/">{post?.username || "Rakib Hossen"}</Link>
          </h3>
          <p className="text-[13px] dark:text-gray-300 text-gray-700">
            15 hours ago
          </p>
        </div>
      </div>
      <div className="justifyBetween gap-1.5">
        {post.profileStatus === "follow" ? (
          <button
            onClick={() => handleFollowing()}
            className="py-1 text-sm px-4  green-accent  cursor-pointer"
          >
            {following ? "following" : "Follow"}
          </button>
        ) : (
          <button className="py-1 text-sm px-4  green-accent  cursor-pointer">
            Request
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
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default PostHeader;
