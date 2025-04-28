import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
export const metadata: Metadata = {
  title: "AlQafila | Sign-Up",
  description:
    "Create your AlQafila account to access premium features and stay connected with your community.",
  category: "Community",
};
const page = () => {
  return (
    <div className=" h-screen bg-white flex flex-col justify-center items-center">
      <div className="max-w-[1000px] w-11/12 mx-auto py-5 flex gap-8 justify-between">
        <div className="p-5 rounded-lg mt-4 max-w-md mx-auto w-full">
          <h3 className="text-3xl font-bold mb-4 text-center">Get Started</h3>
          <p className="mb-4 text-sm text-center">{`Welcome to AlQafila - Let's create your account`}</p>
          <hr></hr>
          <form className="space-y-3 mt-4">
            <div className=" w-full max-w-lg  space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input
                type="text"
                id="name"
                className="rounded-full p-5"
                placeholder="Full Name"
              />
            </div>
            <div className=" w-full max-w-lg  space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                type="email"
                id="email"
                className="rounded-full p-5"
                placeholder="Email"
              />
            </div>
            <div className=" w-full max-w-lg space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                type="password"
                id="password"
                className="rounded-full p-5"
                placeholder="password"
              />
            </div>
            <div className="flex items-start gap-2 text-sm mb-4">
              <input
                type="checkbox"
                id="terms"
                className="mt-1 accent-[#155D8C] w-4 h-4 rounded cursor-pointer"
              />
              <label htmlFor="terms" className="text-gray-600 cursor-pointer">
                I agree to the{" "}
                <span className="text-[#3597d8] font-semibold hover:underline">
                  Terms & Conditions
                </span>
              </label>
            </div>

            <Button className=" bg-[#155D8C] hover:bg-[#304655] rounded-full w-full cursor-pointer">
              Sign Up
            </Button>
          </form>

          <p className="text-sm text-center mt-3">
            Already have an account?{" "}
            <Link href="/accounts/sign-in">
              <span className="text-[#155D8C] underline cursor-pointer">
                Sign in
              </span>
            </Link>
          </p>
        </div>

        <div className="bg-blue-50 w-full p-10 rounded-2xl lg:flex flex-col items-center text-center hidden ">
          <Image
            src="/Svg/signup.svg"
            alt="Sign Up Illustration"
            width={400}
            height={350}
            priority
          />
          <h2 className="text-3xl font-bold text-[#155D8C] mt-8">
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
