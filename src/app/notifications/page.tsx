import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Settings } from "lucide-react";

import Image from "next/image";
import Link from "next/link";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
const page = () => {
  const notifications = [
    {
      _id: "6647a9d1a1f234001234abcd",
      type: "like",
      message: "Rakib Hossen liked your post.",
      timestamp: "2025-05-08T10:24:00Z",
      isRead: false,
      user: {
        _id: "u101",
        name: "Rakib Hossen",
        avatar: "/images/profile.png",
      },
    },
    {
      _id: "6647a9e2a1f234001234abce",
      type: "comment",
      message: "Sara commented on your photo: “Awesome click!”",
      timestamp: "2025-05-08T09:50:00Z",
      isRead: false,
      user: {
        _id: "u102",
        name: "Sara Rahman",
        avatar: "https://i.ibb.co/wq1b1Dr/1714319190841-2.jpg",
      },
    },
    {
      _id: "6647a9f3a1f234001234abcf",
      type: "follow",
      message: "John Doe started following you.",
      timestamp: "2025-05-08T08:10:00Z",
      isRead: true,
      user: {
        _id: "u103",
        name: "John Doe",
        avatar: "https://i.ibb.co/b5WMgQDn/self.jpg",
      },
    },
    {
      _id: "6647aa04a1f234001234abd0",
      type: "mention",
      message: "You were mentioned in a comment by Amina.",
      timestamp: "2025-05-07T20:15:00Z",
      isRead: false,
      user: {
        _id: "u104",
        name: "Amina Karim",
        avatar: "https://i.ibb.co/wq1b1Dr/1714319190841-2.jpg",
      },
    },
  ];

  return (
    <div className="w-11/12 mx-auto ">
      <div className="flex justify-between items-center gap-5 bg-white dark:bg-zinc-900 p-5 rounded-sm shadow-sm border">
        <h3 className="text-lg font-semibold">Notifications</h3>

        <DropdownMenu>
          <DropdownMenuTrigger>
            <HiOutlineDotsHorizontal className="text-lg" />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-52  lg:mr-40 md:mr-10 mr-4  rounded-none">
            <DropdownMenuItem className="cursor-pointer">
              <Link
                href="/settings/notifications"
                className="flex items-center gap-2"
              >
                <Settings className="h-4 w-4" />
                <span>Settings Notifications</span>
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="mt-5 ">
        {notifications.map((notification) => (
          <div
            key={notification._id}
            className="flex items-start gap-4 p-4   border-b bg-white dark:bg-zinc-900"
          >
            <Image
              src={notification.user.avatar}
              alt={notification.user.name}
              className="w-12 h-12 rounded-full object-cover"
              width={48}
              height={48}
            />
            <div className="flex-1">
              <p className="text-sm ">
                <span className="font-medium">{notification.user.name}</span>{" "}
                {notification.message.replace(notification.user.name, "")}
              </p>
              <p className="text-xs text-gray-500 mt-1">
                {new Date(notification.timestamp).toLocaleString()}
              </p>
            </div>
            {!notification.isRead && (
              <div className="w-2 h-2 mt-2 bg-green-accent rounded-full" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
