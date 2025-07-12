"use client";
import Image from "next/image";
import { FaRegComment } from "react-icons/fa";
import { SlLike } from "react-icons/sl";
import { ImageIcon, Paperclip, Smile } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { MdOutlineBookmarkBorder } from "react-icons/md";
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
import { toast } from "sonner";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store/store";
import { fetchPosts } from "@/store/features/postsSlice";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import CustomVideoPlayer from "../watch/components/CustomVideoPlayer";
import Loading from "./Loading";

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

  const handlePostSave = () => {
    toast.success("Post Saved Successfully!");
  };

  if (loading) {
    return <Loading />;
  }
  return (
    <div>
      {posts?.map((post) => (
        <div
          key={post._id}
          className="bg-white dark:bg-zinc-900 border rounded-md mb-1.5 "
        >
          <PostHeader />
          {/* <PostHeader post={post} /> */}
          <div className="space-y-2">
            <p className=" text-black text-sm dark:text-gray-300  md:px-3 px-2.5">
              {post.text}
            </p>

            <div className="flex flex-wrap gap-2  md:px-3  px-2.5">
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
            <div className="mb-3.5 md:px-3  px-2.5 ">
              <div className="justifyBetween gap-1.5 pb-1.5 ">
                <p className="text-[12px]">15 Likes</p>
                <div className="flex items-center gap-2">
                  <p className="text-[12px]">0 Comments,</p>
                  <p className="text-[12px]">{post.shares || 0} Shares</p>
                </div>
              </div>

              <div className=" justifyBetween gap-1.5  border-t py-1.5">
                <Reaction />
                <div
                  onClick={() => setCommentOpen}
                  className="flex  gap-1.5 items-center cursor-pointer"
                >
                  <FaRegComment />
                  <p className="text-[13px] ">Comments</p>
                </div>
                <div
                  onClick={() => handlePostSave()}
                  className="flex  gap-1.5 items-center cursor-pointer "
                >
                  <MdOutlineBookmarkBorder />
                  <p className="text-[13px]">Save</p>
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

                  {/* Actions: Icons and Post Button */}
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
