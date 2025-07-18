"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { toast } from "sonner";

interface userDataProps {
   _id?: string;
  email: string;
  username: string;
  name?: string;
  profileImage?: string;
}

const SendFriendsRequst = () => {
  const [users, setUsers] = useState<userDataProps[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/users`
        );
        const data = await res.json();
        setUsers(data?.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching users:", error);
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) return <p>Loading...</p>;
  
  const handleFriendReuest =(id:number)=>{
    toast.success("Send Friend request successfully" , id)
    console.log("Send Friend request successfully" , id);
}


  return (
    <div>
      <div className="">
        <h3 className="text-sm mb-2 font-semibold dark:text-white text-gray-800">
          People around you
        </h3>

        <div className="grid lg:grid-cols-4 grid-cols-2  gap-4">
          {users.map((req) => (
            <div
              key={req?._id}
              className="flex flex-col items-center justify-between p-3 border rounded-lg hover:shadow transition"
            >
              <div className="flex flex-col items-center gap-3 mb-3">
                {req?.profileImage ? (
                  <Image
                    src={req?.profileImage}
                    alt={req?.name || "Profile"}
                    className="w-12 h-12 rounded-full object-cover"
                    width={48}
                    height={48}
                  />
                ) : (
                  <div className="w-12 h-12 flex items-center justify-center rounded-full border text-[#10b981] font-semibold text-lg bg-green-200">
                    {req?.username?.charAt(0).toUpperCase()}
                  </div>
                )}

                <div className="text-center">
                  <p className="font-medium  dark:text-white text-gray-800">
                    {req?.name || req?.username}
                  </p>
                  <p className="text-xs dark:text-gray-300 text-gray-500">
                    @{req?.username}
                  </p>
                </div>
              </div>

              <div className="">
                <Link href={`/profile/${req?.username}`}>
                  <button className="text-sm w-full rounded-full border px-3 py-1  hover:bg-gray-200 dark:hover:bg-black">
                    Profile
                  </button>
                </Link>
                <button onClick={()=>handleFriendReuest(req?._id)} className="mt-2 text-sm w-full bg-green-accent text-white  py-1 rounded-full ">
                  Send Request
                </button>
              </div>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SendFriendsRequst;
