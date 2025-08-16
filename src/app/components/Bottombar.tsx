import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { BsChatDots } from "react-icons/bs";
import { GoPeople } from "react-icons/go";
import { MdOutlineVideoLibrary, MdWorkOutline } from "react-icons/md";
import { RiHome9Line } from "react-icons/ri";
import {  SquarePlay} from "lucide-react";

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
                  ? "green-accent font-semibold"
                  : "text-gray-700 dark:text-gray-300"
              }`}
            >
              <RiHome9Line className="text-xl" />
              <p className="text-xs">Home</p>
            </Link>
          </li>
          <li>
            <Link
              href="/network"
              className={`flex flex-col items-center text-sm cursor-pointer ${
                pathname === "/network"
                  ? "green-accent font-semibold"
                  : "text-gray-700 dark:text-gray-300"
              }`}
            >
              <GoPeople className="text-xl " />
              <p className="text-xs">Network</p>
            </Link>
          </li>

          <li>
            <Link
              href="/watch"
              className={`flex flex-col items-center text-sm cursor-pointer ${
                pathname === "/watch"
                  ? "green-accent font-semibold"
                  : "text-gray-700 dark:text-gray-300"
              }`}
            >
              <SquarePlay className="w-5 h-5" />
              <p className="text-xs">Video</p>
            </Link>
          </li>
          <li>
            <Link
              href="/jobs"
              className={`flex flex-col items-center text-sm cursor-pointer ${
                pathname === "/jobs"
                  ? "green-accent font-semibold"
                  : "text-gray-700 dark:text-gray-300"
              }`}
            >
              <MdWorkOutline className="text-xl" />
              <p className="text-xs">Jobs</p>
            </Link>
          </li>
          <li>
            <Link
              href="/message"
              className={`flex flex-col items-center text-sm cursor-pointer ${
                pathname === "/message"
                  ? "green-accent font-semibold"
                  : "text-gray-700 dark:text-gray-300"
              }`}
            >
              <BsChatDots className="text-xl" />
              <p className="text-xs">Message</p>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Bottombar;
