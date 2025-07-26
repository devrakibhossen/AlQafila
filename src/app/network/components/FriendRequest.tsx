"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRef } from "react";
import { toast } from "sonner";
import SendFriendsRequst from "./SendFriendsRequst";
import React, { useEffect } from "react";
import { useUser } from "@/context/UserContext";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {
  acceptRequest,
  declineRequest,
  fetchFriendRequests,
} from "@/store/features/friendRequest/friendRequestSlice";

// interface FriendRequestType {
//   _id: string;
//   status: "pending" | "accepted" | "declined";
//   sender: {
//     name: string;
//     username: string;
//     profileImage: string;
//   };
// }

const FriendRequest = () => {
  const { userInfo } = useUser();
  const audioRef = useRef<HTMLAudioElement>(null);
  const userId = userInfo?._id;
  const dispatch = useAppDispatch();
  const { friendRequest, isLoading } = useAppSelector(
    (state) => state.friendRequest
  );
  console.log("Feact friend request ", friendRequest);

  useEffect(() => {
    if (userId) {
      dispatch(fetchFriendRequests(userId));
    }
  }, [userId, dispatch]);


  const handleRequestAccept = (id: string) => {
    dispatch(acceptRequest(id));
    toast.success("Friend request accepted");
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  const handleDeclineRequest = (id: string) => {
    dispatch(declineRequest(id));
    toast.success("Friend request declined");
  };

  if (isLoading)
    return (
      <div className="flex flex-col gap-5 justify-center items-center min-h-[150px]">
        <div className="w-12 h-12 border-2 border-[#0866ff] border-t-transparent rounded-full animate-spin"></div>
      </div>
    );

  return (
    <div>
      <div className="mb-5">
        <h3 className="text-sm mb-2 font-semibold dark:text-white text-gray-800">
          Pending Request
        </h3>
        <div className="space-y-4">
          {friendRequest.length === 0 ? (
            <div className="text-xs flex flex-col gap-2 justify-center items-center text-center min-h-[100px]">
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
            friendRequest.map((req) => (
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

                <div className="flex gap-2">
                  <Button
                    onClick={() => handleRequestAccept(req?._id)}
                    className="text-sm bg-green-100 text-green-700 px-3 py-1 rounded hover:bg-green-200"
                  >
                    Accept
                  </Button>
                  <audio ref={audioRef} src="requestacceptsound.ogg"></audio>
                  <button
                    onClick={() => handleDeclineRequest(req?._id)}
                    className="text-sm bg-red-100 text-red-700 px-3 py-1 rounded hover:bg-red-200"
                  >
                    Decline
                  </button>
                </div>
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
