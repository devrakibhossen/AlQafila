"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { User, Lock, ShieldCheck, Bell, Languages, Moon } from "lucide-react";

interface MenuItem {
  name: string;
  href: string;
  icon: React.ReactNode;
}

const menuItems: MenuItem[] = [
  {
    name: "General",
    href: "/settings",
    icon: <User className="w-5 h-5" />,
  },

  {
    name: "Notifications",
    href: "/settings/notifications",
    icon: <Bell className="w-5 h-5" />,
  },
  {
    name: "Languages",
    href: "/settings/languages",
    icon: <Languages className="w-5 h-5" />,
  },
  {
    name: "Dark Mode",
    href: "/settings/darkmode",
    icon: <Moon className="w-5 h-5" />,
  },
  {
    name: "Security",
    href: "/settings/security",
    icon: <Lock className="w-5 h-5" />,
  },
  {
    name: "Privacy",
    href: "/settings/privacy",
    icon: <ShieldCheck className="w-5 h-5" />,
  },
];

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <aside className="fixed top-0 left-0 w-64 min-h-screen bg-white dark:bg-zinc-900 border   p-4 hidden md:block ">
      <h2 className="text-xl font-semibold mb-6">Settings</h2>
      <ul className="space-y-2">
        {menuItems.map((item) => {
          const isActive = pathname === item.href;

          return (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`flex items-center gap-3 px-4 py-2 rounded-md font-medium transition ${
                  isActive
                    ? "bg-[#155D8C] dark:bg-gray-100 dark:text-black text-white "
                    : "text-gray-700 dark:text-white dark:hover:text-black  hover:bg-gray-100"
                }`}
              >
                {item.icon}
                {item.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default Sidebar;
