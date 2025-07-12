import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";

declare module "next-auth" {
  interface Session {
    accessToken?: string;
  }
  interface User {
    token?: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    accessToken?: string;
  }
}
const googleClientId = process.env.GOOGLE_CLIENT_ID;
const googleClientSecret = process.env.GOOGLE_CLIENT_SECRET;
const githubClientId = process.env.GITHUB_ID;
const githubClientSecret = process.env.GITHUB_SECRET;

if (
  !googleClientId ||
  !googleClientSecret ||
  !githubClientId ||
  !githubClientSecret
) {
  throw new Error("Missing one or more OAuth environment variables.");
}
const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",

      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        console.log("Received credentials:", credentials);
        const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

        const res = await fetch(`${API_BASE_URL}/api/v1/auth/sign-in`, {
          method: "POST",
          body: JSON.stringify(credentials),
          headers: { "Content-Type": "application/json" },
        });

        const result = await res.json();

        if (res.ok && result.success && result.data?.user) {
          const user = result.data.user;

          return {
            ...user,
            token: result.data.token,
          };
        }

        return null;
      },
    }),
    GoogleProvider({
      clientId: googleClientId,
      clientSecret: googleClientSecret,
    }),
    GitHubProvider({
      clientId: githubClientId,
      clientSecret: githubClientSecret,
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user?.token) {
        token.accessToken = user.token;
      }
      return token;
    },
    async session({ session, token }) {
      session.accessToken = token.accessToken;
      return session;
    },
    async signIn({ user, account }) {
      if (account) {
        const { email: user_email, image, name } = user;
        if (!user_email) {
          console.error("Email is missing from social login user");
          return false;
        }
        const baseUsername = user_email.split("@")[0];
        const randomDigits = Math.floor(1000 + Math.random() * 9000);
        const username = `${baseUsername}${randomDigits}`;
        const userData = {
          name: name,
          username: username,
          email: user_email,
          profileImage: image,
        };
        // console.log(userData);
        try {
          const res = await fetch(
            `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/auth/socialSign-in`,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(userData),
            }
          );
          const result = await res.json();
          // console.log("API response:", result);

          if (!res.ok || !result.success) {
            console.error(
              "User registration failed:",
              result.message || result
            );
            return false;
          }
        } catch (error) {
          console.log(error);
        }
      }
      return true;
    },
  },

  cookies: {
    sessionToken: {
      name: "token",
      options: {
        httpOnly: true,
        sameSite: "lax",
        path: "/",
        secure: process.env.NODE_ENV === "production",
      },
    },
  },
  pages: {
    signIn: "/accounts/sign-in",
  },
});

export { handler as GET, handler as POST };
