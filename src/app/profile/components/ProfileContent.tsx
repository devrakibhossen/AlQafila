"use client";
import Image from "next/image";
import ProfileSidebar from "../components/ProfileSidebar";
import ProfileEngagement from "../components/ProfileEngagement";
// import { useSession } from "next-auth/react";
import { useUser } from "@/context/UserContext";
import PersonalInfo from "../components/PersonalInfo";
import About from "../components/About";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchUserProfile } from "@/store/features/userProfile/userProfileSlice";
import { AppDispatch, RootState } from "@/store/store";
import { Skeleton } from "@/components/ui/skeleton";
import CreatePost from "@/app/components/CreatePost";

interface ProfileContentProps {
  username: string;
}
const ProfileContent = ({ username }: ProfileContentProps) => {
  const { userInfo } = useUser();

  const dispatch = useDispatch<AppDispatch>();
  const { userProfile, isLoading } = useSelector(
    (state: RootState) => state.userProfile
  );

  useEffect(() => {
    if (username) {
      dispatch(fetchUserProfile(username));
    }
  }, [dispatch, username]);

  console.log("User form redux ", userProfile);

  // console.log("user", user);

  const isEditOption = userInfo?.email === userProfile?.email;

  if (isLoading) {
    return (
      <div className="grid grid-cols-3 gap-5 w-11/12 mx-auto">
        <div className="col-span-2  space-y-6">
          {/* Cover Image */}
          <Skeleton className="w-full h-52 rounded-md" />

          {/* Profile Picture and Info */}
          <div className="flex items-center gap-4 -mt-12 bg-white dark:bg-zinc-900 dark:border-zinc-800/40 border rounded-md p-4">
            <Skeleton className="w-24 h-24 rounded-full border-4 border-white shadow-md" />
            <div className="space-y-2">
              <Skeleton className="h-6 w-40 rounded-md" />
              <Skeleton className="h-4 w-60 rounded-md" />
              <Skeleton className="h-4 w-32 rounded-md" />
            </div>
          </div>

          {/* Follower / Following */}
          <div className="flex gap-4 px-4">
            <Skeleton className="h-4 w-24 rounded-md" />
            <Skeleton className="h-4 w-24 rounded-md" />
          </div>

          {/* About Section */}
          <div className="bg-white dark:bg-zinc-900 dark:border-zinc-800/40 border rounded-md p-4">
            <Skeleton className="h-6 w-24 mb-2 rounded-md" />
            <Skeleton className="h-4 w-full mb-1 rounded-md" />
            <Skeleton className="h-4 w-5/6 mb-1 rounded-md" />
            <Skeleton className="h-4 w-4/6 mb-1 rounded-md" />
          </div>
        </div>
        <div className="col-span-1  space-y-6">
          {/* Education */}
          <div className="bg-white dark:bg-zinc-900 dark:border-zinc-800/40 border rounded-md p-4 space-y-4">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="flex justify-between items-center gap-3">
                <div className="flex gap-3 items-center">
                  <Skeleton className="w-10 h-10 rounded-full" />
                  <div className="space-y-1">
                    <Skeleton className="w-28 h-3 rounded" />
                    <Skeleton className="w-20 h-2 rounded" />
                  </div>
                </div>
                <Skeleton className="w-16 h-6 rounded-full" />
              </div>
            ))}
          </div>

          {/* Experience */}
          <div className="bg-white dark:bg-zinc-900 dark:border-zinc-800/40 border rounded-md p-4 space-y-4">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="flex justify-between items-center gap-3">
                <div className="flex gap-3 items-center">
                  <Skeleton className="w-10 h-10 rounded-full" />
                  <div className="space-y-1">
                    <Skeleton className="w-28 h-3 rounded" />
                    <Skeleton className="w-20 h-2 rounded" />
                  </div>
                </div>
                <Skeleton className="w-16 h-6 rounded-full" />
              </div>
            ))}
          </div>

          {/* Profile URL */}
          <div className="bg-white dark:bg-zinc-900 dark:border-zinc-800/40 border rounded-md p-4">
            {[...Array(1)].map((_, i) => (
              <div key={i} className="flex justify-between items-center gap-3">
                <div className="flex gap-3 items-center">
                  <Skeleton className="w-10 h-10 rounded-full" />
                  <div className="space-y-1">
                    <Skeleton className="w-28 h-3 rounded" />
                    <Skeleton className="w-20 h-2 rounded" />
                  </div>
                </div>
                <Skeleton className="w-16 h-6 rounded-full" />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="mb-5 w-11/12 mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Main Profile Section */}

        <div className="md:col-span-2 space-y-6">
          <div className=" bg-white dark:bg-zinc-900 rounded-md shadow-lg overflow-hidden">
            {/* Cover Image */}
            <div className="relative w-full h-48">
              <Image
                src={
                  userProfile?.coverImage ||
                  "https://i.ibb.co/0y30WvBH/image.png"
                }
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
                    userProfile?.profileImage ||
                    "https://i.ibb.co/h5z5rWx/image.png"
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
                    {userProfile?.name}
                  </h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    {userProfile?.bio}
                  </p>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    {userProfile?.locations}
                  </p>
                  <div className="flex items-center gap-2.5 green-accent">
                    <p className="text-sm ">3k Follower</p>
                    <p className="text-sm ">500 Following</p>
                  </div>
                </div>
                <div className="flex justify-between gap-2.5">
                  {/* <PersonalInfo
                    user={userProfile}
                    isEditOption={isEditOption}
                  /> */}
                  {userProfile && (
                    <PersonalInfo
                      user={userProfile}
                      isEditOption={isEditOption}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
          {userProfile && (
            <About
              email={userProfile?.email}
              about={userProfile?.about}
              isEditOption={isEditOption}
            />
          )}

          <CreatePost></CreatePost>

          <div className="">
            <ProfileEngagement />
          </div>
        </div>
        {/* Side Section */}
        <div>
          <div className=" sticky top-14">
            {userProfile && (
              <ProfileSidebar
                userInfo={userProfile}
                isEditOption={isEditOption}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileContent;
