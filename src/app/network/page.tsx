"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRef, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { toast } from "sonner";

const Page = () => {
  const [activeSection, setActiveSection] = useState<string>("friendRequest");
  const friendRequest = [
    {
      id: "req1",
      senderName: "Ahad Hossen",
      senderAvatar: "https://i.ibb.co/LDzBmzPd/review-2.jpg",
      mutualFriends: 5,
      status: "pending",
      sentAt: "2025-04-29T10:15:00Z",
    },
    {
      id: "req2",
      senderName: "Ayesha Akter",
      senderAvatar: "https://i.ibb.co/ypkgK0X/blue-beanie.png",
      mutualFriends: 3,
      status: "pending",
      sentAt: "2025-04-28T16:45:00Z",
    },
    {
      id: "req3",
      senderName: "Tanvir Islam",
      senderAvatar: "https://i.ibb.co/nNwWbHNV/review-4.jpg",
      mutualFriends: 7,
      status: "pending",
      sentAt: "2025-04-25T08:30:00Z",
    },
    {
      id: "req4",
      senderName: "Jahid",
      senderAvatar: "https://i.ibb.co/b5WMgQDn/self.jpg",
      mutualFriends: 2,
      status: "pending",
      sentAt: "2025-04-27T13:10:00Z",
    },
  ];

  const audioRef = useRef<HTMLAudioElement>(null);

  const handleRequestAccept = () => {
    toast.success("Friend request accepted");
    if (audioRef.current) {
      audioRef.current.play();
    }
  };
  return (
    <div className="mb-20 w-11/12 mx-auto">
      <div className="grid md:grid-cols-4 gap-5">
        <div className="md:col-span-1 bg-white dark:bg-zinc-900 p-6  border rounded-md h-56">
          <h3 className="text-md font-semibold dark:text-white text-gray-800">
            Manage my network
          </h3>
          <hr className="my-2" />
          <div className="space-y-2.5 mt-2">
            <button
              onClick={() => setActiveSection("friendRequest")}
              className={`w-full rounded-full cursor-pointer border py-1.5 ${
                activeSection === "friendRequest"
                  ? "bg-green-accent text-white"
                  : "hover-bg-green-accent hover:text-white"
              }`}
            >
              Friend Request
            </button>
            <button
              onClick={() => setActiveSection("allFriends")}
              className={`w-full rounded-full cursor-pointer border py-1.5 ${
                activeSection === "allFriends"
                  ? "bg-green-accent text-white"
                  : "hover-bg-green-accent hover:text-white"
              }`}
            >
              All Friends
            </button>
            <button
              onClick={() => setActiveSection("follow")}
              className={`w-full rounded-full cursor-pointer border py-1.5 ${
                activeSection === "follow"
                  ? "bg-green-accent text-white"
                  : "hover-bg-green-accent hover:text-white"
              }`}
            >
              Following & Follower
            </button>
          </div>
        </div>
        <div className="md:col-span-3 bg-white dark:bg-zinc-900 p-6  border rounded-md ">
          {activeSection === "friendRequest" && (
            <>
              <div className="">
                <h3 className="text-sm mb-2 font-semibold dark:text-white text-gray-800">
                  Friend Request
                </h3>
                <div className="space-y-4">
                  {friendRequest.map((req) => (
                    <div
                      key={req.id}
                      className="flex lg:flex-row flex-col items-center gap-3 justify-between p-3 border rounded-lg hover:shadow transition"
                    >
                      <Image
                        src={req.senderAvatar}
                        alt={req.senderName}
                        className="w-12 h-12 rounded-full object-cover md:hidden"
                        width={48}
                        height={48}
                      />
                      <div className="flex items-center gap-3">
                        <Image
                          src={req.senderAvatar}
                          alt={req.senderName}
                          className="w-12 h-12 rounded-full object-cover md:block hidden"
                          width={48}
                          height={48}
                        />
                        <div>
                          <p className="font-medium dark:text-white text-gray-800">
                            {req.senderName}
                          </p>
                          <p className="text-sm dark:text-gray-300 text-gray-500">
                            {req.mutualFriends} mutual friends
                          </p>
                        </div>
                      </div>

                      {req.status === "pending" && (
                        <div className="flex gap-2">
                          <Button
                            onClick={() => handleRequestAccept()}
                            className="text-sm bg-green-100 text-green-700 px-3 py-1 rounded hover:bg-green-200"
                          >
                            Accept
                          </Button>
                          <audio
                            ref={audioRef}
                            src="requestacceptsound.ogg"
                          ></audio>
                          <button
                            onClick={() =>
                              toast("Friend request declined", {
                                description: "You have rejected Alex's request",
                                action: {
                                  label: "request",
                                  onClick: () =>
                                    console.log("Chat started with Alex"),
                                },
                              })
                            }
                            className="text-sm bg-red-100 text-red-700 px-3 py-1 rounded hover:bg-red-200"
                          >
                            Decline
                          </button>
                        </div>
                      )}

                      {req.status === "accepted" && (
                        <span className="text-sm text-green-600 font-medium">
                          Accepted
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}
          {activeSection === "allFriends" && (
            <>
              <div className="">
                <h3 className="text-sm mb-2 font-semibold dark:text-white text-gray-800">
                  All Friends
                </h3>
                <div className="flex items-center gap-2 px-4 py-2 md:w-1/2 dark:bg-zinc-900 bg-white border rounded-full mb-4">
                  <FaSearch className="text-gray-400" />
                  <input
                    type="text"
                    placeholder="Find your friend"
                    className="w-full outline-none text-sm bg-transparent"
                  />
                </div>
                <div className="grid lg:grid-cols-4 grid-cols-2  gap-4">
                  {friendRequest.map((req) => (
                    <div
                      key={req.id}
                      className="flex flex-col items-center justify-between p-3 border rounded-lg hover:shadow transition"
                    >
                      <div className="flex flex-col items-center gap-3 mb-3">
                        <Image
                          src={req.senderAvatar}
                          alt={req.senderName}
                          className="w-12 h-12 rounded-full object-cover"
                          width={48}
                          height={48}
                        />
                        <div className="text-center">
                          <p className="font-medium  dark:text-white text-gray-800">
                            {req.senderName}
                          </p>
                          <p className="text-sm dark:text-gray-300 text-gray-500">
                            {req.mutualFriends} mutual friends
                          </p>
                        </div>
                      </div>

                      {req.status === "pending" && (
                        <div className="space-y-2.5">
                          <button className="text-sm w-full rounded-full border px-3 py-1  hover:bg-gray-200">
                            Profile
                          </button>
                          <button className="text-sm w-full bg-green-accent text-white  py-1 rounded-full ">
                            Send Message
                          </button>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}
          {activeSection === "follow" && (
            <>
              <div className="">
                <h3 className="text-sm mb-2 font-semibold dark:text-white text-gray-800">
                  Following & Follower
                </h3>
                <div className=" border-b flex space-x-6 text-sm font-medium dark:text-gray-300 text-gray-700">
                  <button className="pb-2 text-sm border-b-2 border-green-accent">
                    Following
                  </button>

                  <button className="pb-2 text-sm hover:border-b-2 hover:border-gray-400">
                    Followers
                  </button>
                </div>
                <div className="space-y-4 mt-4">
                  {friendRequest.map((req) => (
                    <div
                      key={req.id}
                      className="flex items-center justify-between p-3 border rounded-lg hover:shadow transition"
                    >
                      <div className="flex items-center gap-3">
                        <Image
                          src={req.senderAvatar}
                          alt={req.senderName}
                          className="w-12 h-12 rounded-full object-cover"
                          width={48}
                          height={48}
                        />
                        <div>
                          <p className="font-medium dark:text-white text-gray-800">
                            {req.senderName}
                          </p>
                          <p className="text-sm dark:text-gray-300 text-gray-500">
                            {req.mutualFriends} mutual friends
                          </p>
                        </div>
                      </div>

                      <div className="">
                        <button className="text-sm w-full rounded-full border px-3 py-1  hover:bg-gray-200">
                          Following
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;
