// "use client";
// import Image from "next/image";
// import { BiLike } from "react-icons/bi";
// import { useState, useRef, useEffect } from "react";
// import { useUser } from "@/context/UserContext";
// import { useAppDispatch, useAppSelector } from "@/store/hooks";
// import {
//   addReaction,
//   fetchReactions,
// } from "@/store/features/reaction/reactionsSlice";

// interface PostIdProps {
//   postId: string;
// }

// export interface Reaction {
//   _id?: string;
//   postId: string;
//   userId:
//     | string
//     | {
//         _id: string;
//         username: string;
//         name: string;
//         profileImage: string;
//       };
//   type: string | null;
//   createdAt?: string;
//   updatedAt?: string;
// }

// const Reaction = ({ postId }: PostIdProps) => {
//   const { userInfo } = useUser();
//   const dispatch = useAppDispatch();

//   const reactionsState = useAppSelector((state) => {
//     const reactions = state.reactions.items[postId];
//     return Array.isArray(reactions) ? reactions : [];
//   });

//   const reactions = [
//     {
//       type: "like",
//       image: "/ReactionIcon/like.png",
//       label: "Liked",
//     },
//     {
//       type: "love",
//       image: "/ReactionIcon/love.png",
//       label: "Love",
//     },
//     {
//       type: "funny",
//       image: "/ReactionIcon/funny.png",
//       label: "Funny",
//     },
//     {
//       type: "wow",
//       image: "/ReactionIcon/wow.png",
//       label: "Wow",
//     },
//     {
//       type: "sad",
//       image: "/ReactionIcon/sad.png",
//       label: "Sad",
//     },
//     {
//       type: "angry",
//       image: "/ReactionIcon/angry.png",
//       label: "Angry",
//     },
//   ];

//   const [selectedReaction, setSelectedReaction] = useState<string | null>(null);
//   const [showReactions, setShowReactions] = useState(false);

//   const timerRef = useRef<NodeJS.Timeout | null>(null);

//   const isMobile =
//     typeof window !== "undefined" &&
//     /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

//   const getUserId = (reaction: Reaction): string => {
//     return typeof reaction.userId === "string"
//       ? reaction.userId
//       : reaction.userId._id;
//   };

//   useEffect(() => {
//     dispatch(fetchReactions(postId));
//   }, [dispatch, postId]);

//   useEffect(() => {
//     console.log(
//       "reactionsState:",
//       reactionsState,
//       "Type:",
//       typeof reactionsState,
//       "Is Array:",
//       Array.isArray(reactionsState)
//     );

//     if (
//       userInfo?._id &&
//       Array.isArray(reactionsState) &&
//       reactionsState.length > 0
//     ) {
//       const myReaction = reactionsState.find(
//         (r) => getUserId(r) === userInfo._id
//       );
//       setSelectedReaction(myReaction ? myReaction.type : null);
//     } else if (
//       userInfo?._id &&
//       (!reactionsState || reactionsState.length === 0)
//     ) {
//       setSelectedReaction(null);
//     }
//   }, [reactionsState, userInfo]);

//   const handleReaction = async (type: string) => {
//     if (!userInfo?._id) return;

//     const newType: string | null = selectedReaction === type ? null : type;

//     setSelectedReaction(newType);
//     setShowReactions(false);

//     const reactionData = {
//       postId,
//       userId: userInfo._id,
//       type: newType,
//     };

//     try {
//       await dispatch(addReaction(reactionData));
//       console.log("reactionData", reactionData);

//       dispatch(fetchReactions(postId));
//     } catch (error) {
//       setSelectedReaction(selectedReaction);
//       console.error("Error adding reaction:", error);
//     }
//   };

//   const handleTouchStart = (e: React.TouchEvent) => {
//     e.preventDefault();
//     timerRef.current = setTimeout(() => {
//       setShowReactions(true);
//     }, 400);
//   };

//   const handleTouchMove = (e: React.TouchEvent) => {
//     if (!showReactions) return;

