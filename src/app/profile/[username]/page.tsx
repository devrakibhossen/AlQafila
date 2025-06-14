// import { Metadata } from "next";
// import ProfileContent from "../components/ProfileContent";

// interface Params {
//   username: string;
// }

// interface Props {
//   params: Params;
// }
// const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
// async function getUserData(username: string) {
//   const res = await fetch(`${API_BASE_URL}/api/v1/users/username/${username}`, {
//     cache: "no-store",
//   });
//   if (!res.ok) {
//     throw new Error("Failed to fetch user data");
//   }

//   return res.json();
// }

// export async function generateMetadata({ params }: Props): Promise<Metadata> {
//   const username = params?.username || "guest";
//   const user = await getUserData(username);

//   const displayName = user?.data?.name || "User";

//   return {
//     title: `Profile | ${displayName}`,
//   };
// }

// const Page = async ({ params }: Props) => {
//   const username = params?.username || "guest";
//   const user = await getUserData(username);
//   // console.log(user?.data);
//   return (
//     <div>
//       <ProfileContent user={user?.data} />
//     </div>
//   );
// };

// export default Page;

import { Metadata } from "next";
import ProfileContent from "../components/ProfileContent";

interface Params {
  username: string;
}

// Props ইন্টারফেসে params কে Promise<Params> হিসেবে ডিফাইন করুন
interface Props {
  params: Promise<Params>;
}

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

// generateMetadata ফাংশনে params কে await করুন
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const awaitedParams = await params; // params কে await করে প্রকৃত অবজেক্টটি নিন
  const username = awaitedParams?.username || "guest";
  const user = await getUserData(username);

  const displayName = user?.data?.name || "User";

  return {
    title: `Profile | ${displayName}`,
  };
}

// Page কম্পোনেন্টে params কে await করুন
const Page = async ({ params }: Props) => {
  const awaitedParams = await params; // params কে await করে প্রকৃত অবজেক্টটি নিন
  const username = awaitedParams?.username || "guest";
  const user = await getUserData(username);

  return (
    <div>
      <ProfileContent user={user?.data} />
    </div>
  );
};

export default Page;
