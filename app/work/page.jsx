"use client";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@radix-ui/react-tooltip";
import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const Projects = [
  {
    num: "01",
    category: "Machine Learning",
    title: "project-1",
    Description:
      "Developed web application using brain MRI to predict brain tumors, improving diagnosis by 20 percent",
    stack: [
      { name: "HTML5" },
      { name: "CSS3" },
      { name: "Python" },
      { name: "JupiterLab" },
    ],
    image: "/assets/work/projectm.png",
    live: "",
    github: "https://github.com/ravin73/Brain-Tumor-Classification-2",
  },
  {
    num: "02",
    category: "Full Stack",
    title: "project-2",
    Description:
      "Developed an AI-powered PDF note-taker web application with Next.js, enhancing productivity.",
    stack: [
      { name: "TailwindCss" },
      { name: "NextJs" },
      { name: "Langchain" },
      { name: "ConvexDB" },
      { name: "ShadCN" },
    ],
    image: "/assets/work/projectf.png",
    live: "https://ai-pdf-note-taker-psi.vercel.app",
    github: "https://github.com/ravin73/ai-pdf-note-taker",
  },
  {
    num: "03",
    category: "Full Stack",
    title: "project-3",
    Description:
      "Built a responsive patreon-clone where you can contribute to the contributor by the razorpay.",
    stack: [
      { name: "ReactJS" },
      { name: "NextJs" },
      { name: "TailwindCSS" },
      { name: "MongoDB" },
    ],
    image: "/assets/work/projectp.png",
    live: "https://patreon-clonenew.vercel.app/",
    github: "https://github.com/ravin73/patreon-clone",
  },
];
const Work = () => {
  const [project, setProject] = useState(Projects[0]);
  const handleSlideChange=(swiper)=>{
    // get current slide index
    const currentIndex=swiper.activeIndex;
    //update project state based on current slide index
    setProject(Projects[currentIndex])
  }

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, 
        transition:{delay:2.4, 
        duration:0.4 ,
        ease:'easeIn'
      } }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            {/* outline num */}
            <div className="flex flex-col gap-[30px] h-[50%]">
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              {/* project category */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                {project.category} project
              </h2>
              {/* Project Description */}
              <p className="text-white/60">{project.Description}</p>
              {/* stack */}
              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent">
                      {item.name}
                      {/* remove the last comma */}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              {/* border */}
              <div className="border border-white/20"></div>
              {/* buttons */}
              <div className="flex items-center gap-4 ">
                {/* Live Project Button */}
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live Project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                {/* Github Button */}
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%] ">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {Projects.map((project, index) => {
                return <SwiperSlide key={index} className="w-full">
                  <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20 ">
                    {/* overlay */}
                    <div className="absolute top-0 bottom-0 w-full  h-full  bg-black/10 z-10"></div>
                    {/*Image*/}
                    <div className="relative w-full h-full">
                      <Image src={project.image}
                      fill
                      className="object-cover"
                      alt=""/>
                    </div>
                  </div>
                </SwiperSlide>;
              })}
              {/* buttons */}
              <WorkSliderBtns containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none" 
              btnStyles="bg-accent hover:bg-accent-hover text-primary 
              text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"/>
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
