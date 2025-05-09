import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "AlQafila | Front end developer",
};
const page = () => {
  return (
    <div className="mt-16 w-11/12 mx-auto h-screen flex flex-col justify-center items-center">
      <div className="grid md:grid-cols-2 grid-cols-1 gap-5 w-full">
        <div className="h-[400px] dark:bg-zinc-900 border bg-white rounded-md p-5  w-full flex flex-col justify-center items-center">
          <Image
            className="rounded-full w-32 h-32 border-2 border-gray-200 hover:border-primary transition-all mb-2 "
            src="https://i.ibb.co/gb4YyHHW/image.png"
            alt="User Avatar"
            width={200}
            height={200}
            priority
          />
          <h3 className="text-lg font-bold">Interviewer</h3>
        </div>
        <div className="h-[400px] dark:bg-zinc-900 border bg-white rounded-md p-5 w-full flex flex-col justify-center items-center">
          <Image
            className="rounded-full w-32 h-32 border-2 border-gray-200 hover:border-primary transition-all mb-2 bg-cover"
            src="https://i.ibb.co/wq1b1Dr/1714319190841-2.jpg"
            alt="User Avatar"
            width={200}
            height={200}
            priority
          />

          <h3 className="text-lg font-bold">Candidate</h3>
        </div>
      </div>
    </div>
  );
};

export default page;
