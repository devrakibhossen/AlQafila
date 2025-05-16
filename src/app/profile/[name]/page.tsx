import { Button } from "@/components/ui/button";
import Image from "next/image";
import { MdOutlineEdit } from "react-icons/md";
import ProfileSidebar from "../components/ProfileSidebar";
import ProfileEngagement from "../components/ProfileEngagement";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Profile | Rakib Hossen",
};
const page = () => {
  return (
    <div className="mt-20 mb-5 w-11/12 mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Main Profile Section */}

        <div className="md:col-span-2 space-y-6">
          <div className=" bg-white dark:bg-zinc-900 rounded-md shadow-lg overflow-hidden">
            {/* Cover Image */}
            <div className="relative w-full h-48">
              <Image
                src="https://i.ibb.co/PGfp2cJ1/image.png"
                alt="Cover"
                fill
                className="object-cover "
                priority
                sizes="(max-width: 768px) 100vw, 600px"
              />
            </div>

            {/* Profile Image */}
            <div className="relative px-6 pb-6 bg-white dark:bg-zinc-900">
              <div className="absolute -top-10 left-6">
                <Image
                  className="rounded-full border-4 border-white object-cover w-20 h-20 shadow-md"
                  src="https://i.ibb.co/wq1b1Dr/1714319190841-2.jpg"
                  alt="Profile"
                  width={80}
                  height={80}
                  priority
                />
              </div>
              <div className="pt-12 flex justify-between  items-center gap-5">
                <div className="space-y-1">
                  <h3 className="text-xl font-bold text-black dark:text-white">
                    Rakib Hossen
                  </h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    MERN Stack developer | CEO & Founder AlQafila | Programming
                    Enthusiast
                  </p>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Cumilla,Bangladesh
                  </p>
                  <div className="flex items-center gap-2.5">
                    <p className="text-sm text-[#155D8C]">3k Follower</p>
                    <p className="text-sm text-[#155D8C]">500 Following</p>
                  </div>
                </div>
                <div className="flex justify-between gap-2.5">
                  <Button className=" bg-[#155D8C] dark:text-white hover:bg-[#304655] w-full text-sm rounded-full cursor-pointer">
                    Edit Profile
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className=" bg-white dark:bg-zinc-900 rounded-md shadow-lg p-6">
            <div className="flex justify-between items-center mb-3">
              <h4 className="text-lg font-semibold dark:text-white text-gray-800">
                About
              </h4>
              <MdOutlineEdit className="text-gray-700 dark:text-gray-300 text-2xl"></MdOutlineEdit>
            </div>

            <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
              Thank you for visiting my profile!, I am a passionate Front-End
              Developer with experience in creating dynamic and responsive web
              applications using React, Tailwind CSS, and Next.js.
              <span className="text-sm text-[#155D8C] cursor-pointer">
                see more
              </span>
            </p>
          </div>
          <div className="">
            <ProfileEngagement />
          </div>
        </div>
        {/* Side Section */}
        <div>
          <div className=" sticky top-14">
            <ProfileSidebar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
