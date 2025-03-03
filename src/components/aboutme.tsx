"use client";

import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const AboutMe: React.FC = () => {
  return (
    <div className="bg-card p-5 w-full rounded-xl">
      <div className="mb-4 flex gap-3">
        <Badge variant="secondary">About Me</Badge>
      </div>
      <div className="flex flex-col pb-6">
        <div className="text-4xl font-bold text-foreground flex items-center gap-3">
          Hi, I'm
          <Image
            src="/ali.png"
            alt="Profile Picture"
            width={68}
            height={68}
            className="rounded-full object-cover"
          />
          <span className="text-white">Ali Ebrahimi Kashef!</span>
        </div>
        <p className="text-4xl text-gray-400">
          I'm a
          <span className="text-white px-4 font-semibold">Product Designer</span>
          at
        </p>
        <div className="flex flex-row items-center pt-4 gap-2">
          <p className="text-blue-500 text-4xl font-bold">Arianalabs</p>
          <div className="flex items-center space-x-2 border border-gray-400 rounded-full px-3 py-1 text-foreground text-sm font-medium">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            <span>Open To Work</span>
          </div>
        </div>
      </div>
      <div className="flex flex-row gap-4 w-full mt-8">
        <Button variant="secondary" size="lg">Book a call</Button>
        <p className="text-gray-400 text-sm">
          Feel free to explore my portfolio and reach out. I'd love to connect!
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
