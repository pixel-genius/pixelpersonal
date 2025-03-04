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
    <div className="container mx-auto pt-10">
      <div className="flex gap-2  flex-row items-start ">
        <div className="">
          <div className="flex flex-row items-stretch justify-center gap-2">
            <AboutMe />
            <Experience />
          </div>
          <div className="flex flex-row items-stretch justify-center gap-2 pt-2">
            <div className="bg-card p-5 w-4/12 rounded-xl">
              <Badge className="mb-4" variant="secondary">
                What i’m reading
              </Badge>
              <BookSlider />
            </div>
            {/* End of What i’m reading */}
            {/* My Works */}
            <div className="bg-card p-5 h-[300px] overflow-hidden  rounded-xl">
              <div className="flex flex-row justify-between  align-middle ">
                <div>
                  <Badge className="mb-4" variant="secondary">
                    My Works
                  </Badge>
                </div>
                <div>
                  <Button className="text-sm" variant="link" size="sm">
                    Show More
                  </Button>
                </div>
              </div>
              <div>
                <ParallaxScroll images={images} />
              </div>
            </div>
            {/* End of My Works */}
          </div>
          <div className="flex flex-row items-stretch justify-center gap-2 pt-2">
            {/*  What They Say */}
            <div className="bg-card p-5 h-[300px] overflow-hidden w-1/2  rounded-xl">
              <Badge className="mb-8" variant="secondary">
                What They Say
              </Badge>
              <div className="flex items-center justify-center ">
                <CardStack items={CARDS} />
              </div>
            </div>
            {/* End  of  What They Say */}
            <Skills />
          </div>
        </div>
        <div className="w-3/12">
          <SocialIconsGrid />
          <LocationCard />
          <Stack />
          <div className="bg-card rounded-2xl p-4  relative ">
            <Badge className="mb-4" variant="secondary">
              My team
            </Badge>
            <div className="flex flex-row h-[8rem] items-center  justify-center mb-10 w-full">
              <AnimatedTooltip items={people} />
            </div>
          </div>
          {/* My team */}
        </div>
      </div>
    </div>
  );
}
