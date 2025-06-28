import Image from "next/image";
import Link from "next/link";
import { BsThreeDotsVertical } from "react-icons/bs";
import Footer from "./Footer";

const LeftSidebar = () => {
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
    <div className="w-10/12 ml-10 lg:ml-15  min-w-[250px]  hidden md:block">
      <div className=" bg-white mb-5 dark:bg-zinc-900  rounded-t-2xl rounded-b-md shadow-lg overflow-hidden">
        {/* Cover Image */}
        <div className="relative w-full h-28">
          <Image
            src="https://i.ibb.co/0y30WvBH/image.png"
            alt="Cover"
            fill
            className="object-cover rounded-t-xl"
            priority
            sizes="(max-width: 768px) 100vw, 600px"
          />
        </div>

        {/* Profile Image */}
        <div className="relative px-6 pb-6 bg-white dark:bg-zinc-900">
          <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 ">
            <Image
              className="rounded-full border border-white object-cover w-20 h-20 shadow-md "
              src="https://i.ibb.co/wq1b1Dr/1714319190841-2.jpg"
              alt="Profile"
              width={80}
              height={80}
              priority
            />
          </div>
          <div className="pt-12 flex justify-center  items-center gap-5">
            <div className="space-y-1 text-center">
              <p className="text-sm text-gray-700 dark:text-gray-300">
                @rakibhossen
              </p>
              <h3 className="text-xl font-bold text-black dark:text-white">
                Rakib Hossen
              </h3>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                MERN Stack developer | CEO & Founder AlQafila | Programming
                Enthusiast
              </p>
            </div>
          </div>
          <hr className="my-2" />
          <div className="flex justify-between items-center gap-2.5 px-4">
            <div className="text-center py-2">
              <h3>3,356</h3>
              <p className="text-sm font-semibold green-accent ">Follower</p>
            </div>
            <div className="w-px h-8 bg-green-accent"></div>
            <div className="text-center py-2">
              <h3>600</h3>
              <p className="text-sm font-semibold green-accent ">Following</p>
            </div>
          </div>
          <hr className="my-2" />

          <Link
            href="/profile/rakibhossen"
            className=" green-accent mt-4 text-sm hover:underline   cursor-pointer flex justify-center items-center"
          >
            View Profile
          </Link>
          {/* <div className="flex justify-between gap-2.5">
              <Button className=" bg-[#155D8C] dark:text-white hover:bg-[#304655] w-full text-sm rounded-full cursor-pointer">
                Edit Profile
              </Button>
            </div> */}
        </div>
      </div>
      <div className="bg-white dark:bg-zinc-900 p-4 flex flex-col  space-y-4  rounded-md mb-5">
        <div className="flex justify-between  items-center border-b pb-3">
          <h3 className="text-gray-700 dark:text-white text-lg font-semibold">
            Suggested Groups
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

      <Footer />
    </div>
  );
};

export default LeftSidebar;
