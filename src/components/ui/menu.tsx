"use client";

import { FloatingDock } from "@/components/floating-dock";
import {
  IconBrandGithub,
  IconBrandX,
  IconBrush,
  IconExchange,
  IconHome,
  IconNewSection,
  IconTerminal2,
} from "@tabler/icons-react";
import DarkModeToggle from "../DarkModeToggle";

export function Menu() {
  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/",
    },
    {
      title: "Works",
      icon: (
        <IconBrush className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/works",
    },
    
  ];

  return (
    <div className="flex items-center justify-center fixed bottom-2 w-full z-50">
      <FloatingDock
        mobileClassName="translate-y-20" // only for demo, remove for production
        items={[
          ...links,
        ]}
      />
    </div>
  );
}