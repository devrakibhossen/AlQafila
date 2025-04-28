import Image from "next/image";
import Link from "next/link";
import { FaRegComment } from "react-icons/fa";
import { IoShareSocialOutline } from "react-icons/io5";
import { SlLike } from "react-icons/sl";

const page = () => {
  const videos = [
    {
      _id: 1,
      username: "John Doe",
      profilePic: "/images/profile.png",
      time: "April 26 at 10:00 AM",
      text: "Learning React is super fun! 🚀",
      hashtags: ["#ReactJS", "#Coding"],
      videolink: "/viedo1.mp4",
      likes: "1.2K",
      comments: 150,
      shares: 2,
      profileStatus: "follow",
    },
    {
      _id: 2,
      username: "Rakib Hossen",
      profilePic: "https://i.ibb.co/wq1b1Dr/1714319190841-2.jpg",
      time: "April 25 at 5:50 AM",
      text: "Help out your favorite open source projects and become a better developer while doing it.",
      hashtags: ["#OpenSource", "#DeveloperLife"],
      videolink: "/viedo1.mp4",
      likes: "3.5K",
      comments: 300,
      shares: 3,
      profileStatus: "ping",
    },
    {
      _id: 3,
      username: "Jahidul Islam",
      profilePic: "https://i.ibb.co/b5WMgQDn/self.jpg",
      time: "April 26 at 8:45 PM",
      text: "Exploring the world of JavaScript everyday!",
      hashtags: ["#JavaScript", "#100DaysOfCode"],
      videolink: "/viedo1.mp4",
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
      videolink: "/viedo1.mp4",
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
      videolink: "/viedo1.mp4",
      likes: "3.8K",
      comments: 400,
      shares: 7,
      profileStatus: "ping",
    },
  ];
  return (
    <div className="md:w-11/12 mx-auto h-screen overflow-y-auto hide-scrollbar">
      <div className="md:mt-16">
        {videos.map((video) => (
          <div key={video._id} className="bg-white p-5  border rounded-md mb-5">
            <div className="flex justify-between gap-1.5 items-center mb-3.5">
              <div className="flex gap-1.5 items-center">
                <Image
                  className="rounded-full w-11 h-11 "
                  src={video.profilePic}
                  alt="logo"
                  width={50}
                  height={28}
                  priority
                />
                <div>
                  <h3 className="text-black font-semibold">
                    <Link href="/">{video.username}</Link>
                  </h3>
                  <p className="text-[13px] text-gray-700">{video.time}</p>
                </div>
              </div>
              {video.profileStatus === "follow" ? (
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
              <p className=" text-gray-700">{video.text}</p>
              <video
                src={video.videolink}
                controls
                muted
                poster="https://i.ibb.co/YFLQWG4g/image.png"
                preload="metadata"
                className="rounded-md w-full border max-h-[400px] shadow-lg transition-transform duration-300"
              ></video>

              <div>
                <div className="flex justify-between gap-1.5 items-center pb-1.5 ">
                  <p className="text-sm">{video.likes} Likes</p>
                  <div className="flex items-center gap-2">
                    <p className="text-sm">{video.comments} Comments,</p>
                    <p className="text-sm">{video.shares} Shares</p>
                  </div>
                </div>

                <div className="flex justify-between gap-1.5 items-center border-t pt-1.5">
                  <div className="flex  gap-1.5 items-center ">
                    <SlLike />
                    <p className="text-sm font-semibold">Like</p>
                  </div>
                  <div className="flex  gap-1.5 items-center ">
                    <FaRegComment />
                    <p className="text-sm font-semibold">Comments</p>
                  </div>
                  <div className="flex  gap-1.5 items-center ">
                    <IoShareSocialOutline />
                    <p className="text-sm font-semibold">Share</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
