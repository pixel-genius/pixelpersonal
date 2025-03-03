"use client";
import {
  IconBrandBehance,
  IconBrandDribbble,
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconMail,
} from "@tabler/icons-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";

import { AnimatedTooltip } from "@/components/animated-tooltip";
import BookSlider from "@/components/book-slider";
import { CardStack } from "@/components/card-stack";
import { ParallaxScroll } from "@/components/parallax-scroll";
import { motion } from "framer-motion";
import "swiper/css";

export default function Home() {
  const experiences = [
    {
      title: "Product Designer, Graphic Designer",
      company: "ArianaLabs",
      year: "2023 - Present",
    },
    {
      title: "Graphic designer, UIUX designer",
      company: "Persiamehr Company",
      year: "2021",
    },
    {
      title: "UIUX designer and Front End",
      company: "Hafttaraneh",
      year: "2020",
    },
    {
      title: "FrontEnd, UIUX designer",
      company: "Artiman Gasht",
      year: "2019",
    },
    { title: "FrontEnd, UIUX designer", company: "Batis Gasht", year: "2018" },
  ];

  const tags = [
    "Jira",
    "Survey Research",
    "Sketching",
    "UX Research",
    "Agile",
    "Design Thinking",
    "Leadership",
    "Frontend",
    "3D Modeling",
    "Time Management",
    "Illustration",
    "Rive",
    "Animation",
    "Scrum",
    "Iconography",
    "Svg Animation",
    "Problem Solving",
    "A/B Test",
    "PhotoShop",
    "Design System",
    "User Experience Writing",
    "Adaptability",
    "svgator",
    "Gamification",
    "Usability Test",
    "Teamwork",
    "Prototyping",
  ];
  const icons = [
    { icon: IconBrandLinkedin, link: "#" },
    { icon: IconBrandInstagram, link: "#" },
    { icon: IconBrandBehance, link: "#" },
    { icon: IconMail, link: "#" },
    { icon: IconBrandGithub, link: "#" },
    { icon: IconBrandDribbble, link: "#" },
  ];

  const tools = [
    { name: "Blender", img: "/blender.svg" },
    { name: "Illustrator", img: "/illustrator.svg" },
    { name: "Spline", img: "/spline.svg" },
    { name: "Figma", img: "/figma.svg" },
  ];

  const CARDS = [
    {
      id: 0,
      name: "Manu Arora",
      designation: "Senior Software Engineer",
      content: (
        <p>
          These cards are amazing, I want to use them in my project. Framer
          motion is a godsend ngl tbh fam 🙏
        </p>
      ),
    },
    {
      id: 1,
      name: "Elon Musk",
      designation: "Senior Shitposter",
      content: (
        <p>
          I dont like this Twitter thing, deleting it right away because yolo.
          Instead, I would like to call it X.com so that it can easily be
          confused with adult sites.
        </p>
      ),
    },
    {
      id: 2,
      name: "Tyler Durden",
      designation: "Manager Project Mayhem",
      content: (
        <p>
          The first rule of Fight Clubis that you do not talk about fight club.
          The second rule of Fight club is that you DO NOT TALK about fight
          club.
        </p>
      ),
    },
  ];

  const people = [
    {
      id: 1,
      name: "ali kashef",
      designation: "Software Engineer",
      image: "/p1.png",
    },
    {
      id: 2,
      name: "Mohammad Ali",
      designation: "Software Engineer",
      image: "/p1.png",
    },
    {
      id: 3,
      name: "Reza Ali",
      designation: "Software Engineer",
      image: "/p1.png",
    },
    {
      id: 4,
      name: "karim ali",
      designation: "Software Engineer",
      image: "/p1.png",
    },
    {
      id: 5,
      name: "Mamad Ali",
      designation: "Software Engineer",
      image: "/p1.png",
    },
    {
      id: 6,
      name: "Mamad moradi",
      designation: "Software Engineer",
      image: "/p1.png",
    },
  ];

  const images = [
    "/shot/1.jpg",
    "/shot/2.jpg",
    "/shot/3.jpg",
    "/shot/4.jpg",
    "/shot/5.jpg",
    "/shot/6.jpg",
    "/shot/7.jpg",
    "/shot/8.jpg",
    "/shot/9.jpg",
    "/shot/10.jpg",
    "/shot/12.gif",
  ];

  const [hoveredIndex, setHoveredIndex] = useState(null);
  const animation = { duration: 19000, easing: (t: number) => t };

  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    renderMode: "performance",
    drag: false,
    breakpoints: {
      "(min-width: 400px)": {
        slides: { perView: 2, spacing: 5 },
      },
      "(min-width: 1000px)": {
        slides: { perView: 3, spacing: 10 },
      },
    },
    slides: { perView: 1 },
    created(s) {
      s.moveToIdx(5, true, animation);
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
  });

  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  return (
    <div className="container mx-auto pt-10">
      <div className="flex gap-2 flex-row items-start justify-center">
        <div className="w-12/12 ">
          <div className="flex flex-row items-stretch justify-center gap-2">
            <div className="bg-card p-5 w-2/2 rounded-xl">
              <div className="mb-4 flex  gap-3">
                <Badge variant="secondary">About Me</Badge>
              </div>
              <div className="flex flex-col pb-6  ">
                <div className="text-4xl font-bold justify-self-center  text-foreground flex  ">
                  Hi, I'm
                  <img
                    src="/ali.png"
                    alt="Profile Picture"
                    className="w-17 rounded-full  object-cover"
                  />
                  <span className="text-white">Ali Ebrahimi Kashef!</span>
                </div>
                <p className="text-4xl text-gray-400 ">
                  I'm a
                  <span className="text-white px-4 font-semibold">
                    Product Designer
                  </span>
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

              <div className="flex  flex-row  gap-4 w-3/3 mt-8">
                <div>
                  <Button variant="secondary" size="lg">
                    Book a call
                  </Button>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">
                    Feel free to explore my portfolio and reach out. I'd love to
                    connect!
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-card p-5 w-2/3 rounded-xl">
              <Badge className="mb-4" variant="secondary">
                My Experiance
              </Badge>
              <div className="relative border-l border-gray-600 pl-6 ">
                {experiences.map((exp, index) => (
                  <div key={index} className="mb-2 flex items-start relative">
                    <div className="absolute -left-[30px] top-1/2 transform -translate-y-1/2 w-3 h-3 bg-gray-500 rounded-full"></div>
                    <div>
                      <h3 className="font-semibold text-white">{exp.title}</h3>
                      <p className="text-gray-400 ">
                        {exp.company}{" "}
                        <span className="text-gray-500">{exp.year}</span>
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="flex flex-row items-stretch justify-center gap-2 pt-2">
            <div className="bg-card p-5 w-4/12 rounded-xl">
              <Badge className="mb-4" variant="secondary">
                What i’m reading
              </Badge>
              <BookSlider />
            </div>
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
          </div>

          <div className="flex flex-row items-stretch justify-center gap-2 pt-2">
            <div className="bg-card p-5 h-[300px] overflow-hidden w-1/2  rounded-xl">
              <Badge className="mb-8" variant="secondary">
                What They Say
              </Badge>

              <div className="flex items-center justify-center ">
                <CardStack items={CARDS} />
              </div>
            </div>
            <div className="bg-card p-5 w-full rounded-xl">
              <Badge className="mb-4" variant="secondary">
                Skills
              </Badge>
              <div>
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag, index) => (
                    <motion.div
                      key={index}
                      className="px-3 py-1 bg-gray-800 text-white text-[10px] rounded-lg cursor-pointer relative"
                      initial={{ scale: 1 }}
                      animate={{
                        scale: hoveredIndex === index ? 1.2 : 1,
                        zIndex: hoveredIndex === index ? 10 : 1,
                      }}
                      transition={{ type: "spring", stiffness: 300 }}
                      // onMouseEnter={() => setHoveredIndex(index)}
                      // onMouseLeave={() => setHoveredIndex(null)}
                    >
                      #{tag}
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-3/12">
          <div className="grid grid-cols-3 gap-4  pb-2">
            {icons.map(({ icon: Icon, link }, index) => (
              <a
                href={link}
                key={index}
                className="bg-card p-4 rounded-2xl flex items-center justify-center hover:bg-neutral-800 transition-all duration-300"
              >
                <Icon size={60} stroke={2} className="text-white" />
              </a>
            ))}
          </div>
          <div className="bg-card rounded-2xl p-4 w-80 relative overflow-hidden mb-2">
            <Badge className="mb-4" variant="secondary">
              Map
            </Badge>
            <div
              className="w-full h-40 bg-cover bg-center rounded-lg mb-4"
              style={{ backgroundImage: "url(/map.png)" }}
            ></div>
            <div className="text-center">
              <h3 className="text-2xl text-white tracking-widest font-bold">
                TEHRANPARS
              </h3>
              <p className="text-neutral-400 text-sm mt-1">TEHRAN</p>
              <p className="text-neutral-600 text-xs mt-2">
                35°43'43.6"N 51°32'26.6"E
              </p>
            </div>
          </div>

          <div className="bg-card rounded-2xl p-4 mb-2  relative overflow-hidden">
            <Badge className="mb-4" variant="secondary">
              Stack I Used
            </Badge>
            <div ref={sliderRef} className="keen-slider">
              {tools.map((tool, index) => (
                <div
                  key={index}
                  className="keen-slider__slide bg-neutral-800 rounded-xl p-4 w-24 flex flex-col items-center gap-2"
                >
                  <img src={tool.img} alt={tool.name} className="w-12 h-12" />
                  <p className="text-neutral-400 text-sm">{tool.name}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-card rounded-2xl p-4  relative ">
            <Badge className="mb-4" variant="secondary">
              My team
            </Badge>
            <div className="flex flex-row items-center  justify-center mb-10 w-full">
              <AnimatedTooltip items={people} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
