"use client";
import Image from "next/image";
import CommentForm from "./CommentForm";
import CommentData from "./CommentData";
import { useUser } from "@/context/UserContext";
import { useAppDispatch } from "@/store/hooks";
import { postComment } from "@/store/features/comment/commentsSlice";

interface CommentProps {
  postId: string;
}

const Comment = ({ postId }: CommentProps) => {
  const dispatch = useAppDispatch();
  const { userInfo } = useUser();

  const handleSubmitComment = (newComment: string) => {
    console.log("comment", newComment);
    const data = {
      postId: postId,
      authorId: userInfo?._id ?? "",
      content: newComment,
    };
    console.log("comment data", data);
    dispatch(postComment(data));
  };

  return (
    <div>
      <div className="flex gap-2 w-full px-3">
        <Image
          src="https://i.ibb.co/wq1b1Dr/1714319190841-2.jpg"
          alt="user"
          className="rounded-full w-9 h-9"
          width={40}
          height={40}
        />
        <CommentForm onSubmit={handleSubmitComment} />
      </div>
      <CommentData postId={postId} />
    </div>
  );
};

export default Comment;
