import { Metadata } from "next";
import CustomVideoPlayer from "./components/CustomVideoPlayer";
import PostActions from "../post/components/PostActions";
import PostHeader from "../components/PostHeader";
export const metadata: Metadata = {
  title: "AlQafila | Video",
};

export interface Author {
  _id: string;
  username: string;
  email: string;
  name: string;
  profileImage: string;
}

export interface VideoData {
  _id: string;
  authorId: Author;
  text: string;
  video?: {
    type: string;
    video?: string;
  };
  hashtags: string[];
  shares: number;
  createdAt: string;
  updatedAt: string;
  slug: string;
}


const page = async () => {
let data: { success: boolean; data: VideoData[] } | null = null;

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/posts/video`
    );
    data = await res.json();
  } catch (err) {
    console.log(err);
  }

  console.log(data);

  return (
    <div className="md:w-11/12 mx-auto px-1 ">
      {data?.data?.map((post) => (
        <div
          key={post._id}
          className="bg-white dark:bg-zinc-900 dark:border-zinc-800/40 border md:rounded-md mb-1.5 "
        >
        
          {typeof post.authorId === "object" && (
            <PostHeader authorInfo={post.authorId} createdAt={post.createdAt} />
          )}

          <div className="space-y-2">
            <p className="whitespace-pre-line break-words text-black text-sm dark:text-gray-300  md:px-3 px-2.5">
              {post.text}
            </p>

            <div className="flex flex-wrap gap-1  md:px-3  px-2.5">
              {post?.hashtags?.map((tag, index) => (
                <span key={index} className="text-sm green-accent">
                  #{tag}
                </span>
              ))}
            </div>

            {post?.video?.video && (
              <CustomVideoPlayer src={post?.video?.video} />
            )}
            <PostActions postId={post?._id} postSlug={post?.slug}/>
          </div>
        </div>
      ))}
    </div>
  );
};

export default page;
