import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { GoPlus } from "react-icons/go";
import { MdOutlineEdit } from "react-icons/md";

const page = () => {
  return (
    <div className="mt-16 ">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Main Profile Section */}

        <div className="md:col-span-2 space-y-6">
          <div className=" bg-white rounded-t-2xl rounded-b-md shadow-lg overflow-hidden">
            {/* Cover Image */}
            <div className="relative w-full h-48">
              <Image
                src="https://i.ibb.co/PGfp2cJ1/image.png"
                alt="Cover"
                fill
                className="object-cover rounded-t-xl"
                priority
                sizes="(max-width: 768px) 100vw, 600px"
              />
            </div>

            {/* Profile Image */}
            <div className="relative px-6 pb-6 bg-white">
              <div className="absolute -top-10 left-6">
                <Image
                  className="rounded-full border-4 border-white object-cover w-20 h-20 shadow-md"
                  src="https://i.ibb.co/wq1b1Dr/1714319190841-2.jpg"
                  alt="Profile"
                  width={80}
                  height={80}
                  priority
                />
              </div>
              <div className="pt-12 flex justify-between  items-center gap-5">
                <div className="space-y-1">
                  <h3 className="text-xl font-bold text-black">Rakib Hossen</h3>
                  <p className="text-sm text-gray-700">
                    MERN Stack developer | CEO & Founder AlQafila | Programming
                    Enthusiast
                  </p>
                  <p className="text-sm text-gray-700">Cumilla,Bangladesh</p>
                  <div className="flex items-center gap-2.5">
                    <p className="text-sm text-[#155D8C]">3k Follower</p>
                    <p className="text-sm text-[#155D8C]">500 Following</p>
                  </div>
                </div>
                <div className="flex justify-between gap-2.5">
                  <Button className=" bg-[#155D8C] hover:bg-[#304655] w-full text-sm rounded-full cursor-pointer">
                    Edit Profile
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className=" bg-white rounded-md shadow-lg p-6">
            <div className="flex justify-between items-center mb-3">
              <h4 className="text-lg font-semibold text-gray-800">About</h4>
              <MdOutlineEdit className="text-gray-700 text-2xl"></MdOutlineEdit>
            </div>

            <p className="text-sm text-gray-700 leading-relaxed">
              Thank you for visiting my profile!, I am a passionate Front-End
              Developer with experience in creating dynamic and responsive web
              applications using React, Tailwind CSS, and Next.js.
              <span className="text-sm text-[#155D8C] cursor-pointer">
                see more
              </span>
            </p>
          </div>
        </div>
        {/* Side Section */}
        <div className="space-y-6">
          {/* Education */}
          {/* Education Section */}
          <div className="bg-white rounded-md shadow-lg p-6">
            <div className="flex justify-between items-center mb-4">
              <h4 className="text-lg font-semibold text-gray-800">Education</h4>
              <div className="flex gap-2 items-center">
                <GoPlus className="text-gray-700 text-2xl" />
                <MdOutlineEdit className="text-gray-700 text-2xl" />
              </div>
            </div>

            {/* Single Education Item */}
            <div className="flex gap-4 items-center mb-4">
              <Image
                src="https://i.ibb.co/xSF3YVvz/image.png"
                alt="Institution"
                className="w-12 h-12 rounded-full object-cover border"
                width={48}
                height={48}
              />
              <div>
                <h5 className="text-sm font-semibold text-gray-800">
                  Dhaka College
                </h5>
                <p className="text-xs text-gray-600">HSC | 2022 - 2024</p>
              </div>
            </div>
          </div>

          {/* Experience Section */}
          <div className="bg-white rounded-md shadow-lg p-6">
            <div className="flex justify-between items-center mb-4">
              <h4 className="text-lg font-semibold text-gray-800">
                Experience
              </h4>
              <div className="flex gap-2 items-center">
                <GoPlus className="text-gray-700 text-2xl" />
                <MdOutlineEdit className="text-gray-700 text-2xl" />
              </div>
            </div>

            {/* Single Experience Item */}
            <div className="flex gap-4 items-center mb-4">
              <Image
                src="https://i.ibb.co/xSF3YVvz/image.png"
                alt="Company"
                className="w-12 h-12 rounded-full object-cover border"
                width={48}
                height={48}
              />
              <div>
                <h5 className="text-sm font-semibold text-gray-800">
                  Hero Web Agency
                </h5>
                <p className="text-xs text-gray-600">
                  Front-End Developer | 6 Months
                </p>
              </div>
            </div>
          </div>

          {/* language */}
          <div className=" bg-white rounded-md shadow-lg p-6">
            <div className="flex justify-between items-center mb-3">
              <h4 className="text-lg font-semibold text-gray-800">
                Profile URL
              </h4>
              <MdOutlineEdit className="text-gray-700 text-2xl"></MdOutlineEdit>
            </div>
            <p className="text-sm text-blue-500 hover:underline leading-relaxed cursor-pointer">
              <Link href="https://alqafila.vercel.app/profile/rakibhossen">
                https://alqafila.vercel.app/profile/rakibhossen
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;

// <div className="max-w-5xl mx-auto px-4 py-6 mt-16">
//       {/* Cover Photo */}
//       <div className="relative h-56 rounded-xl overflow-hidden shadow-lg">
//         <Image
//           src="https://i.ibb.co/XfCDQqYz/image.png"
//           alt="Cover Photo"
//           fill
//           className="object-cover"
//           priority
//         />
//         <div className="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>

//         <Image
//           className="absolute -bottom-12 left-6 w-24 h-24 rounded-full border-4 border-white shadow-md"
//           src="https://i.ibb.co/wq1b1Dr/1714319190841-2.jpg"
//           alt="Profile Picture"
//           width={96}
//           height={96}
//           priority
//         />
//       </div>

//       {/* Profile Info */}
//       <div className="mt-16 flex flex-col md:flex-row md:justify-between md:items-center">
//         <div>
//           <h1 className="text-3xl font-bold text-gray-800">Rakib Hossen</h1>
//           <p className="text-sm text-gray-600 mt-1">
//             React.js Developer | Open Source Enthusiast
//           </p>
//           <p className="text-xs text-gray-500 mt-0.5">Dhaka, Bangladesh</p>
//           <a
//             href="https://github.com/rakibhossen"
//             target="_blank"
//             rel="noreferrer"
//             className="text-blue-600 text-sm mt-1 inline-block"
//           >
//             github.com/rakibhossen
//           </a>
//         </div>

//         {isCurrentUser && (
//           <button className="mt-4 md:mt-0 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl shadow">
//             Edit Profile
//           </button>
//         )}
//       </div>

//       {/* Tabs */}
//       <div className="mt-10 border-b flex space-x-6 text-sm font-medium text-gray-700">
//         <button className="pb-2 border-b-2 border-blue-600">Posts</button>
//         <button className="pb-2 hover:border-b-2 hover:border-gray-400">
//           Saved
//         </button>
//         <button className="pb-2 hover:border-b-2 hover:border-gray-400">
//           About
//         </button>
//         <button className="pb-2 hover:border-b-2 hover:border-gray-400">
//           Meet History
//         </button>
//       </div>

//       {/* Posts */}
//       <div className="mt-6 space-y-4">
//         <div className="border rounded-xl p-4 shadow-sm bg-white">
//           <p className="font-semibold">
//             Just joined AIQofila! Excited to connect with other devs!
//           </p>
//           <p className="text-xs text-gray-400 mt-1">Posted 2 hours ago</p>
//         </div>

//         <div className="border rounded-xl p-4 shadow-sm bg-white">
//           <p className="font-semibold">
//             Working on a new MERN Stack project. Any suggestions?
//           </p>
//           <p className="text-xs text-gray-400 mt-1">Posted 1 day ago</p>
//         </div>
//       </div>
//     </div>
