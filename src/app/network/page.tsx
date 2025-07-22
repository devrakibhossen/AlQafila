import Networksidebar from "./components/Networksidebar";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "AlQafila | Network",
};
const Page = () => {
  return (
    <div className="mb-20 md:w-11/12 md:px-0 px-1 mx-auto">
      <Networksidebar />
    </div>
  );
};

export default Page;
