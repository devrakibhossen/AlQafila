"use client";
import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
import LeftSidebar from "./LeftSidebar";
import RightSidebar from "./RightSidebar";
import Bottombar from "./Bottombar";

const LayoutManager = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const noLayoutPages = ["/accounts/sign-up", "/accounts/sign-in"];
  const isNoLayout = noLayoutPages.includes(pathname);

  if (isNoLayout) {
    return <>{children}</>;
  }

  return (
    <div>
      <Navbar></Navbar>
      <div className="grid grid-cols-12 w-11/12 mx-auto my-5 ">
        <div className="col-span-3 md:col-span-4 lg:col-span-3 pt-16">
          <LeftSidebar></LeftSidebar>
        </div>
        <div className="lg:col-span-6  md:col-span-8 col-span-12">
          {children}
        </div>
        <div className="lg:col-span-3  pt-16">
          <RightSidebar></RightSidebar>
        </div>
      </div>
      <Bottombar></Bottombar>
    </div>
  );
};

export default LayoutManager;
