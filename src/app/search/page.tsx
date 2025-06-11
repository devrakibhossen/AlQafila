"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import Link from "next/link";
import Image from "next/image";

const page = () => {
  const people = [
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
      id: 4,
      name: "Md Jahidul Islam",
      members: "@jahidul",
      coverImage: "https://i.ibb.co/KcDf41YL/Gibli-style.png",
    },
  ];
  return (
    <div className="md:w-11/12 mx-auto md:px-0 px-2 ">
      {/* Sorting Tabs */}
      <Swiper className="mySwiper" spaceBetween={10}>
        {[
          "All",
          "People",
          "Groups",
          "Posts",
          "Photos",
          "Videos",
          "Pages",
          "Events",
          "Reels",
          "Marketplace",
        ].map((tab, idx) => (
          <SwiperSlide key={idx} className="!w-auto">
            <button className="px-4 py-1 rounded-full border bg-white text-sm text-gray-700 whitespace-nowrap">
              {tab}
            </button>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex flex-col gap-3 mt-5">
        {people.map((group) => (
          <div
            key={group.id}
            className="flex items-center justify-between p-4 rounded-lg shadow-sm bg-white dark:bg-zinc-900 transition-all duration-300"
          >
            {/* Group Info */}
            <div className="flex items-center gap-4">
              <Image
                className="rounded-full w-12 h-12 border border-gray-300 shadow"
                src={group.coverImage}
                alt={`${group.name} logo`}
                width={48}
                height={48}
                priority
              />
              <div>
                <h3 className="text-base font-medium text-black dark:text-white">
                  <Link href={`/profile/${group.name}`}>{group.name}</Link>
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {group.members}
                </p>
              </div>
            </div>

            {/* Follow Button */}
            <button className="px-4 py-1.5 text-sm font-medium text-white bg-green-accent hover:bg-green-600 transition rounded-full">
              Follow
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
