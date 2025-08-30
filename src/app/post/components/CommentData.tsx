"use client";
import { useEffect } from "react";
import { buildCommentTree } from "../helpers/commentHelpers";
import CommentItem from "./CommentItem";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { fetchComment } from "@/store/features/comment/commentsSlice";

interface CommentDataProps {
  postId: string;
}

const CommentData = ({ postId }:CommentDataProps) => {
  const dispatch = useAppDispatch();
  const { items, error } = useAppSelector((state) => state.comments);

  
  console.log(error)

  useEffect(() => {
    dispatch(fetchComment(postId));
  }, [dispatch , postId]);

  console.log("items", items);

  const commentTree = buildCommentTree(items);

  return (
    <div className="w-full max-w-xl mx-auto px-3 mt-5">
      {commentTree.map((c) => (
        <CommentItem key={c._id} comment={c} postId={postId}/>
      ))}
    </div>
  );
};

export default CommentData;
