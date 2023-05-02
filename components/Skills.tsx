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
    },
    {
      src: "/css.png",
      percentage: 80,
    },
    {
      src: "/js.png",
      percentage: 70,
    },
    {
      src: "/react.png",
      percentage: 60,
    },
    {
      src: "/expressJS.png",
      percentage: 50,
    },
    {
      src: "/moongodb.png",
      percentage: 50,
    },
    {
      src: "/git.png",
      percentage: 40,
    },
    {
      src: "/tailwindcss.png",
      percentage: 40,
    },
    {
      src: "/sql.png",
      percentage: 40,
    },
    {
      src: "/python.png",
      percentage: 40,
    },
    {
      src: "/next.png",
      percentage: 40,
    },
    {
      src: "/bootstrap.png",
      percentage: 40,
    },
    {
      src: "/express.png",
      percentage: 40,
    },
    {
      src: "/adobe.png",
      percentage: 40,
    },
  ];

  return (
    <div
      style={{
        backgroundImage: "url('/bg3.png')",
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
        className="flex flex-col relative border border-black text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto  items-center"
      >
        <h1 className=" absolute top-10 uppercase tracking-[10px] text-gray-900 text-2xl">
          skills
        </h1>
        <h3 className="text-gray-500 absolute top-20 uppercase tracking-[1px] text-sm">
          Hover over to know current profieciency.
        </h3>

        <div className="absolute top-28 grid md:grid-cols-4 grid-cols-3 gap-4 ">
          {skills.map((skill, index) => (
            <Skill key={index} src={skill.src} percentage={skill.percentage} />
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export default Skills;
