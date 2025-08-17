import Image from "next/image";
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  //   DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useAppSelector } from "@/store/hooks";



interface PostIdProps {
  postId: string;
}

const UserReaction = ({ postId }: PostIdProps) => {
  const userReactions = useAppSelector(
    (state) => state.reactions.items[postId]
  );
  console.log("userReactions", userReactions);

  //   const reactions: { type: ReactionType; image: string; label: string }[] = [
  //     { type: "like", image: "/ReactionIcon/like.png", label: "Like" },
  //     { type: "love", image: "/ReactionIcon/love.png", label: "Love" },
  //   ];

  const reactionIconMap: Record<string, string> = {
    like: "/ReactionIcon/like.png",
    love: "/ReactionIcon/love.png",
    funny: "/ReactionIcon/funny.png",
    wow: "/ReactionIcon/wow.png",
    sad: "/ReactionIcon/sad.png",
    angry: "/ReactionIcon/angry.png",
  };

  const reactionsConfig = [
    { value: "all", label: "All", icon: null },
    {
      value: "like",
      label: "Like",
      icon: "/ReactionIcon/like.png",
      color: "blue",
    },
    {
      value: "love",
      label: "Love",
      icon: "/ReactionIcon/love.png",
      color: "pink",
    },
    {
      value: "funny",
      label: "Funny",
      icon: "/ReactionIcon/funny.png",
      color: "yellow",
    },
    {
      value: "wow",
      label: "Wow",
      icon: "/ReactionIcon/wow.png",
      color: "yellow",
    },
    {
      value: "sad",
      label: "Sad",
      icon: "/ReactionIcon/sad.png",
      color: "yellow",
    },
    {
      value: "angry",
      label: "Angry",
      icon: "/ReactionIcon/angry.png",
      color: "yellow",
    },
  ];
  return (
    <Dialog>
      {userReactions?.length > 0 && (
        <DialogTrigger>
          <div className="text-[12px] flex items-center gap-1 hover:underline cursor-pointer">
            <div className="flex items-center -space-x-1 overflow-x-auto rounded-lg">
              {userReactions.slice(0, 3).map((reaction, index) => (
                <div key={index} className="min-w-fit">
                  <Image
                    src={
                      reactionIconMap[
                        reaction?.type as keyof typeof reactionIconMap
                      ] || "/ReactionIcon/like.png"
                    }
                    alt={reaction?.type as keyof typeof reactionIconMap}
                    width={20}
                    height={20}
                    className="rounded-full w-5 h-5"
                  />
                </div>
              ))}
              {userReactions.length > 3 && (
                <div className="min-w-fit text-xs font-semibold ml-1">
                  +{userReactions.length - 3}
                </div>
              )}
            </div>
            <span>{userReactions.length}</span>
          </div>
        </DialogTrigger>
      )}

      <DialogContent className="p-2.5">
        <DialogHeader>
          {/* <DialogTitle>Are you absolutely sure?</DialogTitle> */}
          <DialogDescription className="h-80 md:h-94 overflow-auto ">
            <Tabs defaultValue="all" className="w-full ">
              {/* Tab List */}
              <TabsList className="flex gap-2 justify-between rounded-xl bg-transparent p-1 mb-3">
                {reactionsConfig.map(({ value, label, icon, color }) => (
                  <TabsTrigger
                    key={value}
                    value={value}
                    className={`w-full rounded-full px-3 py-2 text-sm font-medium transition
              data-[state=active]:shadow 
              ${
                value === "all"
                  ? "data-[state=active]:bg-white dark:data-[state=active]:bg-gray-800"
                  : `data-[state=active]:bg-${color}-100 data-[state=active]:text-${color}-600 
                   dark:data-[state=active]:bg-${color}-900 dark:data-[state=active]:text-${color}-300`
              }`}
                  >
                    {icon ? (
                      <Image
                        src={icon}
                        alt={label}
                        width={20}
                        height={20}
                        className="rounded-full w-5 h-5"
                      />
                    ) : (
                      label
                    )}
                  </TabsTrigger>
                ))}
              </TabsList>

              {reactionsConfig.map(({ value }) => (
                <TabsContent key={value} value={value}>
                  <div className="flex flex-col gap-3 rounded-md">
                   {userReactions
  ?.filter((reaction) => value === "all" || reaction.type === value)
  .map((reaction, index) => {
    // Type Guard: check if userId is object
    const user =
      typeof reaction.userId === "object" ? reaction.userId : null;

    return (
      <div key={index} className="flex gap-2 items-center">
        <div className="relative">
          <Image
            src={user?.profileImage || "/default-avatar.png"}
            alt={user?.name || "User"}
            width={36}
            height={36}
            className="rounded-full border"
          />
          <div className="absolute bottom-0 -right-1">
            <Image
              src={
                reactionIconMap[
                  reaction.type as keyof typeof reactionIconMap
                ] || "/ReactionIcon/like.png"
              }
              alt={reaction.type as string}
              width={20}
              height={20}
              className="rounded-full w-5 h-5 border"
            />
          </div>
        </div>

        <div className="-space-y-1">
          <h3 className="text-md font-bold">{user?.name || "Unknown"}</h3>
          <p className="text-xs">@{user?.username || "unknown"}</p>
        </div>
      </div>
    );
  })}

                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default UserReaction;
