import Image from "next/image";
import React from "react";
import { IoNotificationsOutline } from "react-icons/io5";

const MessageSidebar = () => {
  const users = [
    {
      name: "Rakib Ahmed",
      message: "Let's meet tomorrow at the cafe",
      time: "10:42 AM",
      unread: 3,
      status: "online",
      profileImage:"https://res.cloudinary.com/duhybktme/image/upload/v1754026559/gsnhh1p3qt7etswiqeep.jpg"
    },
    {
      name: " Ahmed",
      message: "Let's meet tomorrow at the cafe",
      time: "10:42 AM",
      unread: 3,
      status: "online",
       profileImage:"https://res.cloudinary.com/duhybktme/image/upload/v1754316559/w9cf7fjcoqomrhq6wheg.webp"
    },
    {
      name: " Shawon",
      message: "Let's meet tomorrow at the cafe",
      time: "10:42 AM",
      unread: 3,
      status: "online",
       profileImage:"https://res.cloudinary.com/duhybktme/image/upload/v1754316559/w9cf7fjcoqomrhq6wheg.webp"
    },
    {
      name: " Ahad",
      message: "Let's meet tomorrow at the cafe",
      time: "10:42 AM",
      unread: 3,
      status: "online",
       profileImage:"https://res.cloudinary.com/duhybktme/image/upload/v1754316559/w9cf7fjcoqomrhq6wheg.webp"
    },
    {
      name: "MD Ahmed",
      message: "Let's meet tomorrow at the cafe",
      time: "10:42 AM",
      unread: 3,
      status: "online",
       profileImage:"https://res.cloudinary.com/duhybktme/image/upload/v1754316559/w9cf7fjcoqomrhq6wheg.webp"
    },
    {
      name: "Sumona Khan",
      message: "The project is almost complete",
      time: "Yesterday",
      unread: 0,
      status: "away",
       profileImage:"https://res.cloudinary.com/duhybktme/image/upload/v1754316559/w9cf7fjcoqomrhq6wheg.webp"
    },
    // {
    //   name: "Tanvir Hasan",
    //   message: "Did you check the latest design?",
    //   time: "Yesterday",
    //   unread: 1,
    //   status: "offline",
    // },
    // {
    //   name: "Nusrat Jahan",
    //   message: "Thank you for your help!",
    //   time: "Monday",
    //   unread: 0,
    //   status: "online",
    // },
    // {
    //   name: "Mohammad Ali",
    //   message: "When will the meeting start?",
    //   time: "Monday",
    //   unread: 0,
    //   status: "offline",
    // },
  ];
  return (
    <aside className="w-full max-w-xs border-r bg-white dark:bg-zinc-900 hidden md:flex md:flex-col fixed h-full z-20 mt-2">
      <div className=" px-4 py-3 border-b">
        <div className="flex  items-center justify-between ">
          <div className="flex items-center space-x-3">
            <Image
              src="https://res.cloudinary.com/duhybktme/image/upload/v1754316559/w9cf7fjcoqomrhq6wheg.webp"
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
            className="w-full bg-gray-100 dark:bg-zinc-950 px-4 py-2 rounded-md outline-none text-sm"
          />
        </div>
      </div>
      <div className="overflow-y-auto h-[calc(100vh-140px)]">
        {users.map((user, index) => (
          <div
            key={index}
            className="px-4 py-3 hover:bg-gray-100 dark:hover:bg-zinc-950 cursor-pointer border-b flex justify-between items-center"
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
                <span className=" mt-1 text-white text-xs ml-10 bg-green-accent w-5 h-5 flex items-center justify-center rounded-full">
                  {user.unread}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default MessageSidebar;
