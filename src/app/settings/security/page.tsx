import { MdLockOutline, MdOutlineDeleteOutline } from "react-icons/md";
import { RiShieldKeyholeLine } from "react-icons/ri";

const page = () => {
  return (
    <div>
      <div className="max-w-3xl p-6 space-y-6">
        <h2 className="text-2xl font-semibold">Security Settings</h2>

        {/* Password Section */}
        <div className="flex items-center justify-between gap-3 bg-white dark:bg-zinc-900  p-4 rounded-md shadow-sm">
          <div className="flex items-center gap-3">
            <MdLockOutline className="text-xl" />
            <div>
              <h3>Change Password</h3>
              <p className="text-sm text-gray-300">
                {`It's a good idea to use a strong password that you don’t use
                elsewhere.`}
              </p>
            </div>
          </div>
          <button className="text-blue-600 font-medium hover:underline">
            Change
          </button>
        </div>

        {/* Two-Factor Auth */}
        <div className="flex items-center justify-between gap-3 bg-white dark:bg-zinc-900 p-4 rounded-md shadow-sm">
          <div className="flex items-center gap-3">
            <RiShieldKeyholeLine className="text-xl" />
            <div>
              <h3>Two-Factor Authentication</h3>
              <p className="text-sm text-gray-300">
                Add extra security to your account by enabling 2FA.
              </p>
            </div>
          </div>
          <button className="text-blue-600 font-medium hover:underline">
            Enable
          </button>
        </div>

        {/* Active Devices */}
        <div className="bg-white dark:bg-zinc-900 p-4 rounded-md shadow-sm">
          <h3 className="mb-2 font-medium">Active Devices</h3>
          <p className="text-sm text-gray-300 mb-4">
            Review the devices that have logged into your account recently.
          </p>
          <ul className="text-sm text-gray-300 space-y-1">
            <li>• Chrome on Windows (Last used: 1 hour ago)</li>
            <li>• Safari on iPhone (Last used: 2 days ago)</li>
          </ul>
          <button className="mt-2 text-red-500 text-sm hover:underline">
            Log out of all devices
          </button>
        </div>

        {/* Deactivate/Delete Account */}
        <div className="flex items-center justify-between gap-3 bg-white dark:bg-zinc-900 p-4 rounded-md shadow-sm">
          <div className="flex items-center gap-3">
            <MdOutlineDeleteOutline className="text-xl text-red-500" />
            <div>
              <h3 className="text-red-600">Deactivate Account</h3>
              <p className="text-sm text-red-400">
                Temporarily deactivate or permanently delete your account.
              </p>
            </div>
          </div>
          <button className="text-red-600 font-medium hover:underline">
            Manage
          </button>
        </div>
      </div>
    </div>
  );
};

export default page;
