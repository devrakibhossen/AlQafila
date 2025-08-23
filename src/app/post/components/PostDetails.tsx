"use client";
import Image from "next/image";
import { FaRegComment } from "react-icons/fa";
import Share from "@/app/components/Share";
import PostHeader from "@/app/components/PostHeader";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import CustomVideoPlayer from "@/app/watch/components/CustomVideoPlayer";
import Reaction from "@/app/components/Reaction";
import UserReaction from "@/app/components/UserReaction";
import Comment from "./Comment";

export interface PostImage {
  type: string;
  images: string;
}
export interface PostProps {
  post: {
    _id?: string;
    authorId: string;
    text: string;
    slug?: string;
    hashtags?: string[];
    images?: PostImage[];
    shares?: number;
    video?: {
      type: string;
      video: string;
    };
    reportedBy?: string[];
    profileStatus?: string;
    views?: number;
    createdAt?: string;
    updatedAt?: string;
  };
}

const PostDetails = ({ post }: PostProps) => {
  console.log("This is Post deatils :", post);


  return (
    <div>
      <div
        key={post?._id}
        className="bg-white dark:bg-zinc-900 dark:border-zinc-800/40 border rounded-md pb-3 mb-1.5 "
      >
        {typeof post?.authorId === "object" && (
          <PostHeader authorInfo={post?.authorId} createdAt={post.createdAt} />
        )}

        <div className="space-y-2">
          <p className="whitespace-pre-line break-words text-black text-sm dark:text-gray-300  md:px-3 px-2.5">
            {post?.text}
          </p>

          <div className="flex flex-wrap gap-1  md:px-3  px-2.5">
            {post?.hashtags?.map((tag, index) => (
              <span key={index} className="text-sm green-accent">
                #{tag}
              </span>
            ))}
          </div>

          {post?.images && post?.images.length > 0 && (
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
              <div className="min-w-[100px]">
                <UserReaction postId={post?._id || ""} />
              </div>
              <div className="flex items-center gap-2">
                <p className="text-[12px]">0 Comments,</p>
                <p className="text-[12px]">{post?.shares || 0} Shares</p>
              </div>
            </div>

            <div className=" grid grid-cols-3 gap-2 border-t pt-1.5">
              <Reaction postId={post?._id || ""} />
              <div className="flex justify-center gap-1.5 items-center cursor-pointer hover:bg-gray-200 dark:hover:bg-black p-1.5 rounded-md transition-colors duration-300">
                <FaRegComment />
                <p className="text-[13px] ">Comments</p>
              </div>

              <Share />
            </div>
          </div>
         <Comment postId={post?._id || ""}/>
        </div>
      </div>
    </div>
  );
};

export default PostDetails;
