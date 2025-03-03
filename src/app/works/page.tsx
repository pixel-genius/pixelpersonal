"use client";
import {
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandBehance,
  IconMail,
  IconBrandGithub,
  IconBrandDribbble,
} from "@tabler/icons-react";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useEffect, useState } from "react";

import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";


import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import BookSlider from "@/components/book-slider";
import { AnimatedTooltip } from "@/components/animated-tooltip";
import { ParallaxScroll } from "@/components/parallax-scroll";
import { CardStack } from "@/components/card-stack";
import { motion } from "framer-motion";

export default function Works() {
  

  return (
    <div className="container mx-auto pt-10"></div>
   
  );
}
