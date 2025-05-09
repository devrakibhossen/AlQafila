import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { BsChatDots } from "react-icons/bs";
import { GoPeople } from "react-icons/go";
import { MdOutlineVideoLibrary, MdWorkOutline } from "react-icons/md";
import { RiHome9Line } from "react-icons/ri";

const Bottombar = () => {
  const pathname = usePathname();
  return (
    <div className="lg:hidden border-t fixed z-10 bottom-0 bg-white dark:bg-zinc-900  w-full py-2">
      <div className="w-11/12 mx-auto">
        <ul className="flex items-center justify-between">
          <li>
            <Link
              href="/"
              className={`flex flex-col items-center text-sm cursor-pointer ${
                pathname === "/"
                  ? "text-[#155D8C] dark:text-[#4e8bd1] font-semibold"
                  : "text-gray-700 dark:text-gray-300"
              }`}
            >
              <RiHome9Line className="text-xl" />
              <p className="text-sm">Home</p>
            </Link>
          </li>
          <li>
            <Link
              href="/network"
              className={`flex flex-col items-center text-sm cursor-pointer ${
                pathname === "/network"
                  ? "text-[#155D8C] dark:text-[#4e8bd1] font-semibold"
                  : "text-gray-700 dark:text-gray-300"
              }`}
            >
              <GoPeople className="text-xl " />
              <p className="text-sm">Network</p>
            </Link>
          </li>

          <li>
            <Link
              href="/watch"
              className={`flex flex-col items-center text-sm cursor-pointer ${
                pathname === "/watch"
                  ? "text-[#155D8C] dark:text-[#4e8bd1] font-semibold"
                  : "text-gray-700 dark:text-gray-300"
              }`}
            >
              <MdOutlineVideoLibrary className="text-xl" />
              <p className="text-sm">Videos</p>
            </Link>
          </li>
          <li>
            <Link
              href="/jobs"
              className={`flex flex-col items-center text-sm cursor-pointer ${
                pathname === "/jobs"
                  ? "text-[#155D8C] dark:text-[#4e8bd1] font-semibold"
                  : "text-gray-700 dark:text-gray-300"
              }`}
            >
              <MdWorkOutline className="text-xl" />
              <p className="text-sm">Jobs</p>
            </Link>
          </li>
          <li>
            <Link
              href="/message"
              className={`flex flex-col items-center text-sm cursor-pointer ${
                pathname === "/message"
                  ? "text-[#155D8C] dark:text-[#4e8bd1] font-semibold"
                  : "text-gray-700 dark:text-gray-300"
              }`}
            >
              <BsChatDots className="text-xl" />
              <p className="text-sm">Message</p>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Bottombar;
