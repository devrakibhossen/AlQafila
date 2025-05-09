import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";

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
      <div className="bg-white dark:bg-zinc-900 p-4 flex flex-col  space-y-4 border rounded-md mb-5">
        <div className="flex justify-between  items-center border-b pb-3">
          <h3 className="text-gray-700 dark:text-white text-lg font-semibold">
            People you may know
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
                  <Link href={`/group/${group.name}`}>{group.name}</Link>
                </h3>
                <p className="text-[13px] dark:text-gray-300 text-gray-700">
                  {group.members}
                </p>
              </div>
            </div>
            <Link href="/username/profile">
              <button className="py-1 text-sm text-white px-3 bg-[#155D8C] hover:bg-[#304655] w-full rounded-full cursor-pointer">
                Follow
              </button>
            </Link>
          </div>
        ))}
      </div>

      <div className="bg-white dark:bg-zinc-900 p-4 flex flex-col  space-y-4 border rounded-md mb-5">
        <h2 className="text-gray-700 dark:text-white text-lg font-semibold border-b pb-3">
          Trending hashtags
        </h2>
        <div className="flex flex-wrap gap-3">
          {hashtags.map((tag, index) => (
            <Link
              key={index}
              href={`/hashtag/${tag.replace("#", "")}`}
              className="px-3 py-1 bg-gray-100 hover:bg-[#155D8C] hover:text-white text-gray-700 rounded-full text-sm transition-all duration-300 cursor-pointer"
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
