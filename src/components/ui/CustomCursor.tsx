"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const CustomCursor = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, { damping: 20, stiffness: 150 });
  const smoothY = useSpring(mouseY, { damping: 20, stiffness: 150 });

  const [isClicked, setIsClicked] = useState(false);
  const [isMoving, setIsMoving] = useState(false);

  // حرکت موس
  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

      setIsMoving(true);
      clearTimeout((window as any).cursorTimeout);
      (window as any).cursorTimeout = setTimeout(() => setIsMoving(false), 1000);
    };

    const handleClick = () => {
      setIsClicked(true);
      setTimeout(() => setIsClicked(false), 150);
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mousedown", handleClick);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mousedown", handleClick);
    };
  }, [mouseX, mouseY]);

  return (
    <>
      {/* Outer ring */}
      <motion.div
        className={`pointer-events-none fixed top-0 left-0 z-[9999] rounded-full border transition-all duration-200 ease-out border-zinc-950 dark:border-neutral-200 ${
          isClicked ? "scale-125 opacity-70" : "scale-100 opacity-40"
        } transition-all duration-200 ease-out`}
        style={{
          width: 40,
          height: 40,
          translateX: smoothX,
          translateY: smoothY,
          x: "-50%",
          y: "-50%",
        }}
      />

      {/* Inner dot */}
      <motion.div
        className={`pointer-events-none fixed top-0 left-0 z-[9999] rounded-full bg-foreground transition-opacity duration-300 ${
          isMoving ? "opacity-100" : "opacity-30"
        }`}
        style={{
          width: 6,
          height: 6,
          translateX: smoothX,
          translateY: smoothY,
          x: "-50%",
          y: "-50%",
        }}
      />
    </>
  );
};

export default CustomCursor;
