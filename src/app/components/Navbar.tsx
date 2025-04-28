"use client";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BsChatDots } from "react-icons/bs";
import { GoPeople } from "react-icons/go";
import { IoNotificationsOutline } from "react-icons/io5";
import { MdOutlineVideoLibrary, MdWorkOutline } from "react-icons/md";
import { RiHome9Line } from "react-icons/ri";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <div className="bg-white py-1.5 fixed w-full top-0 z-10">
      <div className="w-11/12 mx-auto gap-1.5 flex justify-between items-center">
        <div className="flex gap-5 items-center">
          <Image
            className="hidden md:block"
            src="/alQafila.png"
            alt="logo"
            width={150}
            height={30}
            priority
          />
          <Image
            className=" md:hidden"
            src="/favicon.ico"
            alt="logo"
            width={48}
            height={28}
            priority
          />
        </div>
        <div className="lg:ml-36  hidden lg:block">
          <ul className="flex items-center md:gap-6 gap-2.5">
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
                <p className="hidden lg:block">Home</p>
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
                <p className="hidden lg:block">Network</p>
              </Link>
            </li>

            <li>
              <Link
                href="/videos"
                className={`flex flex-col items-center text-sm cursor-pointer ${
                  pathname === "/videos"
                    ? "text-[#155D8C] font-semibold"
                    : "text-gray-700"
                }`}
              >
                <MdOutlineVideoLibrary className="text-xl" />
                <p className="hidden lg:block">Videos</p>
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
                <p className="hidden lg:block">Jobs</p>
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
                <p className="hidden lg:block">Message</p>
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex items-center md:gap-4 gap-2">
          <Input
            type="search"
            className="rounded-full md:w-72 md:p-5 "
            placeholder="Start typing to search..."
          />
          <IoNotificationsOutline className="md:text-4xl text-3xl md:border md:not-first:p-1.5 rounded-full" />
          <Image
            className="rounded-full "
            src="/images/profile.png"
            alt="logo"
            width={48}
            height={29}
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
