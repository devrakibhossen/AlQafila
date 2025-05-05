const page = () => {
  return (
    <div>
      <div className="max-w-2xl p-6 ">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">
          Privacy Settings
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Manage how your profile and data are shared.
        </p>

        <div className="space-y-6">
          {/* Profile Visibility */}
          <div>
            <h3 className="text-lg font-medium text-gray-800 dark:text-white mb-1">
              Profile Visibility
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
              Control who can see your profile and personal details.
            </p>
            <div className="flex flex-col gap-2">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="radio" name="visibility" className="form-radio" />
                <span className="text-gray-700 dark:text-gray-300">
                  Everyone
                </span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="radio" name="visibility" className="form-radio" />
                <span className="text-gray-700 dark:text-gray-300">
                  Only Friends
                </span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="radio" name="visibility" className="form-radio" />
                <span className="text-gray-700 dark:text-gray-300">
                  Only Me
                </span>
              </label>
            </div>
          </div>

          {/* Search Engine */}
          <div>
            <h3 className="text-lg font-medium text-gray-800 dark:text-white mb-1">
              Search Engine Indexing
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
              Allow search engines to link to your profile.
            </p>
            <label className="flex items-center gap-3 cursor-pointer">
              <input type="checkbox" className="form-checkbox" />
              <span className="text-gray-700 dark:text-gray-300">
                Allow indexing
              </span>
            </label>
          </div>

          {/* Data Sharing */}
          <div>
            <h3 className="text-lg font-medium text-gray-800 dark:text-white mb-1">
              Data Sharing
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
              Allow your data to be shared with third-party services.
            </p>
            <label className="flex items-center gap-3 cursor-pointer">
              <input type="checkbox" className="form-checkbox" />
              <span className="text-gray-700 dark:text-gray-300">
                Enable third-party data sharing
              </span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
