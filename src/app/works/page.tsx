"use client";

import DarkModeToggle from "@/components/DarkModeToggle";
import "keen-slider/keen-slider.min.css";

import "swiper/css";

const Works = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-black text-black dark:text-white">
      <h1 className="text-2xl font-bold mb-4">Dark Mode Toggle</h1>
      <DarkModeToggle />
    </div>
  );
};

export default Works;
