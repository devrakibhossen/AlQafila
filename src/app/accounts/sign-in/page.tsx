import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
export const metadata: Metadata = {
  title: "AlQafila | Sign-In",
  description:
    "Create your AlQafila account to access premium features and stay connected with your community.",
  category: "Community",
};
const page = () => {
  return (
    <div className=" h-screen bg-white flex flex-col justify-center items-center">
      <div className="max-w-[1000px] w-11/12 mx-auto py-5 flex gap-8 justify-between">
        <div className="p-5 rounded-lg mt-4 max-w-md mx-auto">
          <h3 className="text-3xl font-bold mb-4 text-center">Welcome Back!</h3>
          <p className="mb-4 text-sm text-center">
            {`Share your favorite moments and stay connected with the people who matter most. Sign in now to start your journey!`}
          </p>
          <hr></hr>
          <form className="space-y-3 mt-4">
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
                className="rounded-full p-5"
                id="password"
                placeholder="password"
              />
            </div>
            <div className="flex items-center justify-between text-sm mb-3">
              <div className="flex items-center gap-1 text-sm ">
                <input type="checkbox" />
                <p className="text-[#155D8C] text-sm">Remember Me</p>
              </div>
              <Link href="/accounts/forgetPassword">
                <span className="text-[#155D8C] underline cursor-pointer">
                  Forget password
                </span>
              </Link>
            </div>
            <Button className=" bg-[#155D8C] hover:bg-[#304655] w-full rounded-full cursor-pointer">
              Sign In
            </Button>
          </form>

          <div className="flex items-center gap-4 mt-4">
            <div className="flex-grow h-px bg-gray-300" />
            <span className="text-gray-500 text-sm whitespace-nowrap">
              Or Sign in with
            </span>
            <div className="flex-grow h-px bg-gray-300" />
          </div>
          <div className="flex justify-center items-center gap-3 my-2">
            <FcGoogle className="text-3xl p-1 rounded-full border"></FcGoogle>
            <FaFacebook className="text-3xl text-blue-500 p-1 rounded-full border"></FaFacebook>
            <FaGithub className="text-3xl p-1 text-gray-900 rounded-full border"></FaGithub>
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
        <div className="bg-blue-50 w-full p-8 rounded-xl lg:flex flex-col items-center text-center hidden ">
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

// <Link href="/">
// <Image
//   className="bg-white  border rounded-md py-1 px-3"
//   src="/alQafila.png"
//   alt="Next.js logo"
//   width={150}
//   height={30}
//   priority
// />
// </Link>

// <div className="max-w-[400px] mx-auto bg-white  p-5 rounded-lg mt-7">
// <h3 className="text-xl font-bold">Welcome Back!</h3>
// <p className="mb-4">
//   {`Share moments. Stay connected. Sign in now.`}
// </p>
// <hr></hr>
// <form className="space-y-3 mt-4">
//   <div className=" w-full max-w-lg  space-y-2">
//     <Label htmlFor="email">Email</Label>
//     <Input type="email" id="email" placeholder="Email" />
//   </div>
//   <div className=" w-full max-w-lg space-y-2">
//     <Label htmlFor="password">Password</Label>
//     <Input type="password" id="password" placeholder="password" />
//   </div>
//   <div className="flex items-center justify-between text-sm mb-3">
//     <div className="flex items-center gap-1 text-sm ">
//       <input type="checkbox" />
//       <p className="text-[#155D8C] text-sm">Remember Me</p>
//     </div>
//     <Link href="/accounts/forgetPassword">
//       <span className="text-[#155D8C] underline cursor-pointer">
//         Forget password
//       </span>
//     </Link>
//   </div>
//   <Button className=" bg-[#155D8C] hover:bg-[#304655] w-full cursor-pointer">
//     Sign In
//   </Button>
// </form>

// <div className="flex items-center gap-4 mt-4">
//   <div className="flex-grow h-px bg-gray-300" />
//   <span className="text-gray-500 text-sm whitespace-nowrap">
//     Or Sign in with
//   </span>
//   <div className="flex-grow h-px bg-gray-300" />
// </div>
// <div className="flex justify-center items-center gap-3 my-2">
//   <FcGoogle className="text-3xl p-1 rounded-full border"></FcGoogle>
//   <FaFacebook className="text-3xl text-blue-500 p-1 rounded-full border"></FaFacebook>
//   <FaGithub className="text-3xl p-1 text-gray-900 rounded-full border"></FaGithub>
// </div>
// <p className="text-sm text-center mt-3">
//   {`Don't have an account?`}
//   <Link href="/accounts/sign-up">
//     <span className="text-[#155D8C] underline cursor-pointer">
//       Sign up
//     </span>
//   </Link>
// </p>
// </div>
