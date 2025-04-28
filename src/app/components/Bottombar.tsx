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
    <div className="lg:hidden fixed z-10 bottom-0 bg-white w-full py-2">
      <div className="w-11/12 mx-auto">
        <ul className="flex items-center justify-between">
          <li>
            <Link
              href="/"
              className={`flex flex-col items-center text-sm cursor-pointer ${
                pathname === "/"
                  ? "text-[#155D8C] font-semibold"
                  : "text-gray-700"
              }`}
            >
              <RiHome9Line className="text-xl" />
              <p className="">Home</p>
            </Link>
          </li>
          <li>
            <Link
              href="/network"
              className={`flex flex-col items-center text-sm cursor-pointer ${
                pathname === "/network"
                  ? "text-[#155D8C] font-semibold"
                  : "text-gray-700"
              }`}
            >
              <GoPeople className="text-xl " />
              <p className="">Network</p>
            </Link>
          </li>

          <li>
            <Link
              href="/watch"
              className={`flex flex-col items-center text-sm cursor-pointer ${
                pathname === "/watch"
                  ? "text-[#155D8C] font-semibold"
                  : "text-gray-700"
              }`}
            >
              <MdOutlineVideoLibrary className="text-xl" />
              <p className="">Videos</p>
            </Link>
          </li>
          <li>
            <Link
              href="/jobs"
              className={`flex flex-col items-center text-sm cursor-pointer ${
                pathname === "/jobs"
                  ? "text-[#155D8C] font-semibold"
                  : "text-gray-700"
              }`}
            >
              <MdWorkOutline className="text-xl" />
              <p className="">Jobs</p>
            </Link>
          </li>
          <li>
            <Link
              href="/message"
              className={`flex flex-col items-center text-sm cursor-pointer ${
                pathname === "/message"
                  ? "text-[#155D8C] font-semibold"
                  : "text-gray-700"
              }`}
            >
              <BsChatDots className="text-xl" />
              <p className="">Message</p>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Bottombar;
