import React from "react";
import Sidebar from "./components/Sidebar";

interface SettingsLayoutProps {
  children: React.ReactNode;
}

const SettingsLayout = ({ children }: SettingsLayoutProps) => {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 p-6 mt-8 md:ml-60">{children}</main>
    </div>
  );
};

export default SettingsLayout;
