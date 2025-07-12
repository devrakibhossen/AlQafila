"use client";
import React, { useState } from "react";
import FriendRequest from "./FriendRequest";
import AllFriends from "./AllFriends";
import FollowingandFollower from "./FollowingandFollower";

const Networksidebar = () => {
  const [activeSection, setActiveSection] = useState<string>("friendRequest");
  return (
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
            <FriendRequest />
          </>
        )}
        {activeSection === "allFriends" && (
          <>
            <AllFriends />
          </>
        )}
        {activeSection === "follow" && (
          <>
            <FollowingandFollower />
          </>
        )}
      </div>
    </div>
  );
};

export default Networksidebar;
