"use client";
import Image from "next/image";
import { FaRegComment } from "react-icons/fa";
import { SlLike } from "react-icons/sl";
import { ImageIcon, Paperclip, Smile } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { useEffect, useState } from "react";
import EmojiPicker from "emoji-picker-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import PostHeader from "./PostHeader";
import Reaction from "./Reaction";
import Share from "./Share";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store/store";
import { fetchPosts } from "@/store/features/posts/postsSlice";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import CustomVideoPlayer from "../watch/components/CustomVideoPlayer";
import { Skeleton } from "@/components/ui/skeleton";
import UserReaction from "./UserReaction";
import Link from "next/link";

const Posts = () => {
  const [commentOpen, setCommentOpen] = useState<string | null>(null);
  const dispatch = useDispatch<AppDispatch>();
  const posted = useSelector((state: RootState) => state.posts.posts);
  const loading = useSelector((state: RootState) => state.posts.loading);
  const posts = posted?.data;

  console.log("posted", posts);
  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

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

  if (loading) {
    return (
      <div className="space-y-4">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="bg-white dark:bg-zinc-900 dark:border-zinc-800/40 border rounded-md p-4 space-y-3"
          >
            <div className="flex items-center gap-3">
              <Skeleton className="w-10 h-10 rounded-full" />
              <div className="space-y-2">
                <Skeleton className="w-32 h-3 rounded" />
                <Skeleton className="w-20 h-2 rounded" />
              </div>
            </div>

            <Skeleton className="w-full h-4 rounded" />
            <Skeleton className="w-3/4 h-4 rounded" />
            <Skeleton className="w-full h-64 rounded" />

            <div className="grid grid-cols-3 gap-2 pt-2">
              <Skeleton className="h-8 rounded" />
              <Skeleton className="h-8 rounded" />
              <Skeleton className="h-8 rounded" />
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div>
      {posts?.map((post) => (
        <div
          key={post._id}
          className="bg-white dark:bg-zinc-900 dark:border-zinc-800/40 border md:rounded-md mb-1.5 "
        >
          {/* <PostHeader
            authorInfo={{
              profileImage: post?.authorId?.profileImage || "",
              username: post?.authorId?.username || "",
              name: post?.authorId?.name || "",
            }}
            createdAt={post?.createdAt}
          /> */}

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

            {post?.video?.video && (
              <CustomVideoPlayer src={post?.video?.video} />
            )}
            <div className="mb-2 md:px-3  px-2.5 ">
              <div className="flex justify-between gap-1.5 pb-1.5 w-full">
                <div className="min-w-[100px]">
                  <UserReaction postId={post?._id || ""} />
                </div>

                <div className="flex text-end items-center gap-2">
                  <p className="text-[12px]">
                    <Link href={`/post/${post._id}/${post?.slug}`}>0 Comments,</Link>
                  </p>
                  <p className="text-[12px]">{post.shares || 0} Shares</p>
                </div>
              </div>

              <div className=" grid grid-cols-3 gap-2 border-t pt-1.5">
                <Reaction postId={post?._id || ""} />
                <div
                  onClick={() => setCommentOpen}
                  className="flex justify-center gap-1.5 items-center cursor-pointer hover:bg-gray-200 dark:hover:bg-black p-1.5 rounded-md transition-colors duration-300"
                >
                  <FaRegComment />
                  <p className="text-[13px] ">Comments</p>
                </div>

                <Share />
              </div>
            </div>
          </div>

          {commentOpen && (
            <div>
              <div className="flex items-start gap-4 bg-white px-2 md:px-4 py-2 md:py-3 rounded-md dark:bg-zinc-900  border  md:m-4 m-2">
                <Image
                  src="https://i.ibb.co/wq1b1Dr/1714319190841-2.jpg"
                  alt="User Profile"
                  width={40}
                  height={40}
                  className="w-10 h-10 rounded-full object-cover"
                />

                <div className="flex-1">
                  <Textarea
                    placeholder="Write a comment..."
                    className="w-full  bg-transparent focus:outline-none text-sm"
                  />
                  {/* </div> */}

                  
                  <div className="justifyBetween mt-2 px-2">
                    <div className="flex items-center gap-3 text-gray-500 text-sm">
                      <button className="hover-green-accent transition">
                        <ImageIcon size={18} />
                      </button>
                      {/* <button className="hover-green-accent transition"> */}
                      {/* <Smile size={18} /> */}
                      {/* <Picker data={data} onEmojiSelect={console.log} /> */}
                      <DropdownMenu>
                        <DropdownMenuTrigger>
                          <Smile
                            className="hover-green-accent transition"
                            size={18}
                          />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                          <EmojiPicker />
                        </DropdownMenuContent>
                      </DropdownMenu>

                      {/* </button> */}
                      <button className="hover-green-accent transition">
                        <Paperclip size={18} />
                      </button>
                    </div>

                    <button className="bg-green-accent  text-white text-sm font-semibold px-4 py-1 rounded-full transition">
                      Post
                    </button>
                  </div>
                </div>
              </div>

              <div className="px-4 pt-2 pb-4">
                {commentData?.map((comment, i) => (
                  <div key={i} className="flex gap-3 mt-3">
                    <Image
                      src={comment.userProfile}
                      alt={comment.username}
                      className="w-8 h-8 rounded-full object-cover"
                      width={40}
                      height={40}
                    />
                    <div>
                      <div className="bg-gray-100 dark:bg-zinc-950 px-4 py-2 rounded-md max-w-md">
                        <div className="justify-between">
                          <h4 className="font-semibold text-sm">
                            {comment.username}
                          </h4>
                        </div>
                        <p className="text-sm text-black dark:text-white mt-1">
                          {comment.text}
                        </p>
                      </div>
                      <div className="flex gap-3.5 items-center mt-2">
                        <span className="text-xs text-gray-300">1w</span>
                        <span className="text-xs mt-1 flex items-center gap-2">
                          <SlLike /> {comment.like}
                        </span>
                        <span className="text-xs text-gray-300">Reply</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Posts;
