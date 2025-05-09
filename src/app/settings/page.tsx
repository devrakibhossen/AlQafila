import { User } from "lucide-react";
import { Metadata } from "next";
import { IoIosArrowForward } from "react-icons/io";
import { MdLockOutline, MdOutlineDeleteOutline } from "react-icons/md";
export const metadata: Metadata = {
  title: "AlQafila | Settings",
};
const page = () => {
  return (
    <div className="p-6">
      <div className="space-y-6">
        <h1 className="text-2xl font-bold">General Settings</h1>
        <div className="flex flex-col gap-4 max-w-2xl">
          {/* Account Information */}
          <div className="flex items-center justify-between gap-3 bg-white dark:bg-zinc-900 p-4 rounded-md">
            <div className="flex items-center gap-3">
              <User />
              <div>
                <h3>Account information</h3>
                <p className="text-sm text-gray-300">
                  See your account information like your phone number and email
                  address.
                </p>
              </div>
            </div>
            <IoIosArrowForward />
          </div>

          {/* Change Password */}
          <div className="flex items-center justify-between gap-3 bg-white dark:bg-zinc-900 p-4 rounded-md">
            <div className="flex items-center gap-3">
              <MdLockOutline className="text-xl" />
              <div>
                <h3>Change password</h3>
                <p className="text-sm text-gray-300">
                  Update your password regularly to keep your account secure.
                </p>
              </div>
            </div>
            <IoIosArrowForward />
          </div>

          {/* Deactivate Account */}
          <div className="flex items-center justify-between gap-3 bg-white dark:bg-zinc-900 p-4 rounded-md">
            <div className="flex items-center gap-3">
              <MdOutlineDeleteOutline className="text-xl text-red-500" />
              <div>
                <h3 className="text-red-600">Deactivate account</h3>
                <p className="text-sm text-red-400">
                  Temporarily deactivate or permanently delete your account.
                </p>
              </div>
            </div>
            <IoIosArrowForward className="text-red-400" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
