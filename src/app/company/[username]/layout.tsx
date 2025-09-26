import React from "react";
import CompanyProfileContent from "../components/CompanyProfileContent";
import { Metadata } from "next";
import CompanySidebar from "../components/CompanySidebar";
export const metadata: Metadata = {
  title: "AlQafila | Programming Hero",
};

interface MessageLayoutProps {
  children: React.ReactNode;
}
const Companylayout = ({ children }: MessageLayoutProps) => {
  return (
    <div className="mb-5 w-11/12 mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-6">
          <CompanyProfileContent children={children} />
        </div>
        <div className="md:col-span-1 space-y-6">
          <CompanySidebar />
        </div>
      </div>
    </div>
  );
};

export default Companylayout;
