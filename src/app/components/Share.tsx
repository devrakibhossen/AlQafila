"use client";

import React, { useEffect, useState } from "react";
import { IoShareSocialOutline } from "react-icons/io5";
import { FaFacebook, FaTwitter, FaLinkedin, FaLink } from "react-icons/fa";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const Share: React.FC = () => {
  const [currentUrl, setCurrentUrl] = useState("");

  // শুধু client side এ চলবে
  useEffect(() => {
    if (typeof window !== "undefined") {
      setCurrentUrl(window.location.href);
    }
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText(currentUrl);
    alert("🔗 Link copied to clipboard!");
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="flex justify-center gap-1.5 items-center cursor-pointer hover:bg-gray-200 dark:hover:bg-black p-1.5 rounded-md transition-colors duration-300">
          <IoShareSocialOutline className="text-lg" />
          <p className="text-[13px]">Share</p>
        </button>
      </DialogTrigger>

      <DialogContent className="max-w-sm rounded-md shadow-lg ">
        <DialogHeader>
          <DialogTitle className="text-lg font-semibold text-center">
            Share this post
          </DialogTitle>
          <DialogDescription className="text-center text-sm text-gray-500">
            Share this content with your friends via social media
          </DialogDescription>
        </DialogHeader>

        <div className="flex flex-col justify-center items-center gap-2.5 mt-4">
          <a
            href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
              currentUrl
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex gap-1.5 justify-center items-center hover:text-blue-600 transition border rounded-md py-2 px-1 w-full text-sm"
            title="Share on Facebook"
          >
            <FaFacebook size={15} />
            <p>Facebook</p>
          </a>
          <a
            href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
              currentUrl
            )}`}
            target="_blank"
            rel="noopener noreferrer"
             className="flex gap-1.5 justify-center items-center hover:text-blue-600 transition border rounded-md py-2 px-1 w-full text-sm"
            title="Share on Twitter"
          >
            <FaTwitter size={15} />
             <p>X</p>
          </a>
          <a
            href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
              currentUrl
            )}`}
            target="_blank"
            rel="noopener noreferrer"
             className="flex gap-1.5 justify-center items-center hover:text-blue-600 transition border rounded-md py-2 px-1 w-full text-sm"
            title="Share on LinkedIn"
          >
            <FaLinkedin size={15} />
             <p>Linkedin</p>
          </a>
          <button
            onClick={handleCopy}
            className="flex gap-1.5 justify-center items-center hover:text-blue-600 transition border rounded-md py-2 px-1 w-full text-sm"
            title="Copy Link"
          >
            <FaLink size={15} />
             <p>Coppy Link</p>
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default Share;
