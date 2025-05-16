import Image from "next/image";
import Link from "next/link";
import { GoPlus } from "react-icons/go";
import { MdOutlineEdit } from "react-icons/md";

const ProfileSidebar = () => {
  return (
    <div className="space-y-6">
      {/* Education Section */}
      <div className="bg-white dark:bg-zinc-900 rounded-md shadow-lg p-6">
        <div className="flex justify-between items-center mb-4">
          <h4 className="text-lg font-semibold text-gray-800 dark:text-white">
            Education
          </h4>
          <div className="flex gap-2 items-center">
            <GoPlus className="text-gray-700 dark:text-gray-300 text-2xl" />
            <MdOutlineEdit className="text-gray-700 dark:text-gray-300  text-2xl" />
          </div>
        </div>

        {/* Single Education Item */}
        <div className="flex gap-4 items-center mb-4">
          <Image
            src="https://i.ibb.co/vx8HzcdH/image.png"
            alt="Institution"
            className="w-12 h-12 rounded-full object-cover border"
            width={48}
            height={48}
          />
          <div>
            <h5 className="text-sm font-semibold dark:text-white text-gray-800">
              Lakhanpur Fazil Madrasah
            </h5>
            <p className="text-xs text-gray-600 dark:text-white">
              SSC | 2019 - 2023
            </p>
          </div>
        </div>
        <div className="flex gap-4 items-center mb-4">
          <Image
            src="https://i.ibb.co/TMpVtrpT/image.png"
            alt="Institution"
            className="w-12 h-12 rounded-full object-cover border"
            width={48}
            height={48}
          />
          <div>
            <h5 className="text-sm font-semibold dark:text-white text-gray-800">
              Comilla Govt College
            </h5>
            <p className="text-xs text-gray-600 dark:text-white">
              HSC | 2022 - 2024
            </p>
          </div>
        </div>
      </div>

      {/* Experience Section */}
      <div className="bg-white dark:bg-zinc-900 rounded-md shadow-lg p-6">
        <div className="flex justify-between items-center mb-4">
          <h4 className="text-lg font-semibold text-gray-800 dark:text-white">
            Experience
          </h4>
          <div className="flex gap-2 items-center">
            <GoPlus className="text-gray-700 dark:text-gray-300 text-2xl" />
            <MdOutlineEdit className="text-gray-700 dark:text-gray-300 text-2xl" />
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
            <h5 className="text-sm font-semibold dark:text-white text-gray-800">
              Hero Web Agency
            </h5>
            <p className="text-xs text-gray-600 dark:text-gray-300">
              Front-End Developer | 6 Months
            </p>
          </div>
        </div>
      </div>

      {/* language */}
      <div className=" bg-white dark:bg-zinc-900 rounded-md shadow-lg p-6">
        <div className="flex justify-between items-center mb-3">
          <h4 className="text-lg font-semibold text-gray-800 dark:text-white">
            Profile URL
          </h4>
          <MdOutlineEdit className="text-gray-700 dark:text-gray-300 text-2xl"></MdOutlineEdit>
        </div>
        <p className="text-sm text-blue-500 hover:underline leading-relaxed cursor-pointer">
          <Link href="https://alqafila.vercel.app/profile/rakibhossen">
            https://alqafila.vercel.app/profile/rakibhossen
          </Link>
        </p>
      </div>
    </div>
  );
};

export default ProfileSidebar;
