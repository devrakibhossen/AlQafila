"use client";

import { useUser } from "@/context/UserContext";
import { useSocket } from "@/hooks/useSocket";
// import { RootState } from "@/store/store";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
// import { useSelector } from "react-redux";
import { toast } from "sonner";

interface UserDataProps {
  _id?: string;
  email: string;
  username: string;
  name?: string;
  profileImage?: string;
}

const SendFriendsRequest = () => {
  const { userInfo } = useUser();
  const userId = userInfo?._id;

  useSocket(userId);

  const [users, setUsers] = useState<UserDataProps[]>([]);
  const [loading, setLoading] = useState(true);

  // const notifications = useSelector(
  //   (state: RootState) => state.socket.notifications
  // );

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/users`
        );
        const data = await res.json();
        setUsers(data?.data);
      } catch (error) {
        console.error("Error fetching users:", error);
        toast.error("Failed to load users");
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) return <p>Loading...</p>;

  const handleFriendRequest = async (receiverId: string | undefined) => {
    if (!userId || !receiverId) {
      toast.error("Invalid user info");
      return;
    }

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/friend/friend-requests`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            sender: userId,
            receiver: receiverId,
          }),
        }
      );

      const data = await res.json();

      if (res.ok) {
        toast.success("Friend request sent!");
      } else {
        toast.error(data.message || "Something went wrong");
      }
    } catch (error) {
      toast.error("Failed to send friend request");
      console.error(error);
    }
  };

  return (
    <div>
      <h3 className="text-sm mb-2 font-semibold dark:text-white text-gray-800">
        People around you
      </h3>

      {/* notifications UI দেখানোর উদাহরণ (তুমি চাইলে এক্ষেত্রে ব্যবহার করতে পারো) */}
      {/* 
      <div>
        {notifications.map((note, index) => (
          <p key={index} className="text-sm text-green-600">
            {note}
          </p>
        ))}
      </div> 
      */}

      <div className="grid lg:grid-cols-4 grid-cols-2 gap-4">
        {users.map((user) => (
          <div
            key={user._id}
            className="flex flex-col items-center justify-between p-3 border rounded-lg hover:shadow transition"
          >
            <div className="flex flex-col items-center gap-3 mb-3">
              {user.profileImage ? (
                <Image
                  src={user.profileImage}
                  alt={user.name || "Profile"}
                  className="w-12 h-12 rounded-full object-cover"
                  width={48}
                  height={48}
                />
              ) : (
                <div className="w-12 h-12 flex items-center justify-center rounded-full border text-[#10b981] font-semibold text-lg bg-green-200">
                  {user.username?.charAt(0).toUpperCase()}
                </div>
              )}

              <div className="text-center">
                <p className="font-medium dark:text-white text-gray-800">
                  {user.name || user.username}
                </p>
                <p className="text-xs dark:text-gray-300 text-gray-500">
                  @{user.username}
                </p>
              </div>
            </div>

            <div>
              <Link href={`/profile/${user.username}`}>
                <button className="text-sm w-full rounded-full border px-3 py-1 hover:bg-gray-200 dark:hover:bg-black">
                  Profile
                </button>
              </Link>
              <button
                onClick={() => handleFriendRequest(user._id)}
                className="mt-2 text-sm w-full bg-green-accent text-white py-1 rounded-full"
              >
                Send Request
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SendFriendsRequest;
