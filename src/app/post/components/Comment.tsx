"use client";
import TextareaAutosize from "react-textarea-autosize";
import Image from "next/image";
import { useState } from "react";
import { BiLike } from "react-icons/bi";
import { BsSendFill } from "react-icons/bs";
import { RxCross1 } from "react-icons/rx";

const Comment = ({ postId }) => {
  const [message, setMessage] = useState("");
  const [comments, setComments] = useState([
    {
      username: "Mim Rahman",
      userProfile: "https://i.ibb.co/ynVcSDS0/image.png",
      text: "রিয়াক্ট শেখা আমারও প্রিয়! 🚀",
      time: "April 26 at 11:00 AM",
      like: 34,
      replies: [],
    },
  ]);
  const [replyingTo, setReplyingTo] = useState<number | null>(null);
  const [replyMessage, setReplyMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
  };

  const handleComment = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!message.trim()) return;

    const newComment = {
      username: "Rakib Hossen",
      userProfile: "https://i.ibb.co/wq1b1Dr/1714319190841-2.jpg",
      text: message,
      time: "Just now",
      like: 0,
      replies: [],
    };

    setComments([newComment, ...comments]);
    setMessage("");
  };

  const handleLike = (index: number) => {
    setComments((prev) =>
      prev.map((c, i) => (i === index ? { ...c, like: c.like + 1 } : c))
    );
  };

  const handleReply = (e: React.FormEvent<HTMLFormElement>, index: number) => {
    e.preventDefault();
    if (!replyMessage.trim()) return;

    const newReply = {
      username: "Rakib Hossen",
      userProfile: "https://i.ibb.co/wq1b1Dr/1714319190841-2.jpg",
      text: replyMessage,
      time: "Just now",
      like: 0,
    };

    setComments((prev) =>
      prev.map((c, i) =>
        i === index ? { ...c, replies: [...c.replies, newReply] } : c
      )
    );

    setReplyMessage("");
    setReplyingTo(null);
  };

  return (
    <div>
      {/* Comment Input */}
      <div className="flex gap-2 w-full px-3">
        <Image
          src="https://i.ibb.co/wq1b1Dr/1714319190841-2.jpg"
          alt="user"
          className="rounded-full w-9 h-9"
          width={40}
          height={40}
        />
        <form onSubmit={handleComment} className="w-full">
          <div className="flex items-end gap-2">
            <TextareaAutosize
              onChange={handleChange}
              placeholder="Write a comment..."
              value={message}
              minRows={1}
              maxRows={5}
              className="flex-1 rounded-lg border  
                 focus:outline-none focus:ring-2 focus:ring-blue-600 
                 px-3 py-2 text-sm resize-none bg-transparent"
            />
            <button
              type="submit"
              className="flex items-center justify-center w-11 h-9 rounded-lg 
                 bg-green-accent text-white hover:bg-green-600 transition-colors"
            >
              <BsSendFill className="text-lg" />
            </button>
          </div>
        </form>
      </div>

      {/* Comment List */}
      <div className="w-full max-w-xl mx-auto space-y-3 px-3 mt-5">
        {comments.map((comment, i) => (
          <div key={i} className="flex gap-3">
            <Image
              src={comment.userProfile}
              alt={comment.username}
              className="w-9 h-9 rounded-full border"
              width={40}
              height={40}
            />
            <div className="flex-1">
              <h4 className="font-semibold">{comment.username}</h4>
              <p className="text-sm mt-1">{comment.text}</p>
              <div className="flex gap-5 mt-1 text-sm text-gray-500">
                <button
                  onClick={() => handleLike(i)}
                  className="flex items-center gap-1 hover:text-red-500"
                >
                  <BiLike /> {comment.like}
                </button>
                <button
                  onClick={() => setReplyingTo(i)}
                  className="hover:text-blue-500 text-xs"
                >
                  Reply
                </button>
              </div>

              {/* Reply Input */}
              {replyingTo === i && (
                <form
                  onSubmit={(e) => handleReply(e, i)}
                  className="w-full mt-2"
                >
                  <div className="flex items-end gap-2">
                    <TextareaAutosize
                      value={replyMessage}
                      onChange={(e) => setReplyMessage(e.target.value)}
                      placeholder="Replay your comment..."
                      minRows={1}
                      maxRows={5}
                      className="flex-1 rounded-lg border  
                 focus:outline-none focus:ring-2 focus:ring-blue-600 
                 px-3 py-2 text-sm resize-none bg-transparent"
                    />
                    <button
                      type="submit"
                      className="flex items-center justify-center w-11 h-9 rounded-lg 
                 bg-green-accent text-white hover:bg-green-600 transition-colors"
                    >
                      <BsSendFill className="text-lg" />
                    </button>
                     <button
        type="button"
        onClick={() => setReplyingTo(null)}
        className="flex items-center justify-center w-11 h-9 rounded-lg 
                 bg-red-500 text-white hover:bg-red-600 transition-colors"
      >
      <RxCross1 className="text-lg"/>
      </button> 
                  </div>
                </form>
              )}

              {/* Show Replies */}
              {comment.replies?.length > 0 && (
                <div className="mt-2 space-y-2">
                  {comment.replies.map((reply, j) => (
                    <div key={j} className="flex gap-2">
                      <Image
                        src="https://res.cloudinary.com/duhybktme/image/upload/v1754316559/w9cf7fjcoqomrhq6wheg.webp"
                        alt={reply.username}
                        className="w-7 h-7 rounded-full border"
                        width={30}
                        height={30}
                      />
                      <div>
                        <h5 className="text-sm font-semibold">
                          {reply.username}
                        </h5>
                        <p className="text-xs">{reply.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Comment;
