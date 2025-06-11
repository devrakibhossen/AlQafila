import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",

      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

        const res = await fetch(`${API_BASE_URL}/api/v1/auth/sign-in`, {
          method: "POST",
          body: JSON.stringify(credentials),
          headers: { "Content-Type": "application/json" },
        });

        const result = await res.json();

        if (res.ok && result.success && result.data?.user) {
          const user = result.data.user;

          user.token = result.data.token;

          return user;
        }

        return null;
      },
    }),
  ],
  pages: {
    signIn: "/accounts/sign-in",
  },
});

export { handler as GET, handler as POST };
