"use client";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";
interface CompanyProfileProps {
  children?: React.ReactNode;
}
type Tab = "About" | "Posts" | "Reviews" | "Jobs";
const CompanyProfileContent = ({ children }: CompanyProfileProps) => {
  const [activeTab, setActiveTab] = useState("About");
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (pathname.includes("posts")) setActiveTab("Posts");
    else if (pathname.includes("reviews")) setActiveTab("Reviews");
    else if (pathname.includes("jobs")) setActiveTab("Jobs");
    else setActiveTab("About");
  }, [pathname]);
  const tabs = ["About", "Posts", "Reviews", "Jobs"];

  const handleTabClick = (tab:Tab) => {
    setActiveTab(tab);
    if (tab === "About") router.push(`/company/programminghero`);
    if (tab === "Posts") router.push(`/company/programminghero/posts`);
    if (tab === "Reviews") router.push(`/company/programminghero/`);
    if (tab === "Jobs") router.push(`/company/programminghero/jobs`);
  };

  return (
    <div>
      <div className=" bg-white dark:bg-zinc-900 rounded-md shadow-lg overflow-hidden">
        {/* Cover Image */}
        <div className="relative w-full h-48">
          <Image
            src={`https://i.ibb.co/bMLHPXm9/image.png`}
            alt="Cover"
            fill
            className="object-cover "
            priority
            sizes="(max-width: 768px) 100vw, 600px"
          />
        </div>

        {/* Profile Image */}
        <div className="relative px-6 pt-6 bg-white dark:bg-zinc-900">
          <div className="absolute -top-10 left-6 flex items-center gap-4">
            <Image
              className="rounded-md border-4 border-white object-cover w-22 h-22 shadow-md"
              src={`https://i.ibb.co/Txh0KzMK/image.png`}
              alt="Profile"
              width={100}
              height={100}
              priority
            />
          </div>
          <div className="pt-8 flex justify-between  items-center gap-5 mb-3">
            <div className="space-y-1">
              <h3 className="text-xl font-bold text-black dark:text-white">
                Programming Hero
              </h3>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Software company
              </p>
              <div className="flex items-center gap-2.5 green-accent">
                <p className="text-sm ">3k Follower</p>
                <p className="text-sm ">500 Following</p>
              </div>
            </div>
          </div>
          <hr></hr>
          <div className="flex gap-8 pt-2">
            {tabs.map((tab, idx) => (
              <button
                key={idx}
                onClick={() => handleTabClick(tab as Tab)}
                className={`relative pb-2 text-sm font-medium transition-colors
            ${activeTab === tab ? "green-accent" : "text-black dark:text-white"}`}
              >
                {tab}
                {activeTab === tab && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-green-accent rounded-md" />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-4">
        {activeTab === "about" ? <p>This is about Page</p> : children}
      </div>
    </div>
  );
};

export default CompanyProfileContent;
