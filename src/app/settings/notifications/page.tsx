const page = () => {
  return (
    <div>
      <div className="max-w-2xl p-6 ">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">
          Notification Settings
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Control how you receive notifications from us.
        </p>

        <div className="space-y-6">
          {/* Email Notifications */}
          <div>
            <h3 className="text-lg font-medium text-gray-800 dark:text-white mb-1">
              Email Notifications
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
              Choose which types of emails you want to receive.
            </p>
            <div className="space-y-2">
              <label className="flex items-center gap-3">
                <input type="checkbox" className="form-checkbox" />
                <span className="text-gray-700 dark:text-gray-300">
                  News and updates
                </span>
              </label>
              <label className="flex items-center gap-3">
                <input type="checkbox" className="form-checkbox" />
                <span className="text-gray-700 dark:text-gray-300">
                  New messages
                </span>
              </label>
              <label className="flex items-center gap-3">
                <input type="checkbox" className="form-checkbox" />
                <span className="text-gray-700 dark:text-gray-300">
                  Activity on your posts
                </span>
              </label>
            </div>
          </div>

          {/* Push Notifications */}
          <div>
            <h3 className="text-lg font-medium text-gray-800 dark:text-white mb-1">
              Push Notifications
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
              Get real-time alerts on your device.
            </p>
            <div className="space-y-2">
              <label className="flex items-center gap-3">
                <input type="checkbox" className="form-checkbox" />
                <span className="text-gray-700 dark:text-gray-300">
                  Mentions and tags
                </span>
              </label>
              <label className="flex items-center gap-3">
                <input type="checkbox" className="form-checkbox" />
                <span className="text-gray-700 dark:text-gray-300">
                  New followers
                </span>
              </label>
            </div>
          </div>

          {/* Mobile SMS */}
          <div>
            <h3 className="text-lg font-medium text-gray-800 dark:text-white mb-1">
              SMS Notifications
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
              Receive updates via text messages.
            </p>
            <label className="flex items-center gap-3">
              <input type="checkbox" className="form-checkbox" />
              <span className="text-gray-700 dark:text-gray-300">
                Enable SMS alerts
              </span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
