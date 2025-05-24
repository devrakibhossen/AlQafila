import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AuthForm from "../components/AuthForm";
export const metadata: Metadata = {
  title: "AlQafila | Sign-Up",
  description:
    "Create your AlQafila account to access premium features and stay connected with your community.",
  category: "Community",
};
const page = () => {
  return (
    <div className=" h-screen bg-white dark:bg-zinc-900 flex flex-col justify-center items-center">
      <div className="max-w-[1000px] w-11/12 mx-auto py-5 flex gap-8 justify-between">
        <div className="p-5 rounded-lg mt-4 max-w-md mx-auto w-full">
          <h3 className="text-3xl font-bold mb-4 text-center">Get Started</h3>
          <p className="mb-4 text-sm text-center">{`Welcome to AlQafila - Let's create your account`}</p>
          <hr></hr>
          <AuthForm type="sign-up" />

          <p className="text-sm text-center mt-3">
            Already have an account?{" "}
            <Link href="/accounts/sign-in">
              <span className="green-accent underline cursor-pointer">
                Sign in
              </span>
            </Link>
          </p>
        </div>

        <div className="bg-green-50 dark:bg-zinc-950 w-full p-10 rounded-2xl lg:flex flex-col items-center text-center hidden ">
          <Image
            src="/Svg/signup.svg"
            alt="Sign Up Illustration"
            width={400}
            height={350}
            priority
          />
          <h2 className="text-3xl font-bold green-accent mt-8">
            Join Our Community
          </h2>
          <p className="text-gray-600 mt-4 max-w-md">
            Create an account to connect, share your moments, and be part of a
            vibrant, inspiring community. Start your new journey with us today!
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
