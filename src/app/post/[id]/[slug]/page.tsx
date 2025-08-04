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
    images: [],
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

  return (
    <div className="w-11/12 mx-auto">
      <button className="flex items-center gap-2 text-sm mb-3">
        <BiArrowBack />
        <p>Back</p>
      </button>
      <div
        key={post._id}
        className="bg-white dark:bg-zinc-900 dark:border-zinc-800/40 border rounded-md mb-1.5 "
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
                    {
                        imgObj?.images &&  <Image
                    placeholder="blur"
                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAA..."
                    className="w-full max-h-[400px] object-contain "
                    src={imgObj?.images}
                    alt="Post image"
                    width={500}
                    height={300}
                    priority
                  />
                    }
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

          <div className="min-h-[500px]">Hello </div>
        </div>
      </div>
    </div>
  );
};

export default page;
