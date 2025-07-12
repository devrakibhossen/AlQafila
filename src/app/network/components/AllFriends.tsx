import Image from "next/image";
import { FaSearch } from "react-icons/fa";

const AllFriends = () => {
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
      <div className="">
        <h3 className="text-sm mb-2 font-semibold dark:text-white text-gray-800">
          All Friends
        </h3>
        <div className="flex items-center gap-2 px-4 py-2 md:w-1/2 dark:bg-zinc-900 bg-white border rounded-full mb-4">
          <FaSearch className="text-gray-400" />
          <input
            type="text"
            placeholder="Find your friend"
            className="w-full outline-none text-sm bg-transparent"
          />
        </div>
        <div className="grid lg:grid-cols-4 grid-cols-2  gap-4">
          {friendRequest.map((req) => (
            <div
              key={req.id}
              className="flex flex-col items-center justify-between p-3 border rounded-lg hover:shadow transition"
            >
              <div className="flex flex-col items-center gap-3 mb-3">
                <Image
                  src={req.senderAvatar}
                  alt={req.senderName}
                  className="w-12 h-12 rounded-full object-cover"
                  width={48}
                  height={48}
                />
                <div className="text-center">
                  <p className="font-medium  dark:text-white text-gray-800">
                    {req.senderName}
                  </p>
                  <p className="text-sm dark:text-gray-300 text-gray-500">
                    {req.mutualFriends} mutual friends
                  </p>
                </div>
              </div>

              {req.status === "pending" && (
                <div className="space-y-2.5">
                  <button className="text-sm w-full rounded-full border px-3 py-1  hover:bg-gray-200">
                    Profile
                  </button>
                  <button className="text-sm w-full bg-green-accent text-white  py-1 rounded-full ">
                    Send Message
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllFriends;
