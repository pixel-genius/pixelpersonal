"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { MoonIcon, SunIcon } from "lucide-react";

function Switch({ isOn, onClick }: { isOn: boolean; onClick: () => void }) {
  return (
    <motion.div
      className={`w-30 h-15 flex items-center p-1 rounded-full cursor-pointer ${
        isOn ? "bg-neutral-800" : "bg-neutral-300"
      }`}
      onClick={onClick}
    >
      <motion.div
        className={`w-12 h-12 rounded-full shadow-md flex items-center justify-center ${
          isOn ? "bg-yellow-400" : "bg-white"
        }`}
        animate={{ x: isOn ? 60 : 0 }}
        transition={{ type: "spring", stiffness: 600, damping: 30 }}
      >
        {isOn ? (
          <SunIcon size={24} className="text-neutral-800" />
        ) : (
          <MoonIcon size={24} className="text-neutral-500" />
        )}
      </motion.div>
    </motion.div>
  );
}

export default function DarkModeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(false);


  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else if (savedTheme === "light") {
      setIsDarkMode(false);
      document.documentElement.classList.remove("dark");
    } else {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      setIsDarkMode(prefersDark);
      document.documentElement.classList.toggle("dark", prefersDark);
    }
  }, []);

  const toggleMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    localStorage.setItem("theme", newMode ? "dark" : "light");
    document.documentElement.classList.toggle("dark", newMode);
  };

  return (
    <div className="flex items-center gap-2">
      <Switch isOn={isDarkMode} onClick={toggleMode} />
    </div>
  );
}
