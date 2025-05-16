import { Metadata } from "next";
import CreatePost from "./components/CreatePost";
import Posts from "./components/Posts";
export const metadata: Metadata = {
  title: "AlQafila | Feed",
};
export default function Home() {
  return (
    <div className="md:w-11/12 mx-auto mt-[72px] md:mt-20 md:px-0 px-1">
      <CreatePost></CreatePost>
      <Posts />
    </div>
  );
}
