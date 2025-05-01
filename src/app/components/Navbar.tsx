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
} from "lucide-react";
import { useTheme } from "next-themes";

const Navbar = () => {
  const pathname = usePathname();
  const { setTheme } = useTheme();
  return (
    <div className="bg-white dark:bg-zinc-900 py-1.5 fixed w-full top-0 z-10">
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
                    ? "text-[#155D8C] dark:text-[#4e8bd1] font-semibold"
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
                    ? "text-[#155D8C] dark:text-[#4e8bd1] font-semibold"
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
                    ? "text-[#155D8C] dark:text-[#4e8bd1] font-semibold"
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
                    ? "text-[#155D8C] dark:text-[#4e8bd1] font-semibold"
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
                    ? "text-[#155D8C] dark:text-[#4e8bd1] font-semibold"
                    : "text-gray-700 dark:text-gray-300"
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

          <IoNotificationsOutline className="md:text-4xl text-2xl md:border md:p-1.5 rounded-full" />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <div className="flex items-center gap-2 cursor-pointer">
                <Image
                  className="rounded-full border-2 border-gray-200 hover:border-primary transition-all"
                  src="/images/profile.png"
                  alt="User Avatar"
                  width={40}
                  height={40}
                  priority
                />
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-52 md:w-60 lg:mr-8 md:mr-5 mr-4 md:mt-2 mt-1 rounded-none">
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
                    <DropdownMenuSubContent className="rounded-none">
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
                <Link href="/language" passHref>
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
                <DropdownMenuItem className="cursor-pointer">
                  <BookMarked className=" h-4 w-4" />
                  <span>Saved Posts</span>
                  <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                </DropdownMenuItem>
              </DropdownMenuGroup>

              <DropdownMenuSeparator />

              <DropdownMenuItem className="cursor-pointer">
                <HelpCircle className=" h-4 w-4" />
                Help & Support
              </DropdownMenuItem>

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
