import { Metadata } from "next";
import MessageSidebar from "./components/MessageSidebar";

export const metadata: Metadata = {
  title: "AlQafila | Message",
};
interface MessageLayoutProps {
  children: React.ReactNode;
}

const MessageLayout = ({ children }: MessageLayoutProps) => {
  return (
    <div className="mt-14 flex  w-full">
      <MessageSidebar />
      <main className="w-full">{children}</main>
    </div>
  );
};

export default MessageLayout;
