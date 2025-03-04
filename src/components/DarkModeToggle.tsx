import React, { useEffect, useState } from "react";

import { MoonIcon, SunIcon } from "lucide-react";

const DarkModeToggle: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Check system's preferred color scheme
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  const toggleMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <button
      onClick={toggleMode}
      className="flex items-center justify-center p-2 rounded-full   transition-colors"
    >
      {isDarkMode ? (
        <SunIcon size={24} className="text-white" />
      ) : (
        <MoonIcon size={24} className="text-white" />
      )}
    </button>
  );
};

export default DarkModeToggle;
