import { useUser } from "@/context/UserContext";
import {
  declineRequest,
  fetchSentFriendsRequest,
} from "@/store/features/friendRequest/friendRequestSlice";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import Image from "next/image";
import { useEffect } from "react";
import { toast } from "sonner";

const SentRequest = () => {
  const { userInfo } = useUser();
  const userId = userInfo?._id;
  const dispatch = useAppDispatch();
  const { mySentRequest, isLoading } = useAppSelector(
    (state) => state.friendRequest
  );

  useEffect(() => {
    if (userId) {
      dispatch(fetchSentFriendsRequest(userId));
    }
  }, [userId, dispatch]);

  //   const friendRequest = [
  //     {
  //       id: "req1",
  //       senderName: "Ahad Hossen",
  //       senderAvatar: "https://i.ibb.co/LDzBmzPd/review-2.jpg",
  //       mutualFriends: 5,
  //       status: "pending",
  //       sentAt: "2025-04-29T10:15:00Z",
  //     },
  //     {
  //       id: "req2",
  //       senderName: "Ayesha Akter",
  //       senderAvatar: "https://i.ibb.co/ypkgK0X/blue-beanie.png",
  //       mutualFriends: 3,
  //       status: "pending",
  //       sentAt: "2025-04-28T16:45:00Z",
  //     },
  //   ];

  if (isLoading)
    return (
      <div className="flex flex-col gap-5 justify-center items-center min-h-[150px]">
        <div className="w-12 h-12 border-2 border-[#0866ff] border-t-transparent rounded-full animate-spin"></div>
      </div>
    );

  console.log("mySentRequest", mySentRequest);

  const handleCancelRequest = (id: string) => {
    console.log(id);
    dispatch(declineRequest(id));
    toast.success("Cancel friend request ");
  };
  return (
    <div>
      <div className="">
        <h3 className="text-sm mb-2 font-semibold dark:text-white text-gray-800">
          Sent Request
        </h3>

        <div className="space-y-4 mt-4">
          {mySentRequest.length === 0 ? (
            <div className="text-xs flex flex-col gap-2 justify-center items-center text-center min-h-[100px]">
              <Image
                className="w-40 "
                src="/empty.png"
                alt="logo"
                width={200}
                height={300}
                priority
              />
              <p>There is no sent request</p>
            </div>
          ) : (
            mySentRequest?.map((req) => (
              <div
                key={req?._id}
                className="flex items-center justify-between p-3 border rounded-lg hover:shadow transition"
              >
                <div className="flex items-center gap-3">
                  {req?.receiver?.profileImage ? (
                    <Image
                      src={req?.receiver?.profileImage}
                      alt={req?.receiver?.username || "Profile"}
                      className="w-12 h-12 rounded-full object-cover"
                      width={48}
                      height={48}
                    />
                  ) : (
                    <div className="w-12 h-12 flex items-center justify-center rounded-full border text-white font-semibold text-lg bg-green-accent">
                      {req.receiver?.username?.charAt(0).toUpperCase()}
                    </div>
                  )}
                  <div>
                    <p className="font-medium dark:text-white text-gray-800">
                      {req?.receiver?.name || req?.receiver?.username}
                    </p>
                    <p className="text-sm dark:text-gray-300 text-gray-500">
                      @{req?.receiver?.username.slice(0, 12)}
                    </p>
                  </div>
                </div>

                <div className="">
                  <button
                    onClick={() => handleCancelRequest(req?._id)}
                    className="md:text-md text-xs w-full rounded-full border px-3 py-1  hover:bg-gray-200 dark:hover:bg-black"
                  >
                    Cancel Request
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default SentRequest;
