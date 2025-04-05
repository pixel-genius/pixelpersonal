"use client";

import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CardContainer } from "./3d-card";
import CalendlyWidget from "./CalendlyWidget";
import { WordRotate } from "./magicui/word-rotate";

const AboutMe: React.FC = () => {
  return (
    <CardContainer className="inter-var">
        <div className="bg-card p-5 rounded-xl">
      <div className="mb-4 flex gap-3">
        <Badge variant="secondary">About Me</Badge>
      </div>
      <div className="flex flex-col pb-6">
        <div className="md:text-4xl text-2xl  font-bold text-foreground gap-2 flex items-center ">
          
          Hi, I'm
          <Image
            src="/ali.png"
            alt="Profile Picture"
            width={68}
            height={68}
            className="rounded-full object-cover hidden md:block"
          />
          <span className="text-foreground md:text-4xl text-2xl ">Ali Ebrahimi Kashef!</span>
        </div>
        <p className="md:text-4xl text-2xl  text-gray-400">
          I'm a
         <span>
          <WordRotate className="text-foreground px-4 font-semibold md:text-4xl text-2xl " words={[" Product Designer", "Gaphic Designer", "UIUX Designer","intraction Designer"]} />
         </span>
          at
        </p>
        <div className="flex justify-start items-center my-auto flex-row mt-2    gap-2">
          <p className="text-primary  font-bold md:text-4xl text-2xl ">Arianalabs</p>
          <div className="flex mt-1   items-center space-x-2 border border-gray-400 rounded-full px-3 py-1 text-foreground text-sm font-medium">
            <span className="relative flex md:h-3 md:w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            <span className=" md:text-base text-[10px]">Open To Work</span>
          </div>
        </div>
      </div>
      <div className="flex md:flex-row flex-col gap-4 w-full mt-10">
        <div className="bg-muted rounded-xl p-4 text-foreground flex hover:bg-primary hover:text-primary-foreground">
        <CalendlyWidget />
        </div>
        

        <p className="text-foreground w-80 text-sm">
          Feel free to explore my portfolio and reach out. I'd love to connect!
        </p>
      </div>
    </div>

    </CardContainer>
  
  );
};

export default AboutMe;

