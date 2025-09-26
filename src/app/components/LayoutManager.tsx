"use client";
import { usePathname } from "next/navigation";
// import Navbar from "./Navbar";
// import LeftSidebar from "./LeftSidebar";
// import RightSidebar from "./RightSidebar";
// import Bottombar from "./Bottombar";
import { Suspense, lazy } from "react";
const Navbar = lazy(() => import("./Navbar"));
const LeftSidebar = lazy(() => import("./LeftSidebar"));
const RightSidebar = lazy(() => import("./RightSidebar"));
const Bottombar = lazy(() => import("./Bottombar"));
import Loading from "./Loading";
const LayoutManager = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  const noLayoutPages = ["/accounts/sign-up", "/accounts/sign-in"];
  const isNoLayout = noLayoutPages.includes(pathname);
  const isProfilePage = pathname.startsWith("/profile");
  const isJobPage = pathname.startsWith("/jobs");
  const isNetworkPage = pathname.startsWith("/network");
  const isMessagePage = pathname.startsWith("/message");
  const isSettingsPage = pathname.startsWith("/settings");
  const isInterviewPage = pathname.startsWith("/interview");
  const isGroupsPage = pathname.startsWith("/groups");
  const isCreateGroupPage = pathname.startsWith("/createGroup");
  const isCreateCompanyPage = pathname.startsWith("/company");
  const isNoSidebar =
    isProfilePage ||
    isJobPage ||
    isMessagePage ||
    isNetworkPage ||
    isInterviewPage ||
    isCreateGroupPage ||
    isCreateCompanyPage ||
    isGroupsPage ||
    isSettingsPage;

  if (isNoLayout) {
    return <>{children}</>;
  }

  return (
    <div>
      <Suspense fallback={<Loading />}>
        <Navbar />

        <div className={`grid grid-cols-11  ${isMessagePage ?"w-full mt-[0px]":"md:mt-20 mt-[75px]  max-w-[1300px]"}  mx-auto`}>
          {/* Left Sidebar */}
          {!isNoSidebar && (
            <div className="hidden md:block col-span-4 lg:col-span-3">
              <div className="sticky top-14">
                <LeftSidebar />
              </div>
            </div>
          )}

          {/* Main Content */}
          <div
            className={`${
              isNoSidebar
                ? "col-span-12"
                : "lg:col-span-5 md:col-span-7 col-span-12 "
            }`}
          >
            {children}
          </div>

          {/* Right Sidebar */}
          {!isNoSidebar && (
            <div className="hidden lg:block col-span-3">
              <div className="sticky top-14">
                <RightSidebar />
              </div>
            </div>
          )}
        </div>

        <Bottombar />
      </Suspense>
    </div>
  );
};

export default LayoutManager;