//     const touch = e.touches[0];
//     const element = document.elementFromPoint(touch.clientX, touch.clientY);
//     if (element && element instanceof HTMLElement) {
//       const reactionType = element.getAttribute("data-reaction");
//       if (reactionType) {
//         // setSelectedReaction(reactionType);
//       }
//     }
//   };

//   const handleTouchEnd = () => {
//     if (timerRef.current) clearTimeout(timerRef.current);
//     if (isMobile) {
//       setTimeout(() => setShowReactions(false), 200);
//     }
//   };

//   return (
//     <div
//       onMouseEnter={() => !isMobile && setShowReactions(true)}
//       onMouseLeave={() => !isMobile && setShowReactions(false)}
//       onTouchStart={handleTouchStart}
//       onTouchMove={handleTouchMove}
//       onTouchEnd={handleTouchEnd}
//       className="relative inline-block group"
//     >
//       {showReactions && (
//         <div className="w-62 flex justify-center items-center border gap-2 bg-white dark:bg-zinc-950 px-1 py-1.5 absolute -top-12 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200 shadow-md rounded-full z-10">
//           {reactions.map((reaction, idx) => (
//             <Image
//               key={idx}
//               src={`${reaction.image}`}
//               alt={reaction.type}
//               width={40}
//               height={40}
//               data-reaction={reaction.type}
//               className="w-8 h-8 cursor-pointer hover:scale-125 transition-transform"
//               onClick={() => handleReaction(reaction.type)}
//             />
//           ))}
//         </div>
//       )}

//       <button
//         onClick={() => handleReaction("like")}
//         onTouchStart={handleTouchStart}
//         onTouchEnd={handleTouchEnd}
//         className="relative flex text-sm justify-center gap-1.5 items-center cursor-pointer hover:bg-gray-200 dark:hover:bg-black p-1.5 rounded-md w-full transition-colors duration-300"
//       >
//         {selectedReaction ? (
//           <>
//             <Image
//               src={
//                 reactions.find((reaction) => reaction.type === selectedReaction)
//                   ?.image || "/ReactionIcon/like.png"
//               }
//               alt={selectedReaction}
//               width={20}
//               height={20}
//               className="w-5 h-5"
//             />
//             {reactions.find((r) => r.type === selectedReaction)?.label}
//           </>
//         ) : (
//           <>
//             <BiLike className="text-lg " />
//             Like
//           </>
//         )}
//       </button>
//     </div>
//   );
// };

// export default Reaction;


"use client";
import Image from "next/image";
import { BiLike } from "react-icons/bi";
import { useState, useRef, useEffect } from "react";
import { useUser } from "@/context/UserContext";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {
  addReaction,
  fetchReactions,
} from "@/store/features/reaction/reactionsSlice";

interface PostIdProps {
  postId: string;
}

export interface Reaction {
  _id?: string;
  postId: string;
  userId:
    | string
    | {
        _id: string;
        username: string;
        name: string;
        profileImage: string;
      };
  type: string | null;
  createdAt?: string;
  updatedAt?: string;
}

