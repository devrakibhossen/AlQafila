import Networksidebar from "./components/Networksidebar";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "AlQafila | Networks",
};
const Page = () => {
  return (
    <div className="mb-20 w-11/12 mx-auto">
        <Networksidebar />
    </div>
  );
};

export default Page;
