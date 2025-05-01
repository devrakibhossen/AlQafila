import Image from "next/image";
import Link from "next/link";
import { FaBookOpen, FaCamera, FaRegComment, FaVideo } from "react-icons/fa";
import { IoShareSocialOutline } from "react-icons/io5";
import { SlLike } from "react-icons/sl";

export default function Home() {
  const posts = [
    {
      _id: 1,
      username: "John Doe",
      profilePic: "/images/profile.png",
      time: "April 26 at 10:00 AM",
      text: "Learning React is super fun! 🚀",
      hashtags: ["#ReactJS", "#Coding"],
      image: "https://i.ibb.co/YFLQWG4g/image.png",
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
      image: "https://i.ibb.co/MkS5PKcv/image.png",
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
      image: "https://i.ibb.co/YFLQWG4g/image.png",
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
    <div className="md:w-11/12 mx-auto  h-screen overflow-y-auto hide-scrollbar ">
      <div className="bg-white dark:bg-zinc-900 md:p-5 p-2.5  border rounded-md mb-5 md:mt-16">
        <div className="flex gap-1.5 items-center">
          <Image
            className="rounded-full "
            src="/images/profile.png"
            alt="logo"
            width={50}
            height={28}
            priority
          />
          <button className="border hover:bg-gray-100 dark:hover:bg-transparent px-6 py-2 text-start text-sm dark:text-gray-300 text-gray-700 rounded-full w-full cursor-pointer">
            Create Post
          </button>
        </div>
        <div className="flex justify-between gap-1.5 items-center md:w-11/12 mx-auto mt-4">
          <div className="flex gap-1 items-center dark:text-gray-300 text-gray-700 cursor-pointer border rounded-full px-3 py-1">
            <FaVideo className="text-red-500" />
            <span className="text-sm">Video</span>
          </div>
          <div className="flex gap-1 items-center dark:text-gray-300 text-gray-700 cursor-pointer border rounded-full px-3 py-1">
            <FaCamera className="text-green-500" />
            <span className="text-sm">Photo</span>
          </div>
          <div className="flex gap-1 items-center dark:text-gray-300 text-gray-700 cursor-pointer border rounded-full px-3 py-1">
            <FaBookOpen className="text-blue-500" />
            <span className="text-sm">Story</span>
          </div>
        </div>
      </div>
      {posts.map((post) => (
        <div
          key={post._id}
          className="bg-white dark:bg-zinc-900 md:p-5 p-2.5  border rounded-md mb-5"
        >
          <div className="flex justify-between gap-1.5 items-center mb-3.5">
            <div className="flex gap-1.5 items-center">
              <Image
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
            <p className=" text-gray-700 dark:text-gray-300">{post.text}</p>
            <Image
              className="rounded-md w-full border max-h-[400px]"
              src={post.image}
              alt="logo"
              width={500}
              height={300}
              priority
            />
            <div>
              <div className="flex justify-between gap-1.5 items-center pb-1.5 ">
                <p className="text-sm">{post.likes} Likes</p>
                <div className="flex items-center gap-2">
                  <p className="text-sm">{post.comments} Comments,</p>
                  <p className="text-sm">{post.shares} Shares</p>
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
  );
}
