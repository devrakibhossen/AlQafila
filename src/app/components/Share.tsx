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
        <button className="flex items-center gap-2 ">
          <IoShareSocialOutline className="text-lg" />
          Share
        </button>
      </DialogTrigger>

      <DialogContent className="max-w-sm rounded-xl shadow-lg">
        <DialogHeader>
          <DialogTitle className="text-lg font-semibold text-center">
            Share this post
          </DialogTitle>
          <DialogDescription className="text-center text-sm text-gray-500">
            Share this content with your friends via social media
          </DialogDescription>
        </DialogHeader>

        <div className="flex justify-center gap-5 mt-4">
          <a
            href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
              currentUrl
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition"
            title="Share on Facebook"
          >
            <FaFacebook size={24} />
          </a>
          <a
            href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
              currentUrl
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
            title="Share on Twitter"
          >
            <FaTwitter size={24} />
          </a>
          <a
            href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
              currentUrl
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-700 transition"
            title="Share on LinkedIn"
          >
            <FaLinkedin size={24} />
          </a>
          <button
            onClick={handleCopy}
            className="hover:text-green-600 transition"
            title="Copy Link"
          >
            <FaLink size={22} />
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default Share;
