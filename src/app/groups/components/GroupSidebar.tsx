import Image from "next/image";
import Link from "next/link";
import { BsThreeDotsVertical } from "react-icons/bs";

const GroupSidebar = () => {
  const groups = [
    {
      id: 1,
      name: "Frontend Developers",
      members: "12.5K Members",
      coverImage: "https://i.ibb.co/VYPf84DJ/image.png",
    },
    {
      id: 2,
      name: "React Enthusiasts",
      members: "8.2K Members",
      coverImage: "https://i.ibb.co/CpVxPgtQ/image.png",
    },
    {
      id: 3,
      name: "JavaScript Geeks",
      members: "15.3K Members",
      coverImage: "https://i.ibb.co/bMTBBBH9/image.png",
    },
    {
      id: 4,
      name: "UI/UX Designers",
      members: "5.7K Members",
      coverImage: "https://i.ibb.co/Zzg3y84q/image.png",
    },
    {
      id: 5,
      name: "Full Stack Warriors",
      members: "10.1K Members",
      coverImage: "https://i.ibb.co/gb4YyHHW/image.png",
    },
    {
      id: 6,
      name: "Open Source Contributors",
      members: "3.9K Members",
      coverImage: "https://i.ibb.co/YFLQWG4g/image.png",
    },
  ];

  return (
    <div className="w-full hidden md:block  ">
      <div className="bg-white dark:bg-zinc-900 p-4 flex flex-col  space-y-4 border rounded-md">
        <div className="flex justify-between  items-center border-b pb-3">
          <h3 className="text-gray-700 dark:text-white text-lg font-semibold">
            Related Groups
          </h3>
          <BsThreeDotsVertical className="text-gray-700 dark:text-gray-300" />
        </div>

        {groups.map((group) => (
          <div key={group.id} className="flex gap-2.5 items-center">
            <Image
              className="rounded-lg w-12 h-12 border shadow-md"
              src={group.coverImage}
              alt="logo"
              width={48}
              height={29}
              priority
            />
            <div>
              <h3 className="text-black dark:text-white  text-md">
                <Link href={`/groups/${group.name}`}>{group.name}</Link>
              </h3>
              <p className="text-sm dark:text-gray-300 text-gray-700">
                {group.members}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GroupSidebar;
