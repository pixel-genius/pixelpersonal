"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";

import { AnimatedTooltip } from "@/components/animated-tooltip";
import BookSlider from "@/components/book-slider";
import { ParallaxScroll } from "@/components/parallax-scroll";

import AboutMe from "@/components/aboutme";
import Experience from "@/components/my-experiance";
import { CARDS, images, people } from "@/data/globalData";

import { CardStack } from "@/components/card-stack";
import LocationCard from "@/components/map";
import Skills from "@/components/Skills";
import SocialIconsGrid from "@/components/SocialIconsGrid";
import Stack from "@/components/stacks";

export default function Home() {
  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);
  return (
    <div className="container mx-auto pt-10 px-4">
      <div className="flex flex-wrap gap-4 items-start">
        {/* Left Column */}
        <div className="flex flex-col w-full  gap-4">
          {/* About Me and Experience */}
          <div className="flex flex-col md:flex-row gap-2 bg-red-600">
            <AboutMe />
            <Experience />
          </div>

          {/* What I'm Reading & My Works */}
          <div className="flex flex-wrap md:flex-nowrap gap-2 pt-2 bg-amber-700">
            {/* What I'm Reading */}
            <div className="bg-card p-5 w-full md:w-1/3 rounded-xl">
              <Badge className="mb-4" variant="secondary">
                What I’m Reading
              </Badge>
              <BookSlider />
            </div>
            {/* My Works */}
            <div className="bg-card p-5 w-full md:w-2/3 h-[300px] overflow-hidden rounded-xl">
              <div className="flex justify-between items-center">
                <Badge className="mb-4" variant="secondary">
                  My Works
                </Badge>
                <Button className="text-sm" variant="link" size="sm">
                  Show More
                </Button>
              </div>
              <ParallaxScroll images={images} />
            </div>
          </div>

          {/* What They Say & Skills */}
          <div className="flex  gap-2 pt-2 bg-pink-400 ">
            {/* What They Say */}
            <div className="bg-card p-5 h-[300px] w-full md:w-1/2 overflow-hidden rounded-xl">
              <Badge className="mb-8" variant="secondary">
                What They Say
              </Badge>
              <div className="flex items-center justify-center">
                <CardStack items={CARDS} />
              </div>
            </div>
            {/* Skills */}
            <div className="w-full md:w-1/2">
              <Skills />
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="w-full lg:w-4/12 bg-sky-300  gap-4">
          <SocialIconsGrid />
          <LocationCard />
          <Stack />
          <div className="bg-card rounded-2xl p-4">
            <Badge className="mb-4" variant="secondary">
              My Team
            </Badge>
            <div className="flex h-[8rem] items-center justify-center">
              <AnimatedTooltip items={people} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
