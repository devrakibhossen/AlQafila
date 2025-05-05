"use client";

import { useState } from "react";

const Page = () => {
  const [selectedLanguage, setSelectedLanguage] = useState<string>("en");

  const languages = [
    { code: "en", name: "English", nativeName: "English", icon: "🇺🇸" },
    { code: "bn", name: "Bengali", nativeName: "বাংলা", icon: "🇧🇩" },
    { code: "es", name: "Spanish", nativeName: "Español", icon: "🇪🇸" },
    { code: "fr", name: "French", nativeName: "Français", icon: "🇫🇷" },
  ];

  const handleLanguageChange = (code: string) => {
    setSelectedLanguage(code);
  };

  return (
    <div>
      <div className="max-w-2xl p-6">
        <h2 className="text-2xl font-semibold mb-4">Language Settings</h2>
        <p className="mb-6 text-gray-600 dark:text-gray-300">
          Select your preferred language for using the application.
        </p>

        <div className="space-y-4">
          {languages.map((lang) => (
            <div
              key={lang.code}
              className={`flex items-center justify-between px-4 py-3 border rounded-md cursor-pointer hover:bg-gray-50 dark:hover:bg-zinc-800 ${
                selectedLanguage === lang.code
                  ? "border-blue-500 bg-blue-50 dark:bg-zinc-700"
                  : "border-gray-300 dark:border-zinc-700"
              }`}
              onClick={() => handleLanguageChange(lang.code)}
            >
              <div className="flex items-center gap-3">
                <span className="text-lg">{lang.icon}</span>
                <div>
                  <h3 className="font-medium">{lang.name}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {lang.nativeName}
                  </p>
                </div>
              </div>
              {selectedLanguage === lang.code && (
                <span className="text-blue-500 font-bold">✓</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
