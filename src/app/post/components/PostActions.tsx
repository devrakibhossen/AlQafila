"use client"
import Reaction from "@/app/components/Reaction";
import Share from "@/app/components/Share";
import UserReaction from "@/app/components/UserReaction";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaRegComment } from "react-icons/fa";

interface PostActionsProps {
  postId: string,
  postSlug:string
}

const PostActions = ({postId,postSlug}:PostActionsProps) => {

  const router = useRouter();
const handleNavigatePostDetails = ()=>{
router.push(`/post/${postId}/${postSlug}`)
};
  
    return (
  <div className="mb-2 md:px-3  px-2.5 ">
              <div className="flex justify-between gap-1.5 pb-1.5 w-full">
                <div className="min-w-[100px]">
                  <UserReaction postId={postId || ""} />
                </div>

                <div className="flex text-end items-center gap-2">
                  <p className="text-[12px]">
                    <Link href={`/post/${postId}/${postSlug}`}>0 Comments,</Link>
                  </p>
                  <p className="text-[12px]">0 Shares</p>
                </div>
              </div>

              <div className=" grid grid-cols-3 gap-2 border-t pt-1.5">
                <Reaction postId={postId || ""} />
                <div
                onClick={handleNavigatePostDetails}
                  className="flex justify-center gap-1.5 items-center cursor-pointer hover:bg-gray-200 dark:hover:bg-black p-1.5 rounded-md transition-colors duration-300"
                >
                  <FaRegComment />
                  <p className="text-[13px] ">Comments</p>
                </div>

                <Share />
              </div>
            </div>
    );
};

export default PostActions;