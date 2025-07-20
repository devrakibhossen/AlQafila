// "use client";
// import {
//   createContext,
//   useContext,
//   useEffect,
//   useState,
//   ReactNode,
// } from "react";
// import { useSession } from "next-auth/react";

// interface UserInfo {
//   username: string;
//   email: string;
//   role: string;
// }

// interface UserContextType {
//   userInfo: UserInfo | null;
// }

// const UserContext = createContext<UserContextType | undefined>(undefined);

// export const UserProvider = ({ children }: { children: ReactNode }) => {
//   const { data: session } = useSession();
//   const [userInfo, setUserInfo] = useState<UserInfo | null>(null);
//   const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

//   useEffect(() => {
//     if (session?.user?.email) {
//       const fetchUserInfo = async () => {
//         try {
//           const res = await fetch(
//             `${API_BASE_URL}/api/v1/users/${session?.user?.email}`
//           );
//           if (!res.ok) throw new Error("Failed to fetch user info");
//           const data: UserInfo = await res.json();
//           setUserInfo(data?.data);
//         } catch (error) {
//           console.error("Error fetching user info:", error);
//         }
//       };

//       fetchUserInfo();
//     }
//   }, [API_BASE_URL, session?.user?.email]);

//   return (
//     <UserContext.Provider value={{ userInfo }}>{children}</UserContext.Provider>
//   );
// };

// export const useUser = (): UserContextType => {
//   const context = useContext(UserContext);
//   if (context === undefined) {
//     throw new Error("useUser must be used within a UserProvider");
//   }
//   return context;
// };

"use client";
import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import { useSession } from "next-auth/react";

interface UserInfo {
  _id:string;
  username: string;
  name: string;
  email: string;
  role: string;
  about: string;
  education: [
    {
      _id: string;
      institute: string;
      degree: string;
      image: string;
      startYear: string;
      endYear: string;
      gpa: string;
    }
  ];
  experience: [
    {
      _id: string;
      title: string;
      company: string;
      image: string;
      startYear: string;
      endYear: string;
      duration: string;
    }
  ];
  bio: string;
  follower: number;
  following: number;
  friend: number;
  location: string;
  profileImage: string | null;
  coverImage: string | null;
}

interface ApiResponse {
  data: UserInfo;
}

interface UserContextType {
  userInfo: UserInfo | null;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const { data: session } = useSession();
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);
  const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

  useEffect(() => {
    if (session?.user?.email) {
      const fetchUserInfo = async () => {
        try {
          const res = await fetch(
            `${API_BASE_URL}/api/v1/users/${session?.user?.email}`
          );
          if (!res.ok) throw new Error("Failed to fetch user info");
          const data: ApiResponse = await res.json();
          setUserInfo(data.data);
        } catch (error) {
          console.error("Error fetching user info:", error);
        }
      };

      fetchUserInfo();
    }
  }, [API_BASE_URL, session?.user?.email]);

  return (
    <UserContext.Provider value={{ userInfo }}>{children}</UserContext.Provider>
  );
};

export const useUser = (): UserContextType => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
