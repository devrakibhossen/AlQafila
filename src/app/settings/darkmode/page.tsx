const page = () => {
  return (
    <div>
      <div className="max-w-2xl  p-6 ">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">
          Dark Mode Settings
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Choose your preferred theme for the application.
        </p>

        <div className="space-y-3">
          {/* Light Mode */}
          <div className="flex items-center justify-between px-4 py-3 border border-gray-200 dark:border-zinc-700 rounded-md cursor-pointer  bg-white dark:bg-zinc-900 hover:bg-gray-50  dark:hover:bg-zinc-800 transition">
            <div className="flex items-center gap-3">
              <svg
                className="w-5 h-5 text-yellow-500"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3v1m0 16v1m8.66-8.66l-.71.71m-12.02 0l-.71-.71m16.02 4.95l-.71-.71M4.24 7.76l-.71-.71M21 12h1M2 12H1M4.24 16.24l-.71.71m16.02-4.95l.71.71M6.34 6.34l.71.71M12 8a4 4 0 100 8 4 4 0 000-8z"
                />
              </svg>
              <span className="font-medium text-gray-800 dark:text-white">
                Light
              </span>
            </div>
          </div>

          {/* Dark Mode */}
          <div className="flex items-center justify-between px-4 py-3 border border-gray-200 dark:border-zinc-700 rounded-md cursor-pointer  bg-white dark:bg-zinc-900 hover:bg-gray-50 dark:hover:bg-zinc-800 transition">
            <div className="flex items-center gap-3">
              <svg
                className="w-5 h-5 text-gray-800 dark:text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z"
                />
              </svg>
              <span className="font-medium text-gray-800 dark:text-white">
                Dark
              </span>
            </div>
          </div>

          {/* System Mode */}
          <div className="flex items-center justify-between px-4 py-3 border border-gray-200 dark:border-zinc-700 rounded-md cursor-pointer  bg-white dark:bg-zinc-900 hover:bg-gray-50 dark:hover:bg-zinc-800 transition">
            <div className="flex items-center gap-3">
              <svg
                className="w-5 h-5 text-blue-500"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.75 17h4.5M4 6h16M3 12h18M4 18h16"
                />
              </svg>
              <span className="font-medium text-gray-800 dark:text-white">
                System
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
