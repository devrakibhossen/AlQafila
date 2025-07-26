import Image from "next/image";

const FollowingandFollower = () => {
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
      {" "}
      <div className="">
        <h3 className="text-sm mb-2 font-semibold dark:text-white text-gray-800">
          Following & Follower
        </h3>
        <div className=" border-b flex space-x-6 text-sm font-medium dark:text-gray-300 text-gray-700">
          <button className="pb-2 text-sm border-b-2 border-[#0866ff]">
            Following
          </button>

          <button className="pb-2 text-sm hover:border-b-2 border-[#0866ff]">
            Followers
          </button>
        </div>
        <div className="space-y-4 mt-4">
          {friendRequest.map((req) => (
            <div
              key={req.id}
              className="flex items-center justify-between p-3 border rounded-lg hover:shadow transition"
            >
              <div className="flex items-center gap-3">
                <Image
                  src={req.senderAvatar}
                  alt={req.senderName}
                  className="w-12 h-12 rounded-full object-cover"
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

              <div className="">
                <button className="text-sm w-full rounded-full border px-3 py-1  hover:bg-gray-200">
                  Following
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FollowingandFollower;
