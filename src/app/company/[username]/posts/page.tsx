import Link from "next/link";
import { Plus } from "lucide-react";
const page = () => {
    return (
        <div className="bg-white dark:bg-zinc-900 p-5 rounded-md">
         <div className="flex justify-end mb-3">
        <Link href="/jobs/create-job">
          <button className="green-accent flex items-center cursor-pointer justify-center mb-3 gap-1 rounded-full border dark:border-zinc-800 border-gray-300 overflow-hidden shadow-sm bg-white dark:bg-zinc-900 text-sm font-medium py-1 px-2.5 transition-all">
            <Plus className="w-4 h-4" />
            Create post
          </button>
        </Link>
      </div>
        </div>
    );
};

export default page;