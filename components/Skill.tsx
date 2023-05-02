import React from "react";
import { motion } from "framer-motion";
import { Arimo } from "next/font/google";
import Image from "next/image";

export interface SkillProps {
  src: string;
  directionLeft?: boolean;
  percentage: number;
}

const Skill = ({ src, directionLeft = true, percentage }: SkillProps) => {
  return (
    <div className="text-black group relative cursor-pointer ">
      <motion.img
        initial={{ x: directionLeft ? -200 : 200, opacity: 0 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        src={src}
        className={
          "rounded-full shadow-xl shadow-black border border-gray-500 object-contain w-16 h-16  xl:w-24 xl:h-24 md:w-20 md:h-20 filter group-hover:grayscale transition duration-300 ease-in-out "
        }
      />
      <div className="absolute top-0 opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white w-16 h-16  xl:w-24 xl:h-24 md:w-20 md:h-20 rounded-full z-100">
        <div className="flex items-center justify-center h-full">
          <p className={"text-2xl font-bold text-black opacity-100 shadow-md shadow-black"}>
            {percentage}%
          </p>
        </div>
      </div>
    </div>
  );
};

export default Skill;
