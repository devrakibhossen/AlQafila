"use client";

import { BiArrowBack } from "react-icons/bi";
import Image from "next/image";
import { FaRegComment } from "react-icons/fa";
import Share from "@/app/components/Share";
import PostHeader from "@/app/components/PostHeader";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import CustomVideoPlayer from "@/app/watch/components/CustomVideoPlayer";
import Reaction from "@/app/components/Reaction";
import { Input } from "@/components/ui/input";

type ReactionType = "like" | "love" | "funny";

const page = () => {
  const post = {
    reactions: {
      like: 0,
      love: 0,
      smart: 0,
      funny: 0,
      wow: 0,
      sad: 0,
      angry: 0,
      total: 0,
    },
    video: {
      type: "video",
      video:
        "https://res.cloudinary.com/duhybktme/video/upload/v1753975703/hjouui6ookds2vxm2f13.mp4",
    },
    images: [
      // {
      //   type: "image",
      //   images:
      //     "https://res.cloudinary.com/duhybktme/image/upload/v1753840848/q8qc7keyq44uvekvacoj.jpg",
      //   _id: "68897cd2448b1c2fcdc18c86",
      // },
    ],
    _id: "688b8b99172047b83d2105c6",
    authorId: {
      _id: "68454525fe0b96bec5bee9d0",
      username: "rakibhossen",
      email: "hellorakibhossen@gmail.com",
      name: "Rakib Hossen",
      profileImage:
        "https://res.cloudinary.com/duhybktme/image/upload/v1751534378/b2ras1q6kre8wq48e4mt.jpg",
    },
    text: "প্রতিদিনের ছোট ছোট আমলই আখিরাতে বড় সফলতার কারণ হতে পারে।",
    hashtags: [],
    shares: 0,
    reportedBy: [],
    reactionsBy: [],
    profileStatus: "request",
    views: 0,
    createdAt: "2025-07-31T15:28:25.058Z",
    updatedAt: "2025-07-31T15:28:25.058Z",
    __v: 0,
  };

  const reactions: { type: ReactionType; image: string; label: string }[] = [
    { type: "like", image: "/ReactionIcon/like.png", label: "Like" },
    { type: "love", image: "/ReactionIcon/love.png", label: "Love" },
    { type: "funny", image: "/ReactionIcon/funny.png", label: "Funny" },
  ];
  const commentData = [
    {
      username: "Mim Rahman",
      userProfile: "https://i.ibb.co/ynVcSDS0/image.png",
      text: "রিয়াক্ট শেখা আমারও প্রিয়! তোমার এই জার্নি আরও মজাদার হোক। 🚀",
      time: "April 26 at 11:00 AM",
      like: 34,
    },
    {
      username: "CoderBoy",
      userProfile: "https://i.ibb.co/NnK6V5c5/image.png",
      text: "Practice করলে প্রতিদিন উন্নতি হবেই। Keep going!",
      time: "April 26 at 11:30 AM",
      like: 19,
    },
    {
      username: "Shuvo Dev",
      userProfile: "https://i.ibb.co/tPcgbdmB/image.png",
      text: "একদম ঠিক বলছো ভাই! আমি প্রতিদিন রিয়াক্টে নতুন কিছু শিখছি।",
      time: "April 26 at 12:00 PM",
      like: 27,
    },
  ];

  return (
    <div className="w-11/12 mx-auto">
      <button className="flex items-center gap-2 text-sm mb-3">
        <BiArrowBack />
        <p>Back</p>
      </button>
      <div
        key={post._id}
        className="bg-white dark:bg-zinc-900 dark:border-zinc-800/40 border rounded-md pb-3 mb-1.5 "
      >
        {typeof post.authorId === "object" && (
          <PostHeader authorInfo={post.authorId} createdAt={post.createdAt} />
        )}

        <div className="space-y-2">
          <p className="whitespace-pre-line break-words text-black text-sm dark:text-gray-300  md:px-3 px-2.5">
            {post.text}
          </p>

          <div className="flex flex-wrap gap-1  md:px-3  px-2.5">
            {post?.hashtags?.map((tag, index) => (
              <span key={index} className="text-sm green-accent">
                #{tag}
              </span>
            ))}
          </div>

          {post.images && post.images.length > 0 && (
            <Swiper
              pagination={{
                dynamicBullets: true,
              }}
              modules={[Pagination]}
              className="mySwiper"
            >
              {post?.images?.map((imgObj, idx) => (
                <SwiperSlide key={idx}>
                  <Image
                    placeholder="blur"
                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAA..."
                    className="w-full max-h-[400px] object-contain "
                    src={imgObj?.images}
                    alt="Post image"
                    width={500}
                    height={300}
                    priority
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          )}

          {post?.video?.video && <CustomVideoPlayer src={post?.video?.video} />}
          <div className="mb-2 md:px-3  px-2.5 ">
            <div className="justifyBetween gap-1.5 pb-1.5 ">
              <div className="text-[12px] flex items-center gap-1">
                <div className="flex items-center -space-x-1  overflow-x-auto   rounded-lg">
                  {reactions.map((reaction, index) => (
                    <div key={index} className="min-w-fit">
                      <Image
                        src={reaction.image}
                        alt={`Avatar ${index + 1}`}
                        width={40}
                        height={40}
                        className="rounded-full w-5 h-5"
                      />
                    </div>
                  ))}
                </div>
                2
              </div>
              <div className="flex items-center gap-2">
                <p className="text-[12px]">0 Comments,</p>
                <p className="text-[12px]">{post.shares || 0} Shares</p>
              </div>
            </div>

            <div className=" grid grid-cols-3 gap-2 border-t pt-1.5">
              <Reaction />
              <div className="flex justify-center gap-1.5 items-center cursor-pointer hover:bg-gray-200 dark:hover:bg-black p-1.5 rounded-md transition-colors duration-300">
                <FaRegComment />
                <p className="text-[13px] ">Comments</p>
              </div>

              <Share />
            </div>
          </div>
          <div className=" flex  items-center gap-2 w-full px-3">
            <Image
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAA..."
              className="rounded-full w-9 h-9 "
              src="https://i.ibb.co/wq1b1Dr/1714319190841-2.jpg"
              alt="logo"
              width={50}
              height={28}
              priority
            />
            <div className="w-full">
              <Input
                placeholder="Write a comment!"
                className="rounded-full text-sm"
              />
            </div>
          </div>
          <div className="w-full max-w-xl mx-auto space-y-2.5 px-3 mt-5">
            {commentData.map((comment, i) => (
              <div
                key={i}
                className=""
              >
                {/* User Info */}
                <div className="flex  gap-3">
                  <Image
                    src={comment.userProfile}
                    alt={comment.username}
                    className="w-9 h-9 rounded-full object-cover border"
                    width={50}
                    height={50}
                  />
                  <div>
                  <div className="bg-gray-200 dark:bg-black rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow duration-200">
                    <h4 className="font-semibold text-gray-800 dark:text-white">
                      {comment.username}
                    </h4>
                    <span className="text-sm text-gray-500">
                      {comment.time}
                    </span>
                     {/* Comment Text */}
                <p className="mt-3 text-sm text-gray-700 dark:text-gray-300">
                  {comment.text}
                </p>
                  </div>
                 {/* Like & Actions */}
                <div className="flex items-center gap-5 mt-3 text-sm text-gray-500">
                  <button className="flex items-center gap-1 hover:text-red-500 transition-colors">
                    ❤️ {comment.like}
                  </button>
                  <button className="hover:text-blue-500 transition-colors">
                    Reply
                  </button>
                </div>
                
                </div>
                </div>

               

               
              </div>
            ))}
          </div>
          {/* <div className="min-h-[150px] flex justify-center items-center">
            <p className="text-sm ">No comments found</p>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default page;
