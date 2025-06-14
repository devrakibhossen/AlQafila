"use client";
import Image from "next/image";
import ProfileSidebar from "../components/ProfileSidebar";
import ProfileEngagement from "../components/ProfileEngagement";
// import { useSession } from "next-auth/react";
import { useUser } from "@/context/UserContext";
import PersonalInfo from "../components/PersonalInfo";
import About from "../components/About";
// import { useEffect, useState } from "react";

interface UserData {
  _id: string;
  name: string;
  username: string;
  email: string;
  about: string;
  education: [
    {
      _id: string;
      institute: string;
      degree: string;
      image: string;
      startYear: string;
      endYear: string;
      gpa: string;
    }
  ];
  experience: [
    {
      _id: string;
      title: string;
      company: string;
      image: string;
      startYear: string;
      endYear: string;
      duration: string;
    }
  ];
  bio: string;
  location: string;
  profileImage: string | null;
  coverImage: string | null;
}

interface ProfileContentProps {
  user: UserData;
}
const ProfileContent = ({ user }: ProfileContentProps) => {
  // const [user, setUser] = useState<any>(null);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState("");

  const { userInfo } = useUser();

  console.log("user", user);

  const isEditOption = userInfo?.email === user?.email;

  return (
    <div className="mb-5 w-11/12 mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Main Profile Section */}

        <div className="md:col-span-2 space-y-6">
          <div className=" bg-white dark:bg-zinc-900 rounded-md shadow-lg overflow-hidden">
            {/* Cover Image */}
            <div className="relative w-full h-48">
              <Image
                src={user?.coverImage || "https://i.ibb.co/0y30WvBH/image.png"}
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
                  src={
                    user?.profileImage || "https://i.ibb.co/h5z5rWx/image.png"
                  }
                  alt="Profile"
                  width={80}
                  height={80}
                  priority
                />
              </div>
              <div className="pt-12 flex justify-between  items-center gap-5">
                <div className="space-y-1">
                  <h3 className="text-xl font-bold text-black dark:text-white">
                    {user?.name}
                  </h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    {user?.bio}
                  </p>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    {user?.location}
                  </p>
                  <div className="flex items-center gap-2.5 green-accent">
                    <p className="text-sm ">3k Follower</p>
                    <p className="text-sm ">500 Following</p>
                  </div>
                </div>
                <div className="flex justify-between gap-2.5">
                  <PersonalInfo user={user} isEditOption={isEditOption} />
                </div>
              </div>
            </div>
          </div>
          <About
            email={user?.email}
            about={user?.about}
            isEditOption={isEditOption}
          />
          <div className="">
            <ProfileEngagement />
          </div>
        </div>
        {/* Side Section */}
        <div>
          <div className=" sticky top-14">
            <ProfileSidebar userInfo={user} isEditOption={isEditOption} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileContent;
