"use client";
import Image from "next/image";
import { BiLike } from "react-icons/bi";
import { useState,useRef  } from "react";

const Reaction = () => {
  const reactions = [
    {
      type: "like",
      image: "/ReactionIcon/like.png",
      label: "Liked",
    },
    {
      type: "love",
      image: "/ReactionIcon/love.png",
      label: "Love",
    },
    {
      type: "funny",
      image: "/ReactionIcon/funny.png",
      label: "Funny",
    },
    {
      type: "wow",
      image: "/ReactionIcon/wow.png",
      label: "Wow",
    },
    {
      type: "sad",
      image: "/ReactionIcon/sad.png",
      label: "Sad",
    },
    {
      type: "angry",
      image: "/ReactionIcon/angry.png",
      label: "Angry",
    },
  ];

  const [selectedReaction, setSelectedReaction] = useState<string | null>(null);
  const [showReactions, setShowReactions] = useState(false);

  const timerRef = useRef<NodeJS.Timeout | null>(null)


    const handleReaction = (type: string) => {
    setSelectedReaction(type);
    setShowReactions(false);
  };

  const handleMainClick  = () => {
    if (!selectedReaction) {
       setSelectedReaction("like");
    } else {
      setSelectedReaction(null);
    }
  };

  const handleTouchStart = () =>{
    timerRef.current = setTimeout ( ()=>{
 setShowReactions(true);
    },400)
  }

   const handleTouchEnd = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
  };


  return (
    <div  onMouseEnter={() => setShowReactions(true)}
      onMouseLeave={() => setShowReactions(false)} className="relative inline-block group">
      {/* Tooltip-like Reactions */}
{
  showReactions &&( <div className="w-62 flex justify-center items-center border  gap-2 bg-white dark:bg-zinc-950 px-1 py-1.5 absolute -top-12 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200 shadow-md rounded-full z-10">
        {reactions.map((reaction, idx) => (
          <Image
            key={idx}
            src={`${reaction.image}`}
            alt={reaction.type}
            width={40}
            height={40}
            className="w-8 h-8 cursor-pointer hover:scale-125 transition-transform"
            onClick={()=>handleReaction(reaction.type)}
          />
        ))}

      </div>
)}


      {/* Main Like Button */}
      <button
         onClick={handleMainClick}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        className="relative flex text-sm justify-center gap-1.5 items-center cursor-pointer hover:bg-gray-200 dark:hover:bg-black p-1.5 rounded-md w-full transition-colors duration-300"
      >
        {
          selectedReaction ?(
            <>
            <Image
            src={
              reactions.find((reaction)=>reaction.type === selectedReaction)?.image || "/ReactionIcon/like.png"
            }
            alt={selectedReaction}
            width={20}
            height={20}
            className="w-5 h-5"
            />
            {reactions.find((r) => r.type === selectedReaction)?.label}
            </>
          ) :(
          <>
           <BiLike className="text-lg " />
        Like
          </>)
        }
       
      </button>
    </div>
  );
};

export default Reaction;
