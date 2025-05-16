import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import LayoutManager from "./components/LayoutManager";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
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
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <LayoutManager>{children}</LayoutManager>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
