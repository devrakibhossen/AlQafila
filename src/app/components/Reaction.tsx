"use client";
import Image from "next/image";
import { useState } from "react";
type ReactionType = "like" | "love" | "smart" | "funny" | "angry";

const Reaction = () => {
  const [selected, setSelected] = useState<string | null>(null);
  const [showReactions, setShowReactions] = useState(false);
  const [counts, setCounts] = useState<Record<ReactionType, number>>({
    like: 3,
    love: 2,
    smart: 3,
    funny: 5,
    angry: 5,
  });

  const handleReact = (type: ReactionType) => {
    if (selected === type) return;
    setSelected(type);
    setCounts((prev) => ({
      ...prev,
      [type]: prev[type] + 1,
      ...(selected
        ? { [selected as ReactionType]: prev[selected as ReactionType] - 1 }
        : {}),
    }));
    setShowReactions(false);
  };

  const reactions: { type: ReactionType; image: string; label: string }[] = [
    { type: "like", image: "/ReactionIcon/like.png", label: "Like" },
    { type: "love", image: "/ReactionIcon/love.png", label: "Love" },
    { type: "smart", image: "/ReactionIcon/smart.png", label: "Smart" },
    { type: "funny", image: "/ReactionIcon/funny.png", label: "Funny" },
    { type: "angry", image: "/ReactionIcon/angry.png", label: "Angry" },
  ];

  const selectedReaction =
    reactions.find((r) => r.type === selected) || reactions[0];

  return (
    <div className="relative inline-block">
      {/* Reaction Container */}
      <div
        className="relative"
        onMouseEnter={() => setShowReactions(true)}
        onMouseLeave={() => setShowReactions(false)}
      >
        {/* Default selected or like button */}
        <button className="flex items-center gap-1 ">
          <Image
            src={selectedReaction.image}
            alt={selectedReaction.label}
            width={24}
            height={24}
            className="w-6 h-6"
          />
          <span className="text-sm">{selectedReaction.label}</span>
        </button>

        {/* Reaction icons on hover */}
        {showReactions && (
          <div className="absolute w-56 h-14 bg-white dark:bg-zinc-900 -top-14 left-0 flex gap-3 px-1.5  rounded-xl  transition-all duration-200 z-10">
            {reactions.map(({ type, image, label }) => (
              <button
                key={type}
                onClick={() => handleReact(type)}
                className={`relative hover:scale-125 transition-all duration-150 ${
                  selected === type ? "opacity-100" : "opacity-80"
                }`}
                title={label}
              >
                <Image
                  src={image}
                  alt={label}
                  width={40}
                  height={40}
                  className="w-8 h-8"
                />
                <span className="absolute hidden text-xs -bottom-5 left-1/2 -translate-x-1/2">
                  {counts[type]}
                </span>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Reaction;
