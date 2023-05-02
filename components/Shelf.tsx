import React from "react";
import { motion } from "framer-motion";
import ShelfCard from "./ShelfCard";

import Link from "next/link";
import Image from "next/image";

type Props = {};

function Shelf({}: Props) {
  return (
    <div
      className="h-screen relative w-full flex flex-col justify-center items-center "
      style={{
        backgroundImage: "url('/bg6.png')",
        backgroundSize: "cover",
        minHeight: "100vh",
        minWidth: "100vw",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute top-16 xl:top-10 md:top-14 titlecard flex flex-col justify-center items-center ">
        <h1 className="ml-5 uppercase md:tracking-[20px] tracking-[10px] text-gray-100 md:text-2xl text:sm md:top-[-50px] ">
          Creations
        </h1>
        <p className="text-sm ">
          These are my few creative works showcasing my artist side.
        </p>
      </div>
      <div className="absolute top-32 w-screen  md:h-full md:ml-10 h-96 flex carousel gap-5">
        <motion.div initial={{x:-200}} whileInView={{x:0}} transition={{duration:1.5}} className="w-[400px] h-max border border-black bg-gray-800 hover:bg-gray-900 rounded-lg p-1">
          <div className="relative w-full h-56">
            <Image
              fill
              src="/sum-it.png"
              alt="book"
              className=" object-cover"
            />
          </div>
          <div className="">
            <h1 className="text-3xl font-extrabold hover:text-[#f7ab0a] mb-3 mt-3">
              The Sum-it
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
              ipsa consectetur sint officia est eligendi? Aperiam nostrum quod
              vitae veritatis, obcaecati assumenda, quia velit, molestias
              commodi libero sed alias voluptatibus!
            </p>
          </div>
        </motion.div>
        <motion.div initial={{y:200}} whileInView={{y:0}} transition={{duration:1.5}} className="w-[400px] h-max border border-black bg-gray-800 hover:bg-gray-900 rounded-lg p-1">
          <div className="relative w-full h-56">
            <Image
              fill
              src="/sam.jpg"
              alt="book"
              className=" object-cover"
            />
          </div>
          <div className="">
            <h1 className="text-3xl font-extrabold hover:text-[#f7ab0a] mb-3 mt-3">
              Samyagana, <span className="text-lg">a Kannada novel</span> 
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
              ipsa consectetur sint officia est eligendi? Aperiam nostrum quod
              vitae veritatis, obcaecati assumenda, quia velit, molestias
              commodi libero sed alias voluptatibus!
            </p>
          </div>
        </motion.div>
        <motion.div initial={{x:200}} whileInView={{x:0}} transition={{duration:1.5}} className="w-[400px] h-max border border-black bg-gray-800 hover:bg-gray-900 rounded-lg p-1">
          <div className="relative w-full h-56">
            <Image
              fill
              src="/ananth.jpg"
              alt="book"
              className=" object-cover"
            />
          </div>
          <div className="">
            <h1 className="text-3xl font-extrabold hover:text-[#f7ab0a] mb-3 mt-3">
              Flim-making
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
              ipsa consectetur sint officia est eligendi? Aperiam nostrum quod
              vitae veritatis, obcaecati assumenda, quia velit, molestias
              commodi libero sed alias voluptatibus!
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Shelf;
