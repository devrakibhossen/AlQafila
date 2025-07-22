"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaMapMarkerAlt } from "react-icons/fa";
import { useEffect, useState } from "react";
interface userDataProps {
  _id?: string;
  email: string;
  username: string;
  name?: string;
  profileImage?: string;
}
const RightSidebar = () => {
  const [users, setUsers] = useState<userDataProps[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/users`
        );
        const data = await res.json();
        setUsers(data?.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching users:", error);
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) return <p>Loading...</p>;

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
      <div className="hidden bg-white dark:bg-[#0B1222] p-4 rounded-md mb-5 shadow-md border border-gray-200 dark:border-zinc-700 w-full max-w-md mx-auto">
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

      <div className="bg-white border dark:border-zinc-800/40 dark:bg-zinc-900 p-4 flex flex-col  space-y-4  rounded-md mb-5">
        <div className="flex justify-between  items-center border-b pb-3">
          <h3 className="text-gray-700 dark:text-white text-lg font-semibold">
            People Around You
          </h3>
          <BsThreeDotsVertical className="text-gray-700" />
        </div>

        {users.slice(0, 6).map((user) => (
          <div
            key={user._id}
            className="flex justify-between gap-2.5 items-center"
          >
            <div className="flex gap-2.5 items-center">
              {user?.profileImage ? (
                <Image
                  src={user?.profileImage}
                  alt={user?.name || "Profile"}
                  className="w-10 h-10 rounded-full object-cover"
                  width={48}
                  height={48}
                />
              ) : (
                <div className="w-10 h-10 flex items-center justify-center rounded-full border text-[#10b981] font-semibold text-lg bg-green-200">
                  {user?.username?.charAt(0).toUpperCase()}
                </div>
              )}
              <div>
                <h3 className="text-black dark:text-white ">
                  <Link href={`/profile/${user.username}`}>
                    {user.name || user.username}
                  </Link>
                </h3>
                <p className="text-[13px] dark:text-gray-300 text-gray-700">
                  @{user.username.slice(0, 12)}
                </p>
              </div>
            </div>
            <div>
              <button className="py-[2px] text-sm text-white px-2 bg-green-accent   w-full rounded-full cursor-pointer">
                Follow
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white border dark:border-zinc-800/40 dark:bg-zinc-900 p-4 flex flex-col  space-y-4  rounded-md mb-5">
        <h2 className="text-gray-700 dark:text-white text-lg font-semibold border-b pb-3">
          Trending hashtags
        </h2>
        <div className="flex flex-wrap gap-3">
          {hashtags.map((tag, index) => (
            <Link
              key={index}
              href={`/hashtag/${tag.replace("#", "")}`}
              className="px-3 py-1 border backdrop-blur  hover:text-green-600 text-gray-700 dark:text-gray-300 rounded-full text-sm transition-all  duration-300 cursor-pointer"
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
