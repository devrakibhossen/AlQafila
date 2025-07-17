import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import NextAuthProvider from "@/Providers/NextAuthProvider";
import { UserProvider } from "@/context/UserContext";
import StoreProvider from "@/store/StoreProvider";
import NextTopLoader from "nextjs-toploader";
// import { Suspense, lazy } from "react";
// import Image from "next/image";
import LayoutManager from "./components/LayoutManager";
// const LayoutManager = lazy(() => import("./components/LayoutManager"));
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "AlQafila ",
  description:
    "AlQafila is a modern and professional social media web platform designed to connect individuals and communities. Share posts, engage in discussions, and build meaningful connections in a user-friendly and secure environment tailored for seamless interaction.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} antialiased bg-gray-200 dark:bg-zinc-950`}
        cz-shortcut-listen="true"
      >
        <NextTopLoader color="#10b981" height={3} showSpinner={false} />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {" "}
          <StoreProvider>
            <NextAuthProvider>
              <UserProvider>
                {/* <Suspense
                  fallback={
                    <div className="flex flex-col gap-5 justify-center items-center h-screen">
                      <Image
                        className="w-40 h-[51px] animate-fade-in"
                        src="/alQafila.png"
                        alt="logo"
                        width={200}
                        height={150}
                        priority
                      />
                    </div>
                  }
                > */}
                  <LayoutManager>{children}</LayoutManager>
                {/* </Suspense> */}
              </UserProvider>
            </NextAuthProvider>
          </StoreProvider>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
