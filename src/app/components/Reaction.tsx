// "use client";
// import Image from "next/image";
// import { useState } from "react";
// import { BiLike } from "react-icons/bi";
// type ReactionType = "like" | "love" | "funny" | "wow" | "sad" | "angry";

// const Reaction = () => {
//   const [selected, setSelected] = useState<string | null>(null);
//   const [showReactions, setShowReactions] = useState(false);
//   const [counts, setCounts] = useState<Record<ReactionType, number>>({
//     like: 3,
//     love: 2,
//     funny: 5,
//     wow: 5,
//     sad: 5,
//     angry: 5,
//   });

//   const handleReact = (type: ReactionType) => {
//     if (selected === type) {
//       setSelected(null);
//       setCounts((prev) => ({
//         ...prev,
//         [type]: Math.max(prev[type] - 1, 0),
//       }));
//     } else {
//       setSelected(type);
//       setCounts((prev) => ({
//         ...prev,
//         [type]: prev[type] + 1,
//         ...(selected
//           ? { [selected as ReactionType]: prev[selected as ReactionType] - 1 }
//           : {}),
//       }));
//       setShowReactions(false);
//     }
//   };

//   const reactions: { type: ReactionType; image: string; label: string }[] = [
//     { type: "like", image: "/ReactionIcon/like.png", label: "Like" },
//     { type: "love", image: "/ReactionIcon/love.png", label: "Love" },
//     { type: "funny", image: "/ReactionIcon/funny.png", label: "Funny" },
//     { type: "wow", image: "/ReactionIcon/wow.png", label: "Wow" },
//     { type: "sad", image: "/ReactionIcon/sad.png", label: "Sad" },
//     { type: "angry", image: "/ReactionIcon/angry.png", label: "Angry" },
//   ];

//   const selectedReaction = reactions.find((r) => r.type === selected);

//   return (
//     <div className="relative inline-block">
//       <div
//         className="relative"
//         onMouseEnter={() => setShowReactions(true)}
//         onMouseLeave={() => setShowReactions(false)}
//       >
//         <button className="flex justify-center gap-1.5 items-center cursor-pointer hover:bg-gray-200 dark:hover:bg-black p-1.5 rounded-md w-full transition-colors duration-300">
//           {selectedReaction ? (
//             <>
//               <Image
//                 src={selectedReaction.image}
//                 alt={selectedReaction.label}
//                 width={22}
//                 height={22}
//                 className="w-5 h-5"
//               />
//               <span className="text-[13px]">{selectedReaction.label}</span>
//             </>
//           ) : (
//             <>
//               <BiLike className="text-lg " />
//               <span className="text-[13px]">Like</span>
//             </>
//           )}
//         </button>

//         {showReactions && (
//           <div className="absolute shadow-2xl w-62 h-12 bg-white dark:bg-zinc-900 -top-12 left-0 flex gap-2.5 px-1.5  rounded-full  transition-all duration-200 z-10">
//             {reactions.map(({ type, image, label }) => (
//               <button
//                 key={type}
//                 onClick={() => handleReact(type)}
//                 className={`relative hover:scale-150 transition-all duration-150 ${
//                   selected === type ? "opacity-100" : "opacity-80"
//                 }`}
//                 title={label}
//               >
//                 <Image
//                   src={image}
//                   alt={label}
//                   width={40}
//                   height={40}
//                   className="w-8 h-8"
//                 />
//                 <span className="absolute hidden text-xs -bottom-5 left-1/2 -translate-x-1/2">
//                   {counts[type]}
//                 </span>
//               </button>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Reaction;

"use client";
import Image from "next/image";
import { BiLike } from "react-icons/bi";

const Reaction = () => {
  return (
    <div className="relative inline-block group">
      {/* Tooltip-like Reactions */}
      <div className="w-62 flex justify-center items-center border  gap-2 bg-white dark:bg-zinc-950 px-1 py-1.5 absolute -top-12 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200 shadow-md rounded-full z-10">
        <Image
          src="/ReactionIcon/like.png"
          alt="like"
          width={40}
          height={40}
          className="w-8 h-8 cursor-pointer"
        />
        <Image
          src="/ReactionIcon/love.png"
          alt="love"
          width={40}
          height={40}
          className="w-8 h-8 cursor-pointer"
        />
        <Image
          src="/ReactionIcon/funny.png"
          alt="funny"
          width={40}
          height={40}
          className="w-8 h-8 cursor-pointer"
        />
        <Image
          src="/ReactionIcon/wow.png"
          alt="wow"
          width={40}
          height={40}
          className="w-8 h-8 cursor-pointer"
        />
        <Image
          src="/ReactionIcon/sad.png"
          alt="sad"
          width={40}
          height={40}
          className="w-8 h-8 cursor-pointer"
        />
        <Image
          src="/ReactionIcon/angry.png"
          alt="angry"
          width={40}
          height={40}
          className="w-8 h-8 cursor-pointer"
        />
      </div>

      {/* Main Like Button */}
      <button className="relative flex text-sm justify-center gap-1.5 items-center cursor-pointer hover:bg-gray-200 dark:hover:bg-black p-1.5 rounded-md w-full transition-colors duration-300">
        <BiLike className="text-lg " />
        Like
      </button>
    </div>
  );
};

export default Reaction;
