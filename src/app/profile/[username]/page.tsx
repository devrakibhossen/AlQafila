import { Metadata } from "next";
import ProfileContent from "../components/ProfileContent";
// import { useSession } from "next-auth/react";
export const metadata: Metadata = {
  title: "Profile | Rakib Hossen",
};

type Props = {
  params: {
    username: string;
  };
};
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
async function getUserData(username: string) {
  const res = await fetch(`${API_BASE_URL}/api/v1/users/username/${username}`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch user data");
  }

  return res.json();
}

const Page = async ({ params }: Props) => {
  const username = params?.username || "guest";
  const user = await getUserData(username);
  console.log(user?.data);
  return (
    <div>
      <ProfileContent user={user?.data} />
    </div>
  );
};

export default Page;
