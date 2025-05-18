"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { ImageIcon, Paperclip, Smile } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaRegComment } from "react-icons/fa";
import { IoShareSocialOutline } from "react-icons/io5";
import { MdOutlineBookmarkBorder } from "react-icons/md";
import { SlLike } from "react-icons/sl";
const ProfileEngagement = () => {
  const [commentOpen, setCommentOpen] = useState<number | null>(null);
  const posts = [
    {
      _id: 1,
      username: "John Doe",
      profilePic: "/images/profile.png",
      time: "April 26 at 10:00 AM",
      text: "রিয়াক্ট শেখা সত্যিই অনেক মজার ও রোমাঞ্চকর একটি অভিজ্ঞতা! প্রতিদিন কিছু নতুন শিখছি, আর প্রতিটি লাইন কোড আমাকে আরও আত্মবিশ্বাসী করে তুলছে।",
      hashtags: ["#ReactJS", "#Coding"],
      image: "https://i.ibb.co/S4jHppQH/image.png",
      likes: "1.2K",
      comments: 150,
      shares: 2,
      profileStatus: "follow",
      commentData: [
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
      ],
    },
    {
      _id: 2,
      username: "Rakib Hossen",
      profilePic: "https://i.ibb.co/wq1b1Dr/1714319190841-2.jpg",
      time: "April 25 at 5:50 AM",
      text: "Help out your favorite open source projects and become a better developer while doing it.",
      hashtags: ["#OpenSource", "#DeveloperLife"],
      image: "https://i.ibb.co/MkS5PKcv/image.png",
      likes: "3.5K",
      comments: 300,
      shares: 3,
      profileStatus: "ping",
      commentData: [
        {
          username: "Nadia Jahan",
          userProfile: "https://i.ibb.co/NnK6V5c5/image.png",
          text: "Absolutely! Contributing to open source is a win-win.",
          time: "April 25 at 6:30 AM",
          like: 48,
        },
        {
          username: "DevRatul",
          userProfile: "https://i.ibb.co/tPcgbdmB/image.png",
          text: "Great reminder! Time to check GitHub issues 😄",
          time: "April 25 at 7:10 AM",
          like: 36,
        },
        {
          username: "TechTusher",
          userProfile: "https://i.ibb.co/ynVcSDS0/image.png",
          text: "Thanks Rakib! এই পোস্টটা অনেককে মোটিভেট করবে।",
          time: "April 25 at 8:00 AM",
          like: 41,
        },
      ],
    },
    {
      _id: 3,
      username: "Jahidul Islam",
      profilePic: "https://i.ibb.co/b5WMgQDn/self.jpg",
      time: "April 26 at 8:45 PM",
      text: "Exploring the world of JavaScript everyday!",
      hashtags: ["#JavaScript", "#100DaysOfCode"],
      image: "https://i.ibb.co/S4jHppQH/image.png",
      likes: "2K",
      comments: 210,
      shares: 5,
      profileStatus: "ping",
    },
    {
      _id: 4,
      username: "Alex Johnson",
      profilePic: "/images/profile.png",
      time: "April 27 at 9:30 AM",
      text: "Just launched my portfolio website! Feeling proud.",
      hashtags: ["#Portfolio", "#WebDeveloper"],
      image: "https://i.ibb.co/YFLQWG4g/image.png",
      likes: "850",
      comments: 95,
      shares: 1,
      profileStatus: "ping",
    },
    {
      _id: 5,
      username: "Emily Davis",
      profilePic: "/images/profile.png",
      time: "April 27 at 11:15 AM",
      text: "Code, Coffee, and Creativity. ☕💻",
      hashtags: ["#DeveloperLife", "#StayProductive"],
      image: "https://i.ibb.co/YFLQWG4g/image.png",
      likes: "3.8K",
      comments: 400,
      shares: 7,
      profileStatus: "ping",
    },
    {
      _id: 6,
      username: "Michael Brown",
      profilePic: "/images/profile.png",
      time: "April 28 at 1:00 PM",
      text: "New blog post out now: 'Why Tailwind CSS is a game changer!'",
      hashtags: ["#TailwindCSS", "#WebDesign"],
      image: "https://i.ibb.co/YFLQWG4g/image.png",
      likes: "2.3K",
      comments: 180,
      shares: 4,
      profileStatus: "ping",
    },
    {
      _id: 7,
      username: "Olivia Wilson",
      profilePic: "/images/profile.png",
      time: "April 28 at 2:20 PM",
      text: "Frontend development is not just coding, it's an art! 🎨",
      hashtags: ["#FrontendDev", "#Creativity"],
      image: "https://i.ibb.co/YFLQWG4g/image.png",
      likes: "1.9K",
      comments: 170,
      shares: 3,
      profileStatus: "follow",
    },
    {
      _id: 8,
      username: "Daniel Martinez",
      profilePic: "/images/profile.png",
      time: "April 28 at 4:45 PM",
      text: "Stay consistent, stay motivated.",
      hashtags: ["#CodingJourney", "#KeepLearning"],
      image: "https://i.ibb.co/YFLQWG4g/image.png",
      likes: "1.5K",
      comments: 120,
      shares: 2,
      profileStatus: "ping",
    },
    {
      _id: 9,
      username: "Sophia Anderson",
      profilePic: "/images/profile.png",
      time: "April 29 at 8:10 AM",
      text: "UI/UX design makes a huge difference in web apps. Never underestimate good design!",
      hashtags: ["#UIUX", "#DesignMatters"],
      image: "https://i.ibb.co/YFLQWG4g/image.png",
      likes: "2.7K",
      comments: 260,
      shares: 6,
      profileStatus: "ping",
    },
    {
      _id: 10,
      username: "Liam Thomas",
      profilePic: "/images/profile.png",
      time: "April 29 at 9:50 AM",
      text: "Master the basics first. Strong fundamentals make a strong developer!",
      hashtags: ["#CodingBasics", "#DevTips"],
      image: "https://i.ibb.co/YFLQWG4g/image.png",
      likes: "2.1K",
      comments: 190,
      shares: 3,
      profileStatus: "follow",
    },
  ];

  return (
    <div>
      <Tabs defaultValue="account" className="w-full">
        <TabsList>
          <TabsTrigger value="account">Posts</TabsTrigger>
          <TabsTrigger value="password">Comments</TabsTrigger>
          <TabsTrigger value="media">Media</TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          <div className="mt-4">
            {posts.map((post) => (
              <div
                key={post._id}
                className="bg-white dark:bg-zinc-900   border rounded-sm md:rounded-md md:mb-5 mb-2"
              >
                <div className=" justifyBetween gap-1.5  mb-3.5 md:px-3 pt-3 px-2.5">
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
                    <button className="py-1 text-sm px-4 border text-[#155D8C] border-[#155D8C] rounded-full cursor-pointer">
                      Follow
                    </button>
                  ) : (
                    <button className="py-1 text-sm px-4 border text-white bg-[#155D8C] rounded-full cursor-pointer">
                      Request
                    </button>
                  )}
                </div>
                <div className="space-y-3.5">
                  <p className=" text-black dark:text-gray-300 mb-3.5 md:px-3 px-2.5">
                    {post.text}
                  </p>
                  <Image
                    placeholder="blur"
                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAA..."
                    className=" w-full max-h-[400px]"
                    src={post.image}
                    alt="logo"
                    width={500}
                    height={300}
                    priority
                  />
                  <div className="mb-3.5 md:px-3  px-2.5 ">
                    <div className="justifyBetween gap-1.5 pb-1.5 ">
                      <p className="text-sm">{post.likes} Likes</p>
                      <div className="flex items-center gap-2">
                        <p className="text-sm">{post.comments} Comments,</p>
                        <p className="text-sm">{post.shares} Shares</p>
                      </div>
                    </div>

                    <div className=" justifyBetween gap-1.5  border-t pt-1.5">
                      <div className="flex  gap-1.5 items-center ">
                        <SlLike />
                        <p className="text-sm font-semibold">Like</p>
                      </div>
                      <div
                        onClick={() => setCommentOpen(post._id)}
                        className="flex  gap-1.5 items-center cursor-pointer"
                      >
                        <FaRegComment />
                        <p className="text-sm font-semibold">Comments</p>
                      </div>
                      <div className="flex  gap-1.5 items-center ">
                        <MdOutlineBookmarkBorder />
                        <p className="text-sm font-semibold">Save</p>
                      </div>
                      <div className="flex  gap-1.5 items-center ">
                        <IoShareSocialOutline />
                        <p className="text-sm font-semibold">Share</p>
                      </div>
                    </div>
                  </div>
                </div>

                {commentOpen === post._id && (
                  <div>
                    <div className="flex items-start gap-4 bg-white px-2 md:px-4 py-2 md:py-3 rounded-md dark:bg-zinc-900  border  md:m-4 m-2">
                      <Image
                        src={post.profilePic}
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
                        <div className="justify-between mt-2 px-2">
                          <div className="flex items-center gap-3 text-gray-500 text-sm">
                            <button className="hover:text-[#155D8C] transition">
                              <ImageIcon size={18} />
                            </button>
                            <button className="hover:text-[#155D8C] transition">
                              <Smile size={18} />
                            </button>
                            <button className="hover:text-[#155D8C] transition">
                              <Paperclip size={18} />
                            </button>
                          </div>

                          <button className="bg-[#155D8C]  text-white text-sm font-semibold px-4 py-1 rounded-full transition">
                            Post
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="px-4 pt-2 pb-4">
                      {post.commentData?.map((comment, i) => (
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
                              <span className="text-xs text-gray-300">
                                Reply
                              </span>
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
        </TabsContent>
        <TabsContent value="password">
          <div className="mt-4">
            {posts
              .filter((post) => post.commentData)
              .flatMap((post) =>
                post.commentData?.map((comment, index) => (
                  <div
                    key={`${post._id}-${index}`}
                    className="bg-white dark:bg-zinc-900 border rounded-sm md:rounded-md md:mb-4 mb-2 px-3 py-3"
                  >
                    <div className="flex items-start gap-3">
                      <Image
                        placeholder="blur"
                        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAA..."
                        className="rounded-full w-10 h-10"
                        src={comment.userProfile}
                        alt="profile"
                        width={40}
                        height={40}
                        priority
                      />
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h4 className="font-semibold text-black dark:text-white">
                            {comment.username}
                          </h4>
                          <span className="text-xs text-gray-500">
                            {comment.time}
                          </span>
                        </div>
                        <p className="text-sm text-gray-800 dark:text-gray-300 mt-1">
                          {comment.text}
                        </p>
                        <p className="text-sm flex items-center gap-1 text-gray-500 mt-1">
                          <SlLike /> {comment.like} likes
                        </p>
                      </div>
                    </div>
                  </div>
                ))
              )}
          </div>
        </TabsContent>
        <TabsContent value="media">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
            {posts.map((post, index: number) => (
              <div
                key={index}
                className="rounded-md overflow-hidden border bg-white dark:bg-zinc-900 shadow hover:shadow-lg transition"
              >
                <div className="relative w-full h-64 group">
                  {/* Image */}
                  <Image
                    src={post.image}
                    alt="User uploaded media"
                    fill
                    className="object-cover transition-transform group-hover:scale-105 duration-300"
                    sizes="(max-width: 568px) 100vw, 33vw"
                  />

                  {/* Text overlay */}
                  <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent p-4">
                    <p className="text-white text-sm font-medium line-clamp-2">
                      {post.text.slice(0, 100)}...
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ProfileEngagement;
