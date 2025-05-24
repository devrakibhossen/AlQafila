import { Metadata } from "next";
import GroupSidebar from "../groups/components/GroupSidebar";
import Image from "next/image";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const metadata: Metadata = {
  title: "AlQafila | Create Group",
};
const page = () => {
  return (
    <div className="w-11/12 mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 md:gap-6 gap-2 ">
        <div className="md:col-span-2">
  <div className="bg-white dark:bg-zinc-900 rounded-md shadow-xl overflow-hidden border border-gray-200 dark:border-zinc-800">
    
    {/* Cover Image Section */}
    <div className="relative w-full h-52 lg:h-64">
      <Image
        src="https://i.ibb.co/bMLHPXm9/image.png"
        alt="Cover"
        fill
        className="object-cover"
        priority
        sizes="(max-width: 768px) 100vw, 600px"
      />
      <button className="absolute bottom-3 right-3 bg-white/80 dark:bg-zinc-800/80 text-sm text-black dark:text-white px-4 py-2 rounded-md hover:bg-white/90 dark:hover:bg-zinc-700 transition font-medium shadow">
        Upload Cover
      </button>
    </div>

    {/* Group Info Section */}
    <div className="p-6">
      <div className="flex flex-col md:flex-row gap-6">
        
        {/* Group Name & Description */}
        <div className="w-full md:w-2/3 flex flex-col gap-2">
          <input
            type="text"
            placeholder="Group Name"
            // className="px-4 py-2 border-none text-3xl  rounded-lg bg-white dark:bg-zinc-900 text-sm focus:outline-none "
            className="px-4 py-2 text-2xl font-semibold border border-transparent dark:border-transparent focus:outline-none rounded-lg bg-white dark:bg-zinc-900 text-zinc-800 dark:text-white placeholder:text-zinc-400 dark:placeholder:text-zinc-500 transition"
          />
          <textarea
            placeholder="Group Description"
            rows={4}
            className="px-4 py-2 border-none rounded-lg bg-white dark:bg-zinc-900 text-sm resize-none focus:outline-none "
          ></textarea>
        </div>

        {/* Actions: Invite & Privacy */}
        <div className="w-full md:w-1/3 flex  items-start justify-end gap-4">
          <button className="bg-green-accent text-white py-2 px-5 rounded-md   text-sm font-semibold shadow transition w-full md:w-auto">
            Invite
          </button>
          <Select>
            <SelectTrigger className="w-full md:w-auto text-sm border border-gray-300 dark:border-zinc-700 focus:ring-2  rounded-md px-4 py-2 bg-white dark:bg-zinc-800">
              <SelectValue placeholder="Privacy" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="public">Public</SelectItem>
              <SelectItem value="private">Private</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="flex justify-end mt-6">
        <button className="bg-green-accent text-white py-2 px-6 rounded-md text-sm font-semibold transition shadow">
          Publish
        </button>
      </div>
    </div>
  </div>
</div>


        <div className="md:col-span-1 w-full">
          <GroupSidebar />
        </div>
      </div>
    </div>
  );
};

export default page;
