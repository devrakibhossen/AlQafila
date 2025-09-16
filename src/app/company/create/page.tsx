import { Metadata } from "next";
import CreateForm from "./components/CreateForm";
import Image from "next/image";
export const metadata: Metadata = {
  title: "AlQafila | Create a Company Page",
};
const page = () => {
  return (
    <div className="w-11/12 mx-auto mb-10">
      <div className="mb-5 max-w-xl mx-auto">
        <h3 className="text-2xl text-center">Create a Company Page</h3>
        <p className="text-center text-sm">
          {`
          Build your brand, share your story, and connect with a global
          audience. Showcase your company's mission and products to reach new
          customers and grow your business.`}
        </p>
      </div>
      <div className="grid md:grid-cols-4 grid-cols-1 gap-5">
        <div className="md:col-span-2 bg-white p-4 border rounded-md">
          <CreateForm />
        </div>
        <div className="md:col-span-2 hidden md:block bg-white p-4 border rounded-md h-[400px]">
          <Image
            className="w-full h-full"
            src="/images/create-page.png"
            alt="logo"
            width={700}
            height={700}
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default page;
