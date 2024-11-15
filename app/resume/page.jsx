"use client";
import { Description } from "@radix-ui/react-dialog";
import {
  FaHtml5,
  FaCss3,
  FaJava,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
} from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

// about data
const about = {
  title: "About me",
  Description:
    "Specialized in delivering scalable, efficient, and user-friendly applications, we focus on innovation.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Ravin Yadav",
    },
    {
      fieldName: "Phone Number",
      fieldValue: "+91-7983226696",
    },
    {
      fieldName: "Email",
      fieldValue: "ravin.yadav@gmail.com",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Indian",
    },
    {
      fieldName: "Languages",
      fieldValue: "English && Hindi",
    },
  ],
};
// experience data
const experience = {
  icon: "",
  title: "My Experience",
  description:
    "I have been working as a software engineer in the tech industry for over 5 years. I have developed various applications and have gained experience in various technologies.",
  items: [
    {
      company: "Raj Corporation Limited",
      Position: "Software Developer",
      duration: "2024 -present",
    },
  ],
};
const education = {
  icon: "",
  title: "Education",
  description:
    "I have completed my Bachelor's degree in Computer Science from  Pranveer Singh Institute of Technology, Kanpur.",
  items: [
    {
      institution: "Pranveer Singh Institute of Technology, Kanpur",
      degree: "Bachelor of Computer Science",
      duration: "2020 - 2024",
    },
    {
      institution: "Suditi Global Academy",
      degree: "Intermediate",
      duration: "2018 - 2019",
    },
    {
      institution: "Lord Krishna Educational Junior High School",
      degree: "High School",
      duration: "2016 - 2017",
    },
  ],
};
const skills = {
  title: "My skills",
  description:
    "Driven by a passion for creating impactful solutions, we harness the power of AI, data, and user-centered design to transform ideas into digital reality",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "HTML 5",
    },
    {
      icon: <FaCss3 />,
      name: "CSS 3",
    },
    {
      icon: <FaJs />,
      name: "JavaScript",
    },
    {
      icon: <FaReact />,
      name: "react.js",
    },
    {
      icon: <SiNextdotjs />,
      name: "next.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind CSS",
    },
    {
      icon: <FaNodeJs />,
      name: "node.js",
    },
    {
      icon: <FaFigma />,
      name: "Figma",
    },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 2.4,
          duration: 0.4,
          ease: "easeIn",
        },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="educations">Educations</TabsTrigger>
            <TabsTrigger  value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about me">About me</TabsTrigger>
          </TabsList>
          {/*content*/}
          <div className="min-h-[70vh] w-full">
            {/* Experience */}
            <TabsContent value="experience" className='w-full'>
              Experience
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
