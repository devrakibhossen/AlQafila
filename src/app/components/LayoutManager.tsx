// "use client";
// import { usePathname } from "next/navigation";
// import Navbar from "./Navbar";
// import LeftSidebar from "./LeftSidebar";
// import RightSidebar from "./RightSidebar";
// import Bottombar from "./Bottombar";

// const LayoutManager = ({ children }: { children: React.ReactNode }) => {
//   const pathname = usePathname();
//   const noLayoutPages = ["/accounts/sign-up", "/accounts/sign-in"];
//   const noSidebarPages = ["/jobs", "/message"];
//   const isNoSidebar = noSidebarPages.includes(pathname);
//   const isNoLayout = noLayoutPages.includes(pathname);
//   const isProfilePage = pathname === "/profile/rakibhossen";
//   if (isNoLayout) {
//     return <>{children}</>;
//   }

//   return (
//     <div>
//       <Navbar></Navbar>
//       <div className="grid grid-cols-12 w-11/12 mx-auto my-5">
//         {!isNoSidebar && (
//           <div className="col-span-3 md:col-span-4 lg:col-span-3 pt-16">
//             <LeftSidebar />
//           </div>
//         )}
//         <div
//           className={`${
//             isProfilePage
//               ? "col-span-12"
//               : "lg:col-span-6 md:col-span-8 col-span-12"
//           }`}
//         >
//           {children}
//         </div>
//         {!isNoSidebar && (
//           <div className="lg:col-span-3 pt-16">
//             <RightSidebar />
//           </div>
//         )}
//       </div>
//       <Bottombar></Bottombar>
//     </div>
//   );
// };

// export default LayoutManager;
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
  const isProfilePage = pathname.startsWith("/profile");
  const isJobPage = pathname.startsWith("/jobs");
  const isNetworkPage = pathname.startsWith("/network");
  const isMessagePage = pathname.startsWith("/message");
  const isSettingsPage = pathname.startsWith("/settings");
  const isInterviewPage = pathname.startsWith("/interview");
  const isGroupsPage = pathname.startsWith("/groups");
  const isCreateGroupPage = pathname.startsWith("/createGroup");
  const isNoSidebar =
    isProfilePage ||
    isJobPage ||
    isMessagePage ||
    isNetworkPage ||
    isInterviewPage ||
    isCreateGroupPage ||
    isGroupsPage ||
    isSettingsPage;

  if (isNoLayout) {
    return <>{children}</>;
  }

  return (
    <div>
      <Navbar />

      <div className="grid grid-cols-11 md:mt-20 mt-[75px]  max-w-[1600px] mx-auto">
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
    </div>
  );
};

export default LayoutManager;
