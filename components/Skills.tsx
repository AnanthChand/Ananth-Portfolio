import React from "react";
import { motion } from "framer-motion";
import Skill from "./Skill";

type Props = {};

function Skills({}: Props) {
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
        className="flex flex-col relative text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center"
      >
        <h1 className=" absolute top-20 uppercase tracking-[10px] text-gray-500 text-2xl">
          skills
        </h1>
        <h3 className="text-gray-500 absolute top-28 uppercase tracking-[1px] text-sm">
          Hover over to know current profieciency.
        </h3>

        <div className="absolute top-36 grid md:grid-cols-6 grid-cols-4 gap-4 ">
          <Skill />
          <Skill />
          <Skill />
          <Skill />
          <Skill />
          <Skill />
          <Skill />
          <Skill />
          <Skill />
          <Skill />
          <Skill />
          <Skill />
          <Skill />
          <Skill />
          <Skill />
        </div>
      </motion.div>
    </div>
  );
}

export default Skills;
