import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaMapMarkerAlt } from "react-icons/fa";

const RightSidebar = () => {
  const groups = [
    {
      id: 1,
      name: "Rakib Hossen",
      members: "@rakibhossen",
      coverImage: "https://i.ibb.co/wq1b1Dr/1714319190841-2.jpg",
    },

    {
      id: 2,
      name: "Jahid Hossen",
      members: "@jahid",
      coverImage: "https://i.ibb.co/b5WMgQDn/self.jpg",
    },
    {
      id: 3,
      name: "Fatima islam",
      members: "@fatima",
      coverImage: "https://i.ibb.co/Zzg3y84q/image.png",
    },
    {
      id: 4,
      name: "Md Jahidul Islam",
      members: "@jahidul",
      coverImage: "https://i.ibb.co/KcDf41YL/Gibli-style.png",
    },
    {
      id: 5,
      name: "Kamal Hossen",
      members: "@kamal",
      coverImage: "https://i.ibb.co/YFLQWG4g/image.png",
    },
  ];
  const hashtags = [
    "#ReactJS",
    "#NextJS",
    "#WebDevelopment",
    "#JavaScript",
    "#UIUX",
    "#Frontend",
    "#CodingLife",
    "#OpenSource",
    "#TechTrends",
    "#100DaysOfCode",
  ];

  return (
    <section className="w-10/12 mr-10 lg:mr-14 hidden lg:block">
      <div className="hidden bg-white dark:bg-zinc-900 p-4 rounded-md mb-5 shadow-md border border-gray-200 dark:border-zinc-700 w-full max-w-md mx-auto">
        <div className="flex items-center justify-between border-b border-gray-200 dark:border-zinc-700 pb-3 mb-3">
          <div>
            <div className=" justifyBetween">
              <Image
                src="https://i.ibb.co/bg1bXQMh/image.png"
                alt="logo"
                className="w-10 h-10"
                width={100}
                height={100}
              ></Image>
              <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                Prayer Times
              </h3>
            </div>
            <p className="text-sm flex items-center gap-1 text-gray-600 dark:text-gray-400">
              <FaMapMarkerAlt className="green-accent" /> Cumilla, Bangladesh
            </p>
          </div>
          <div className="text-xs green-accent">
            {new Date().toLocaleDateString()}
          </div>
        </div>

        <div className="space-y-3 ">
          {[
            { name: "Fajr", time: "04:30 AM" },
            { name: "Dhuhr", time: "12:10 PM" },
            { name: "Asr", time: "04:00 PM" },
            { name: "Maghrib", time: "06:45 PM" },
            { name: "Isha", time: "08:00 PM" },
          ].map((prayer, idx) => (
            <div
              key={idx}
              className="flex items-center justify-between px-4 py-2 bg-gray-100 dark:bg-zinc-800 rounded-md"
            >
              <span className="text-gray-700 dark:text-gray-200 font-medium">
                {prayer.name}
              </span>
              <span className="green-accent dark:text-gray-400">
                {prayer.time}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white border dark:bg-zinc-900 p-4 flex flex-col  space-y-4  rounded-md mb-5">
        <div className="flex justify-between  items-center border-b pb-3">
          <h3 className="text-gray-700 dark:text-white text-lg font-semibold">
            People Around You
          </h3>
          <BsThreeDotsVertical className="text-gray-700" />
        </div>

        {groups.map((group) => (
          <div
            key={group.id}
            className="flex justify-between gap-2.5 items-center"
          >
            <div className="flex gap-2.5 items-center">
              <Image
                className="rounded-full w-10 h-10 border shadow-md"
                src={group.coverImage}
                alt="logo"
                width={48}
                height={29}
                priority
              />
              <div>
                <h3 className="text-black dark:text-white ">
                  <Link href={`/profile/${group.name}`}>{group.name}</Link>
                </h3>
                <p className="text-[13px] dark:text-gray-300 text-gray-700">
                  {group.members}
                </p>
              </div>
            </div>
            <Link href="/username/profile">
              <button className="py-[2px] text-sm text-white px-2 bg-green-accent   w-full rounded-full cursor-pointer">
                Follow
              </button>
            </Link>
          </div>
        ))}
      </div>

      <div className="bg-white border  dark:bg-zinc-900 p-4 flex flex-col  space-y-4  rounded-md mb-5">
        <h2 className="text-gray-700 dark:text-white text-lg font-semibold border-b pb-3">
          Trending hashtags
        </h2>
        <div className="flex flex-wrap gap-3">
          {hashtags.map((tag, index) => (
            <Link
              key={index}
              href={`/hashtag/${tag.replace("#", "")}`}
              className="px-3 py-1 border backdrop-blur  hover:text-white text-gray-300 rounded-full text-sm transition-all duration-300 cursor-pointer"
            >
              {tag}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RightSidebar;
