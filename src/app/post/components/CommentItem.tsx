"use client";
import Image from "next/image";
// import { BiLike } from "react-icons/bi";
// import { FaRegHeart } from "react-icons/fa";
import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";
import { BsChevronDown, BsChevronRight } from "react-icons/bs";
import CommentForm from "./CommentForm";
import { useState } from "react";
import { useUser } from "@/context/UserContext";
import {
  postComment,
  deleteComment,
  updateComment,
} from "@/store/features/comment/commentsSlice";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { useAppDispatch } from "@/store/hooks";

export interface Author {
  _id: string;
  username: string;
  name: string;
  profileImage: string;
}
export interface CommentData {
  _id?: string;
  postId: string;
  content: string;
  authorId: string | Author;
  parentId?: string | null;
  replies: CommentData[];
}

interface CommentItemProps {
  comment: CommentData;
  postId: string;
}

function CommentItem({ comment, postId }: CommentItemProps) {
  const dispatch = useAppDispatch();
  const { userInfo } = useUser();
  const [showReplyForm, setShowReplyForm] = useState(false);
  const [showReplies, setShowReplies] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const handleSubmitReply = async (replyText: string) => {
    const data = {
      postId,
      content: replyText,
      authorId: userInfo?._id ?? "",
      parentId: comment?._id ?? "",
    };
    dispatch(postComment(data));
    console.log("Reply comment", data);
  };

  const handleUpdateComment = async (updatedText: string) => {
    const data = {
      id: comment?._id ?? "",
      content: updatedText,
    };
    dispatch(updateComment(data));
    setIsEditing(false);
    console.log("Updated comment", data);
  };

  const handleDeleteComment = async () => {
    dispatch(deleteComment(comment?._id ?? ""));
    console.log(comment._id);
  };
  return (
    <div className=" mt-3">
      <div className="flex gap-3">
        {/* {typeof comment.authorId !== "string" && (
 
)} */}
        {typeof comment.authorId !== "string" && (
          <Image
            src={comment.authorId.profileImage}
            alt={comment.authorId.username}
            className="w-9 h-9 rounded-full border"
            width={40}
            height={40}
          />
        )}
        <div className="flex-1">
          {typeof comment.authorId !== "string" && (
            <h4 className="font-semibold">{comment.authorId.name}</h4>
          )}
          {isEditing ? (
            <CommentForm
              onSubmit={handleUpdateComment}
              initialValue={comment.content}
              placeholder="Edit your comment..."
            />
          ) : (
            <p className="text-sm mt-1">{comment.content}</p>
          )}

          <div className="flex gap-5 my-1 text-sm text-gray-500">
            {/* <button onClick={handleSubmitLike} className="flex items-center gap-1">
              <FaRegHeart  /> 0
            </button> */}
            <button
              onClick={() => setShowReplyForm(!showReplyForm)}
              className="hover:text-blue-500 text-xs"
            >
              Reply
            </button>
            <button
              onClick={() => setIsEditing(!isEditing)}
              className="text-green-500 text-lg"
            >
              <CiEdit />
            </button>

            <AlertDialog>
              <AlertDialogTrigger>
                <MdDeleteOutline />
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                  <AlertDialogDescription>
                    This action cannot be undone. This will permanently delete
                    your comment and remove your data from our servers.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction onClick={handleDeleteComment}>
                    Continue
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>

          {showReplyForm && (
            <CommentForm
              onSubmit={handleSubmitReply}
              placeholder="Write a reply"
            />
          )}

          {/* Arrow + Show reply text */}
          {comment.replies?.length > 0 && (
            <button
              onClick={() => setShowReplies(!showReplies)}
              className="flex items-center gap-1 text-blue-500 text-xs mt-1 hover:underline"
            >
              {showReplies ? <BsChevronDown /> : <BsChevronRight />}
              {showReplies
                ? "Hide replies"
                : `Show ${comment?.replies.length} replies`}
            </button>
          )}

          {/* Nested Replies */}
          {showReplies && comment?.replies?.length > 0 && (
            <div className="ml-2 border-l pl-2 mt-2">
              {comment?.replies.map((reply) => (
                <CommentItem
                  key={comment._id}
                  comment={reply}
                  postId={postId}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default CommentItem;
