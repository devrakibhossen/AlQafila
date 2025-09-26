"use client";

import { useState } from "react";
// import { FaSmile } from "react-icons/fa";
// import { IoMdSend } from "react-icons/io";
// import { FaMicrophone } from "react-icons/fa6";
import { IoNotificationsOutline } from "react-icons/io5";
import Image from "next/image";
import {
  Ban,
  ImagesIcon,
  Menu,
  Phone,
  ScanEye,
  Trash2,
  Video,
  VideoIcon,
} from "lucide-react";
import { RiAttachment2 } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { BsSendFill } from "react-icons/bs";

const Page = () => {
  const [openSidebar, setOpenSidebar] = useState(false);
  const [openInfo, setOpenInfo] = useState(false);
  const [message, setMessage] = useState("");
  const chatMessages = [
    {
      id: 1,
      sender: "Tanvir Hasan",
      time: "9:10 AM",
      message: "Hey, did you check the latest designs I sent?",
      incoming: true,
    },
    {
      id: 2,
      sender: "You",
      time: "11:25 AM",
      message: "Not yet, I'll take a look later today.",
      incoming: false,
    },
  ];
  const users = [
    {
      name: "Rakib Ahmed",
      message: "Let's meet tomorrow at the cafe",
      time: "10:42 AM",
      unread: 3,
      status: "online",
    },
    {
      name: " Ahmed",
      message: "Let's meet tomorrow at the cafe",
      time: "10:42 AM",
      unread: 3,
      status: "online",
    },
    {
      name: " Shawon",
      message: "Let's meet tomorrow at the cafe",
      time: "10:42 AM",
      unread: 3,
      status: "online",
    },
    {
      name: " Ahad",
      message: "Let's meet tomorrow at the cafe",
      time: "10:42 AM",
      unread: 3,
      status: "online",
    },
    {
      name: "MD Ahmed",
      message: "Let's meet tomorrow at the cafe",
      time: "10:42 AM",
      unread: 3,
      status: "online",
    },
    {
      name: "Sumona Khan",
      message: "The project is almost complete",
      time: "Yesterday",
      unread: 0,
      status: "away",
    },
    {
      name: "Tanvir Hasan",
      message: "Did you check the latest design?",
      time: "Yesterday",
      unread: 1,
      status: "offline",
    },
    {
      name: "Nusrat Jahan",
      message: "Thank you for your help!",
      time: "Monday",
      unread: 0,
      status: "online",
    },
    {
      name: "Mohammad Ali",
      message: "When will the meeting start?",
      time: "Monday",
      unread: 0,
      status: "offline",
    },
  ];
  return (
    <main className="h-screen flex-1 flex flex-col ml-0 md:ml-[max(20rem,theme(maxWidth.xs))]">
      {/* Chat Header */}
      <div className="flex  items-center justify-between px-4 py-3 bg-white dark:bg-zinc-900 border-b  sticky md:top-16  z-10">
        <div className="flex items-center gap-1.5">
          <Menu
            className="md:hidden"
            onClick={() => setOpenSidebar(!openSidebar)}
          />
          {openSidebar && (
            <div
              className="fixed inset-0  z-10 md:hidden"
              onClick={() => setOpenSidebar(false)}
            >
              <aside
                className="  className={`w-full max-w-xs border-r bg-white dark:bg-zinc-900 fixed h-full z-20 transform transition-transform duration-300 ease-in-out ${
    openSidebar ? 'translate-x-0' : '-translate-x-full'
  } md:translate-x-0 md:static md:flex md:flex-col`}"
              >
                <div className=" px-4 py-3 border-b">
                  <div className="flex  items-center justify-between ">
                    <div className="flex items-center space-x-3">
                      <Image
                        src="https://i.ibb.co/MD6JWKbL/1.webp"
                        alt="profile"
                        className="w-10 h-10 rounded-full"
                        width={48}
                        height={48}
                      />
                      <div>
                        <h1 className="font-semibold">My Profile</h1>
                      </div>
                    </div>
                    <span className="text-xl">
                      <IoNotificationsOutline />
                    </span>
                  </div>
                  <div className=" mt-2">
                    <input
                      type="text"
                      placeholder="Search or start a new chat"
                      className="w-full bg-gray-100 dark:bg-zinc-800 px-4 py-2 rounded-md outline-none text-sm"
                    />
                  </div>
                </div>
                <div className="overflow-y-auto h-[calc(100vh-140px)]">
                  {users.map((user, index) => (
                    <div
                      key={index}
                      className="px-4 py-3 hover:bg-gray-100 cursor-pointer border-b flex justify-between items-center"
                    >
                      <div className="flex items-center space-x-3">
                        <Image
                          src={`https://i.ibb.co/MD6JWKbL/1.webp`}
                          alt="avatar"
                          className="w-10 h-10 rounded-full"
                          width={48}
                          height={48}
                        />
                        <div>
                          <h2 className="font-semibold text-sm">{user.name}</h2>
                          <p className="text-xs text-gray-500 truncate w-36">
                            {user.message}
                          </p>
                        </div>
                      </div>
                      <div className="text-right text-xs text-gray-400">
                        <p>{user.time}</p>
                        {user.unread > 0 && (
                          <span className=" mt-1 text-white text-xs ml-10   bg-green-accent w-5 h-5 flex items-center justify-center rounded-full">
                            {user.unread}
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </aside>
            </div>
          )}
          <div className="flex items-center space-x-3">
            <Image
              src="https://i.ibb.co/MD6JWKbL/1.webp"
              alt="profile"
              className="w-10 h-10 rounded-full"
              width={48}
              height={48}
            />
            <div>
              <h2 className="md:font-semibold text-sm">Tanvir Hasan</h2>
              <p className="text-xs text-gray-400">Offline</p>
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-4 text-gray-600 dark:text-gray-300 text-sm ">
          <Phone className="w-5 h-5" />
          <Video />
          <ScanEye onClick={() => setOpenInfo(!openInfo)} />
          {openInfo && (
            <div className="absolute top-0 right-0 bg-white dark:bg-zinc-900 h-screen w-72 p-5">
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-md">Contact Info</h3>
                <RxCross2 onClick={() => setOpenInfo(false)} />
              </div>
              <div className="flex gap-2 flex-col justify-center items-center">
                <Image
                  className="rounded-full border-4 border-gray-200 group-hover:scale-105 transition-transform duration-300 w-16 h-16"
                  src="https://i.ibb.co/MD6JWKbL/1.webp"
                  alt="Profile Picture"
                  width={100}
                  height={100}
                  priority
                />
                <h3 className="text-lg font-semibold">Abdul Ahad</h3>
                <p className="text-xs text-gray-400">Offline</p>
                <div className="flex gap-2 justify-center items-center">
                  <button className="flex items-center gap-2 border rounded-md p-1.5">
                    <Phone className="w-5 h-5" />
                    Audio
                  </button>
                  <button className="flex items-center gap-2 border rounded-md p-1.5">
                    <Video className="w-5 h-5" />
                    Audio
                  </button>
                </div>
              </div>
              <hr className="my-5" />
              <h3 className="text-md mb-3 dark:text-white">Settings</h3>
              <div className="flex justify-between items-center gap-5 mb-3">
                <div className="">
                  <h3 className="text-md dark:text-white">
                    Mute Notifications
                  </h3>
                  <p className="text-[12px]">
                    Turn off notifications for this chat
                  </p>
                </div>
                <Switch />
              </div>
              <div className="flex justify-between items-center gap-5 mb-3">
                <div className="">
                  <h3 className="text-md dark:text-white">
                    Auto Delete Messages
                  </h3>
                  <p className="text-[12px]">Delete messages after 7 days</p>
                </div>
                <Switch />
              </div>
              <hr className="my-5" />
              <div className="flex flex-col gap-3 mt-4">
                <Button
                  className="w-full flex items-center justify-center gap-2 bg-red-100 text-red-700 hover:bg-red-200 transition-all"
                  variant="ghost"
                >
                  <Ban className="w-4 h-4" />
                  Block Contact
                </Button>

                <Button
                  className="w-full flex items-center justify-center gap-2 bg-red-600 text-white hover:bg-red-700 transition-all"
                  variant="destructive"
                >
                  <Trash2 className="w-4 h-4" />
                  Delete Chat
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Chat Body */}
      <div className="flex-1   overflow-y-auto px-4 py-6 bg-[#f0f2f5] dark:bg-transparent space-y-3 ">
        {chatMessages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${msg.incoming ? "justify-start" : "justify-end"}`}
          >
            <div
              className={`relative px-4 py-2 text-sm mb-3 rounded-lg max-w-[75%] shadow-sm ${
                msg.incoming
                  ? "bg-white dark:bg-zinc-900 text-gray-900 dark:text-gray-300 rounded-bl-none"
                  : "bg-[#dcf8c6] text-gray-800 rounded-br-none"
              }`}
            >
              <p>{msg.message}</p>

              {/* Timestamp */}
              <div className="text-[10px] text-right text-gray-500 mt-1">
                {msg.time}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Chat Input */}
      <div className=" border-t border-b md:px-4 px-1 py-3 flex items-center md:space-x-4 space-x-2.5 bg-white dark:bg-zinc-900 sticky md:bottom-0 bottom-14">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="p-2 rounded hover:bg-gray-100 dark:hover:bg-zinc-800 transition">
              <RiAttachment2 className="text-gray-500 dark:text-gray-300 md:text-xl cursor-pointer" />
            </button>
          </DropdownMenuTrigger>

          <DropdownMenuContent className="w-40 md:ml-28">
            <DropdownMenuItem className="flex items-center gap-2 cursor-pointer">
              <ImagesIcon className="w-4 h-4 green-accent" />
              <span>Photo</span>
            </DropdownMenuItem>

            <DropdownMenuItem className="flex items-center gap-2 cursor-pointer">
              <VideoIcon className="w-4 h-4 green-accent" />
              <span>Video</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type a message"
          className="flex-1  rounded-full md:px-4 py-2 outline-none text-sm"
        />
        {/* <FaSmile className="text-gray-500 dark:text-gray-300 text-xl cursor-pointer" /> */}

        {/* <FaMicrophone className="text-gray-500 dark:text-gray-300 text-xl cursor-pointer" /> */}
       <button
                 type="submit"
                 className="flex items-center justify-center w-11 h-9 rounded-lg 
                        bg-green-accent text-white hover:bg-green-600 transition-colors"
               >
                 <BsSendFill className="text-lg" />
               </button>
      </div>
    </main>
  );
};

export default Page;
