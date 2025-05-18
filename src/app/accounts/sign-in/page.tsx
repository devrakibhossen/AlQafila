import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import AuthForm from "../components/AuthForm";
export const metadata: Metadata = {
  title: "AlQafila | Sign-In",
  description:
    "Create your AlQafila account to access premium features and stay connected with your community.",
  category: "Community",
};
const page = () => {
  return (
    <div className=" h-screen bg-white dark:bg-zinc-900 flex flex-col justify-center items-center">
      <div className="max-w-[1000px] w-11/12 mx-auto py-5 flex gap-8 justify-between">
        <div className="p-5 rounded-lg mt-4 max-w-md mx-auto">
          <h3 className="text-3xl font-bold mb-4 text-center">Welcome Back!</h3>
          <p className="mb-4 text-sm text-center">
            {`Share your favorite moments and stay connected with the people who matter most. Sign in now to start your journey!`}
          </p>
          <hr></hr>
          <AuthForm type="sign-in" />

          <div className="flex items-center gap-4 mt-4">
            <div className="flex-grow h-px bg-gray-300" />
            <span className="text-gray-500 text-sm whitespace-nowrap">
              Or Sign in with
            </span>
            <div className="flex-grow h-px bg-gray-300" />
          </div>
          <div className="flex justify-center items-center gap-3 my-2">
            <FcGoogle className="text-4xl p-1 rounded-full border"></FcGoogle>
            <FaFacebook className="text-4xl text-blue-500 p-1 rounded-full border"></FaFacebook>
            <FaGithub className="text-4xl p-1 text-gray-900 dark:text-white rounded-full border"></FaGithub>
          </div>
          <p className="text-sm text-center mt-3">
            {`Don't have an account?`}
            <Link href="/accounts/sign-up">
              <span className="text-[#155D8C] underline cursor-pointer">
                Sign up
              </span>
            </Link>
          </p>
        </div>
        <div className="bg-blue-50 dark:bg-zinc-950 w-full p-8 rounded-xl lg:flex flex-col items-center text-center hidden ">
          <Image
            src="/Svg/signin.svg"
            alt="Sign In Illustration"
            width={400}
            height={250}
            priority
          />
          <p className="text-gray-600 mt-4 max-w-md">
            Connect with friends, share your favorite moments, and be part of a
            vibrant community. Sign in now and start your journey!
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
