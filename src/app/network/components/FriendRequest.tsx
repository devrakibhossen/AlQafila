"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRef } from "react";
import { toast } from "sonner";
import SendFriendsRequst from "./SendFriendsRequst";
import React, { useEffect, useState } from "react";
import { useUser } from "@/context/UserContext";

interface FriendRequestType {
  _id: string;
  status: "pending" | "accepted" | "declined";
  sender: {
    name: string;
    username: string;
    profileImage: string;
  };
}


const FriendRequest = () => {

  const { userInfo } = useUser();
  const [requests, setRequests] = useState<FriendRequestType[]>([]);
  const [loading, setLoading] = useState(true);
  const audioRef = useRef<HTMLAudioElement>(null);
  const userId = userInfo?._id;
  console.log("My userId", userId);

  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/friend/myFriendRequests/${userId}`
        );
        if (!res.ok) {
          throw new Error("Something went wrong");
        }
        const data = await res.json();
        setRequests(data);
      } catch (error) {
         if (error instanceof Error) {
    console.error("Friend request fetch error:", error.message);
  } else {
    console.error("Unknown error occurred");
  }
      } finally {
        setLoading(false);
      }
    };

    fetchRequests();
  }, [userId]);

  console.log("My Friend Request", requests);
  const handleRequestAccept = () => {
    toast.success("Friend request accepted");
    if (audioRef.current) {
      audioRef.current.play();
    }
  };
  
  if (loading) return <div className="flex flex-col gap-5 justify-center items-center min-h-[150px]">

          <div className="w-12 h-12 border-2 border-[#104e80] border-t-transparent rounded-full animate-spin"></div> 
          </div>;;

  return (
    <div>
      <div className="mb-5">
        <h3 className="text-sm mb-2 font-semibold dark:text-white text-gray-800">
          Pending Request
        </h3>
        <div className="space-y-4">
          {requests.length === 0 ? (
            <div  className="text-xs flex flex-col gap-2 justify-center items-center text-center min-h-[100px]">
             <Image
              className="w-40 "
              src="/empty.png"
              alt="logo"
              width={200}
              height={300}
              priority
            />
            <p>There is no pending request</p>
            </div>
          ) : (
            requests.map((req) => (
              <div
                key={req?._id}
                className="flex lg:flex-row flex-col items-center gap-3 justify-between p-3 border rounded-lg hover:shadow transition"
              >
                <Image
                  src={req?.sender?.profileImage}
                  alt={req?.sender?.name}
                  className="w-12 h-12 rounded-full object-cover md:hidden"
                  width={48}
                  height={48}
                />
                <div className="flex items-center gap-3">
                  <Image
                    src={req?.sender?.profileImage}
                    alt={req?.sender?.username}
                    className="w-12 h-12 rounded-full object-cover md:block hidden"
                    width={48}
                    height={48}
                  />
                  <div>
                    <p className="font-medium dark:text-white text-gray-800">
                      {req?.sender?.name}
                    </p>
                    <p className="text-sm dark:text-gray-300 text-gray-500">
                      @{req?.sender?.username}
                    </p>
                  </div>
                </div>

                {req?.status === "pending" && (
                  <div className="flex gap-2">
                    <Button
                      onClick={() => handleRequestAccept()}
                      className="text-sm bg-green-100 text-green-700 px-3 py-1 rounded hover:bg-green-200"
                    >
                      Accept
                    </Button>
                    <audio ref={audioRef} src="requestacceptsound.ogg"></audio>
                    <button
                      onClick={() =>
                        toast("Friend request declined", {
                          description: `You have rejected ${req?.sender?.name}'s request`,
                          action: {
                            label: "Undo",
                            onClick: () => console.log("Undo reject"),
                          },
                        })
                      }
                      className="text-sm bg-red-100 text-red-700 px-3 py-1 rounded hover:bg-red-200"
                    >
                      Decline
                    </button>
                  </div>
                )}
              </div>
            ))
          )}
        </div>
      </div>
      <hr className="my-6" />
      <SendFriendsRequst />
    </div>
  );
};

export default FriendRequest;
