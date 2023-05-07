import Skill, { SkillProps } from "./Skill";
import React from "react";
import { motion } from "framer-motion";
import { Arimo } from "next/font/google";
import Image from "next/image";

function Skills({}: SkillProps) {
  const skills: SkillProps[] = [
    {
      src: "/html.png",
      percentage: 100,
      skillName: "HTML"
    },
    {
      src: "/css.png",
      percentage: 80,
      skillName: "CSS"
    },
    {
      src: "/js.png",
      percentage: 70,
      skillName:"js"
    },
    {
      src: "/react.png",
      percentage: 60,
      skillName:"REACTJS"
    },
    {
      src: "/flutter.png",
      percentage: 50,
      skillName:"FLUTTER"
    },
    {
      src: "/moongodb.png",
      percentage: 50,
      skillName:"MOONGODB"
    },
    {
      src: "/git.png",
      percentage: 40,
      skillName:"GIT"
    },
    {
      src: "/tailwindcss.png",
      percentage: 40,
      skillName:"TAILWINDCSS"
    },
    {
      src: "/sql.png",
      percentage: 40,
      skillName:"SQL"
    },
    {
      src: "/python.png",
      percentage: 40,
      skillName:"PYTHON"
    },
    {
      src: "/next.png",
      percentage: 40,
      skillName:"NEXT"
    },
    {
      src: "/bootstrap.png",
      percentage: 40,
      skillName:"BOOTSTRAP"
    },
    {
      src: "/express.png",
      percentage: 40,
      skillName:"EXPRESS"
    },
    {
      src: "/adobe.png",
      percentage: 40,
      skillName:"adobe PP"
    },
  ];

  return (
    <div
      style={{
        backgroundImage: "url('/bg6.png')",
        backgroundSize: "cover",
        minHeight: "100vh",
        minWidth: "100vw",
        backgroundRepeat: "no-repeat",
      }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="flex flex-col relative border border-gray-300  text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto  items-center"
      >
        <h1 className=" absolute top-10 uppercase tracking-[10px] text-gray-100 text-2xl">
          skills
        </h1>
        <h3 className="text-gray-300 absolute top-20 uppercase tracking-[1px] text-sm">
          Hover over to know current profieciency.
        </h3>

        <div className="absolute top-40 grid md:grid-cols-4 grid-cols-3 gap-4 ">
          {skills.map((skill, index) => (
            <Skill key={index} src={skill.src} percentage={skill.percentage} skillName={skill.skillName}/>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export default Skills;
