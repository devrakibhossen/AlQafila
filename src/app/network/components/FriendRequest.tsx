import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRef } from "react";
import { toast } from "sonner";
import SendFriendsRequst from "./SendFriendsRequst";

const FriendRequest = () => {
  const audioRef = useRef<HTMLAudioElement>(null);

  const handleRequestAccept = () => {
    toast.success("Friend request accepted");
    if (audioRef.current) {
      audioRef.current.play();
    }
  };
  const friendRequest = [
    {
      id: "req1",
      senderName: "Ahad Hossen",
      senderAvatar: "https://i.ibb.co/LDzBmzPd/review-2.jpg",
      mutualFriends: 5,
      status: "pending",
      sentAt: "2025-04-29T10:15:00Z",
    },
    {
      id: "req2",
      senderName: "Ayesha Akter",
      senderAvatar: "https://i.ibb.co/ypkgK0X/blue-beanie.png",
      mutualFriends: 3,
      status: "pending",
      sentAt: "2025-04-28T16:45:00Z",
    },
    {
      id: "req3",
      senderName: "Tanvir Islam",
      senderAvatar: "https://i.ibb.co/nNwWbHNV/review-4.jpg",
      mutualFriends: 7,
      status: "pending",
      sentAt: "2025-04-25T08:30:00Z",
    },
    {
      id: "req4",
      senderName: "Jahid",
      senderAvatar: "https://i.ibb.co/b5WMgQDn/self.jpg",
      mutualFriends: 2,
      status: "pending",
      sentAt: "2025-04-27T13:10:00Z",
    },
  ];
  return (
    <div>
      <div className="mb-5">
        <h3 className="text-sm mb-2 font-semibold dark:text-white text-gray-800">
          Friend Request
        </h3>
        <div className="space-y-4">
          {friendRequest.map((req) => (
            <div
              key={req.id}
              className="flex lg:flex-row flex-col items-center gap-3 justify-between p-3 border rounded-lg hover:shadow transition"
            >
              <Image
                src={req.senderAvatar}
                alt={req.senderName}
                className="w-12 h-12 rounded-full object-cover md:hidden"
                width={48}
                height={48}
              />
              <div className="flex items-center gap-3">
                <Image
                  src={req.senderAvatar}
                  alt={req.senderName}
                  className="w-12 h-12 rounded-full object-cover md:block hidden"
                  width={48}
                  height={48}
                />
                <div>
                  <p className="font-medium dark:text-white text-gray-800">
                    {req.senderName}
                  </p>
                  <p className="text-sm dark:text-gray-300 text-gray-500">
                    {req.mutualFriends} mutual friends
                  </p>
                </div>
              </div>

              {req.status === "pending" && (
                <div className="flex gap-2">
                  <Button
                    onClick={() => handleRequestAccept()}
                    className="text-sm bg-green-100 text-green-700 px-3 py-1 rounded hover:bg-green-200"
                  >
                    Accept
                  </Button>
                  <audio ref={audioRef} src="requestacceptsound.ogg"></audio>
                  <button
                    onClick={() =>
                      toast("Friend request declined", {
                        description: "You have rejected Alex's request",
                        action: {
                          label: "request",
                          onClick: () => console.log("Chat started with Alex"),
                        },
                      })
                    }
                    className="text-sm bg-red-100 text-red-700 px-3 py-1 rounded hover:bg-red-200"
                  >
                    Decline
                  </button>
                </div>
              )}

              {req.status === "accepted" && (
                <span className="text-sm text-green-600 font-medium">
                  Accepted
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
      <hr className="my-6"/>
      <SendFriendsRequst />
    </div>
  );
};

export default FriendRequest;
