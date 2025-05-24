"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
interface PostType {
  profilePic: string;
  username: string;
  time: string;
  profileStatus: string;
  //   _id: string;
}
const PostHeader = ({ post }: { post: PostType }) => {
  const [following, setFollowing] = useState<boolean>(false);

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
          src={post.profilePic}
          alt="logo"
          width={50}
          height={28}
          priority
        />
        <div>
          <h3 className="text-black dark:text-white font-semibold">
            <Link href="/">{post.username}</Link>
          </h3>
          <p className="text-[13px] dark:text-gray-300 text-gray-700">
            {post.time}
          </p>
        </div>
      </div>
      {post.profileStatus === "follow" ? (
        <button
          onClick={() => handleFollowing()}
          className="py-1 text-sm px-4  green-accent border-green-accent rounded-full cursor-pointer"
        >
          {following ? "following" : "Follow"}
        </button>
      ) : (
        <button className="py-1 text-sm px-4  text-white bg-green-accent  rounded-full cursor-pointer">
          Request
        </button>
      )}
    </div>
  );
};

export default PostHeader;
