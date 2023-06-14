import React from "react";
import { motion } from "framer-motion";
import { Arimo } from "next/font/google";
import Image from "next/image";
import { Inter } from "next/font/google";
import { fadeIn, staggerContainer } from "../utils/motion";

const inter = Inter({ weight: ["600"], subsets: ["latin"] });

const arimo = Arimo({ weight: ["400"], subsets: ["cyrillic"] });

type Props = {};

function About({}: Props) {
  return (
    <div className={inter.className}>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="bg-contain bg-center"
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
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          className=" h-screen flex flex-col relative md:top-24  text-center md:text-left md:flex-row px-10 max-w-7xl justify-around mx-auto items-center"
        >
          <h3 className=" absolute top-10  uppercase md:tracking-[20px] tracking-wide  text-gray-500 md:text-2xl text:sm md:top-[-50px]">
            About
          </h3>
          <motion.div
            initial={{ opacity: 0, x: -200 }}
            whileInView={{ opacity: 1, x: 1 }}
            transition={{ duration: 1.2 }}
            className="relative flex h-20 w-20 object-cover -mb-32  rounded-full flex-shrink-0  md:rounded-xl md:w-64 md:h-96 xl:h-[430px] xl:w-[300px] md:mb-20 md:ml-0"
          >
            <Image
              src="/ananth4.JPG"
              fill
              alt=""
              className="object-cover rounded-lg hidden sm:block"
            />
          </motion.div>
          <div className={arimo.className}>
            <motion.p
              initial={{ x: 200, opacity: 0, }}
              whileInView={{ x: 0, opacity:1 }}
              transition={{ duration: 1.2 }}
              className=" text-[20px] text-black md:text-[25px] space-y-1 mb-2 md:mb-20 mt-9 px-0 md:my-0 md:px-10"
            >
              A noble thought of creating a non-fictional world while writing my
              second fiction made me a web developer. My story is that I was
              born and brought up in a small Malnad village called Mankale,
              completed my schooling up to 10th at PCS in Sagar Tq, and did my
              12th at Aurobindo PU in Shivamogga. I dropped out of BNMIT,
              Bangalore, as an ECE student and wrote a book. I then went on to
              get a diploma in Film-making. In the same year, I pursued Honors
              in Political Science from IGNOU. I then published my first novel,
              Samyagana, and also wrote scripts, articles, acted, directed short
              films and plays. Finally, I started my second novel - The Last
              Dancer. The noble thought made me self-learn web development,
              build real-world projects, and here I am.
            </motion.p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default About;
