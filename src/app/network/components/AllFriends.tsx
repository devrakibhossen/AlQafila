import { useUser } from "@/context/UserContext";
import { fetchMyFriends } from "@/store/features/friendRequest/friendRequestSlice";
import { useAppDispatch } from "@/store/hooks";
import { RootState } from "@/store/store";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { useSelector } from "react-redux";

const AllFriends = () => {
  const { userInfo } = useUser();
  const dispatch = useAppDispatch();
  const { myFriends, isLoading } = useSelector(
    (state: RootState) => state.friendRequest
  );
  const userId = userInfo?._id;

  useEffect(() => {
    if (userId) {
      dispatch(fetchMyFriends(userId));
    }
  }, [userId, dispatch]);
  console.log("All Friends", myFriends);

  if (isLoading)
    return (
      <div className="flex flex-col gap-5 justify-center items-center min-h-[150px]">
        <div className="w-12 h-12 border-2 border-[#0866ff] border-t-transparent rounded-full animate-spin"></div>
      </div>
    );

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
          {myFriends.length === 0 ? (
            <div className="text-xs flex flex-col gap-2 justify-center items-center text-center min-h-[100px]">
              <Image
                className="w-40 "
                src="/empty.png"
                alt="logo"
                width={200}
                height={300}
                priority
              />
              <p>There is no pending request</p>
            </div>
          ) : (
            myFriends?.map((friend) => (
              <div
                key={friend?._id}
                className="flex flex-col items-center justify-between p-3 border rounded-lg hover:shadow transition"
              >
                <div className="flex flex-col items-center gap-3 mb-3">
                  <Image
                    src={friend?.profileImage}
                    alt={friend?.name}
                    className="w-12 h-12 rounded-full object-cover"
                    width={48}
                    height={48}
                  />
                  <div className="text-center">
                    <p className="font-medium  dark:text-white text-gray-800">
                      {friend?.name}
                    </p>
                    <p className="text-sm dark:text-gray-300 text-gray-500">
                      @{friend?.username.slice(0, 12)}
                    </p>
                  </div>
                </div>

                <div className="space-y-2.5">
                  <Link href={`/profile/${friend?.username}`}>
                    <button className="text-sm w-full rounded-full border px-3 py-1 hover:bg-gray-200 dark:hover:bg-black">
                      Profile
                    </button>
                  </Link>
                  <button className="mt-2 text-sm w-full bg-green-accent text-white  py-1 rounded-full ">
                    Send Message
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

export default AllFriends;