const Reaction = ({ postId }: PostIdProps) => {
  const { userInfo } = useUser();
  const dispatch = useAppDispatch();

  const reactionsState = useAppSelector((state) => {
    const reactions = state.reactions.items[postId];
    return Array.isArray(reactions) ? reactions : [];
  });

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
  const [isTouchHolding, setIsTouchHolding] = useState(false);

  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const isMobile =
    typeof window !== "undefined" &&
    /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

  const getUserId = (reaction: Reaction): string => {
    return typeof reaction.userId === "string"
      ? reaction.userId
      : reaction.userId._id;
  };

  useEffect(() => {
    dispatch(fetchReactions(postId));
  }, [dispatch, postId]);

  useEffect(() => {
    console.log(
      "reactionsState:",
      reactionsState,
      "Type:",
      typeof reactionsState,
      "Is Array:",
      Array.isArray(reactionsState)
    );

    if (
      userInfo?._id &&
      Array.isArray(reactionsState) &&
      reactionsState.length > 0
    ) {
      const myReaction = reactionsState.find(
        (r) => getUserId(r) === userInfo._id
      );
      setSelectedReaction(myReaction ? myReaction.type : null);
    } else if (
      userInfo?._id &&
      (!reactionsState || reactionsState.length === 0)
    ) {
      setSelectedReaction(null);
    }
  }, [reactionsState, userInfo]);

  const handleReaction = async (type: string) => {
    if (!userInfo?._id) return;

    const newType: string | null = selectedReaction === type ? null : type;

    setSelectedReaction(newType);
    setShowReactions(false);

    const reactionData = {
      postId,
      userId: userInfo._id,
      type: newType,
    };

    try {
      await dispatch(addReaction(reactionData));
      console.log("reactionData", reactionData);

      dispatch(fetchReactions(postId));
    } catch (error) {
      setSelectedReaction(selectedReaction);
      console.error("Error adding reaction:", error);
    }
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleTouchStart = (e: React.TouchEvent) => {
    if (!isMobile) return;
    
    setIsTouchHolding(true);
    timerRef.current = setTimeout(() => {
      if (isTouchHolding) {
        setShowReactions(true);
      }
    }, 500); // 500ms hold time
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    // If user moves finger too much, cancel the long press
    const touch = e.touches[0];
    const startTouch = e.currentTarget.getBoundingClientRect();
    const moveThreshold = 20; // pixels
    
    if (
      Math.abs(touch.clientX - (startTouch.left + startTouch.width / 2)) > moveThreshold ||
      Math.abs(touch.clientY - (startTouch.top + startTouch.height / 2)) > moveThreshold
    ) {
      setIsTouchHolding(false);
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    }
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    setIsTouchHolding(false);
    
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    
    // If reactions are showing and user lifts finger, hide them
    if (showReactions) {
      // Check if user touched a reaction
      const touch = e.changedTouches[0];
      const element = document.elementFromPoint(touch.clientX, touch.clientY);
      
      if (element && element instanceof HTMLElement) {
        const reactionType = element.getAttribute("data-reaction");
        if (reactionType) {
          handleReaction(reactionType);
          return;
        }
      }
      
      setTimeout(() => setShowReactions(false), 100);
    }
  };

  const handleClick = () => {
    if (!showReactions) {
      handleReaction("like");
    }
  };

  // Clear timer on component unmount
  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);

  return (
    <div
      onMouseEnter={() => !isMobile && setShowReactions(true)}
      onMouseLeave={() => !isMobile && setShowReactions(false)}
      className="relative inline-block group"
    >
      {showReactions && (
        <div className="w-62 flex justify-center items-center border gap-2 bg-white dark:bg-zinc-950 px-1 py-1.5 absolute -top-12 left-0 opacity-100 transition-opacity duration-200 shadow-md rounded-full z-10">
          {reactions.map((reaction, idx) => (
            <Image
              key={idx}
              src={`${reaction.image}`}
              alt={reaction.type}
              width={40}
              height={40}
              data-reaction={reaction.type}
              className="w-8 h-8 cursor-pointer hover:scale-125 transition-transform"
              onClick={() => handleReaction(reaction.type)}
              onTouchEnd={(e) => {
                e.preventDefault();
                e.stopPropagation();
                handleReaction(reaction.type);
              }}
            />
          ))}
        </div>
      )}

      <button
        onClick={handleClick}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        className="relative flex text-sm justify-center gap-1.5 items-center cursor-pointer hover:bg-gray-200 dark:hover:bg-black p-1.5 rounded-md w-full transition-colors duration-300"
        style={{ touchAction: 'manipulation' }} // Prevent double-tap zoom
      >
        {selectedReaction ? (
          <>
            <Image
              src={
                reactions.find((reaction) => reaction.type === selectedReaction)
                  ?.image || "/ReactionIcon/like.png"
              }
              alt={selectedReaction}
              width={20}
              height={20}
              className="w-5 h-5"
            />
            {reactions.find((r) => r.type === selectedReaction)?.label}
          </>
        ) : (
          <>
            <BiLike className="text-lg " />
            Like
          </>
        )}
      </button>
    </div>
  );
};

export default Reaction;