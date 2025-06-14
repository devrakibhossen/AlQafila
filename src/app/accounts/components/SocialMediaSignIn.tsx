"use client";
import { signIn } from "next-auth/react";
import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
// import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
const SocialMediaSignIn = () => {
  const router = useRouter();
  // const { data: session } = useSession();
  // console.log("session", session);
  const handleSignIn = async (providerName: string) => {
    console.log("providerName", providerName);
    const result = await signIn(providerName, { redirect: false });
    if (!result?.error) {
      router.push("/");
      toast.success("Sign-In successfully");
    } else {
      toast.error("Something went wrong");
    }
    console.log("result", result);
    // if (data === "google") {

    //   console.log("google sign-in");
    // } else if (data === "github") {
    //   console.log("github sign-in");
    // }
  };

  return (
    <div>
      <div className="flex flex-col justify-center items-center gap-3 my-2">
        <button
          onClick={() => handleSignIn("google")}
          className="w-full text-md p-1.5 cursor-pointer flex shadow-sm justify-center items-center gap-2 green-accent rounded-full border"
        >
          <FaGoogle className="" /> Google
        </button>
        <button
          onClick={() => handleSignIn("github")}
          className="w-full text-md p-1.5  cursor-pointer flex shadow-sm justify-center items-center gap-2 green-accent rounded-full border"
        >
          <FaGithub className="" /> Github
        </button>
      </div>
    </div>
  );
};

export default SocialMediaSignIn;
