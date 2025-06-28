"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BsChatDots } from "react-icons/bs";
import { GoPeople } from "react-icons/go";
import { IoNotificationsOutline } from "react-icons/io5";
import { MdOutlineVideoLibrary, MdWorkOutline } from "react-icons/md";
import { RiHome9Line } from "react-icons/ri";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  User,
  Settings,
  Keyboard,
  LogOut,
  HelpCircle,
  BookMarked,
  Palette,
  Sun,
  Moon,
  Monitor,
  Languages,
  Search,
  X,
  PlusSquare,
} from "lucide-react";
import { useTheme } from "next-themes";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";

const Navbar = () => {
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);

  const pathname = usePathname();
  const { setTheme } = useTheme();
  return (
    <div className="bg-white dark:bg-zinc-900 py-1.5 fixed w-full top-0 z-10 border-b">
      <div className="md:w-11/12 mx-auto px-1 gap-1.5 flex justify-between items-center max-w-[1300px] ">
        <div className="flex gap-5 items-center">
          <Link href="/">
            <Image
              className="w-40 h-[51px]"
              src="/alQafila.png"
              alt="logo"
              width={200}
              height={150}
              priority
            />
          </Link>
        </div>
        <div className="lg:ml-36  hidden lg:block">
          <ul className="flex items-center md:gap-6 gap-2.5">
            <li>
              <Link
                href="/"
                className={`flex flex-col items-center text-sm cursor-pointer ${
                  pathname === "/"
                    ? "green-accent  font-semibold"
                    : "text-gray-700 dark:text-gray-300"
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
                    ? "green-accent font-semibold"
                    : "text-gray-700 dark:text-gray-300"
                }`}
              >
                <GoPeople className="text-xl " />
                <p className="hidden lg:block">Network</p>
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
                <MdOutlineVideoLibrary className="text-xl" />
                <p className="hidden lg:block">Videos</p>
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
                <p className="hidden lg:block">Jobs</p>
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
                <p className="hidden lg:block">Message</p>
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-4 ">
          {/* <Input
            type="search"
            className="rounded-full md:w-72 md:p-5 hidden md:block"
            placeholder="Search..."
          /> */}
          <div className="md:flex items-center gap-2 rounded-full px-4 py-2.5 md:w-72 bg-gray-100 dark:bg-zinc-950 hidden">
            <FaSearch className="text-gray-400" />
            <input
              type="text"
              placeholder="Search"
              className="w-full outline-none text-sm bg-transparent"
            />
          </div>
          {/* Search Icon Only for Mobile */}
          <div className="md:hidden mt-1">
            <button
              className="green-accent"
              onClick={() => setMobileSearchOpen(true)}
            >
              <Search size={22} />
            </button>
          </div>

          {/* Mobile Slide Search Bar */}
          {mobileSearchOpen && (
            <div className="fixed top-0 left-0 w-full h-full bg-white dark:bg-zinc-900 z-50 flex flex-col p-4">
              <div className="flex justify-between items-center mb-4">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full p-2 text-lg border-b border-gray-300 bg-transparent focus:outline-none"
                />
                <button
                  onClick={() => setMobileSearchOpen(false)}
                  className="ml-4"
                >
                  <X size={24} />
                </button>
              </div>
            </div>
          )}

          <Link href="/notifications">
            <IoNotificationsOutline className="md:text-4xl text-2xl md:border md:p-1.5 rounded-full" />
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              {/* <div className="flex items-center gap-2 cursor-pointer"> */}
              <Image
                className="rounded-full object-cover border-2 w-10 h-10 border-gray-200 hover:border-primary transition-all"
                src="https://i.ibb.co/wq1b1Dr/1714319190841-2.jpg"
                alt="User Avatar"
                width={50}
                height={50}
                priority
              />
              {/* </div> */}
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-52 md:w-60 lg:mr-8 md:mr-5 border-none mr-4 md:mt-2 mt-1 rounded-lg p-2">
              <DropdownMenuGroup>
                <DropdownMenuItem asChild>
                  <Link
                    href="/profile/rakibhossen"
                    className="flex items-center gap-2"
                  >
                    <User className="h-4 w-4" />
                    <span>My Profile</span>
                  </Link>
                </DropdownMenuItem>

                <DropdownMenuItem className="cursor-pointer">
                  <Link href="/settings" className="flex items-center gap-2">
                    <Settings className="h-4 w-4" />
                    <span>Settings</span>
                  </Link>
                  <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                </DropdownMenuItem>

                <DropdownMenuItem className="cursor-pointer">
                  <Keyboard className=" h-4 w-4" />
                  <span>Keyboard Shortcuts</span>
                  <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
                </DropdownMenuItem>
              </DropdownMenuGroup>

              <DropdownMenuSeparator />

              <DropdownMenuGroup>
                <DropdownMenuSub>
                  <DropdownMenuSubTrigger>
                    <Palette className="mr-2 h-4 w-4" />
                    <span>Theme</span>
                  </DropdownMenuSubTrigger>
                  <DropdownMenuPortal>
                    <DropdownMenuSubContent className="rounded-lg">
                      <DropdownMenuItem onClick={() => setTheme("light")}>
                        <Sun className="mr-2 h-4 w-4" />
                        Light
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => setTheme("dark")}>
                        <Moon className="mr-2 h-4 w-4" />
                        Dark
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => setTheme("system")}>
                        <Monitor className="mr-2 h-4 w-4" />
                        System
                      </DropdownMenuItem>
                    </DropdownMenuSubContent>
                  </DropdownMenuPortal>
                </DropdownMenuSub>
                <Link href="/settings/languages" passHref>
                  <DropdownMenuItem asChild className="cursor-pointer">
                    <div className="flex items-center justify-between w-full">
                      <div className="flex items-center gap-2">
                        <Languages className="h-4 w-4" />
                        <span>Language</span>
                      </div>
                      <DropdownMenuShortcut>⌘L</DropdownMenuShortcut>
                    </div>
                  </DropdownMenuItem>
                </Link>

                <Link href="/savedPosts" passHref>
                  <DropdownMenuItem className="cursor-pointer">
                    <BookMarked className=" h-4 w-4" />
                    <span>Saved Posts</span>
                    <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                  </DropdownMenuItem>
                </Link>
              </DropdownMenuGroup>

              <DropdownMenuSeparator />

              <DropdownMenuItem className="cursor-pointer">
                <HelpCircle className=" h-4 w-4" />
                Help & Support
              </DropdownMenuItem>
              <Link href="/createGroup" passHref>
                <DropdownMenuItem className="cursor-pointer">
                  <PlusSquare className=" h-4 w-4" />
                  Create Group
                </DropdownMenuItem>
              </Link>
              <DropdownMenuSeparator />

              <DropdownMenuItem className="text-red-500 font-medium cursor-pointer">
                <LogOut className=" h-4 w-4" />
                Log out
                <DropdownMenuShortcut>⇧⌘L</DropdownMenuShortcut>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
