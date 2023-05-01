import React from 'react';
import { motion } from 'framer-motion';
import { Arimo } from 'next/font/google';
import Image from "next/image";


const arimo = Arimo({ weight: ['400'], subsets: ['cyrillic'] });

type Props = {};

function About({}: Props) {
  return (
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
        className=" h-screen flex flex-col relative top-24 text-center md:text-left md:flex-row px-10 max-w-7xl justify-around mx-auto items-center"
      >
        <h3 className=" absolute top-0 uppercase tracking-[20px] text-gray-500 md:text-2xl text:sm md:top-[-50px]">
          About
        </h3>
        <Image
          src="/ananth4.JPG"
          width={80}
          height={80}
          alt=""
          className="flex h-20 w-20 object-cover -mb-32  rounded-full flex-shrink-0  md:rounded-xl md:w-64 md:h-96 xl:w-max xl:h-[450px] xl:ml-10 xl:mb-36 md:mb-20 md:ml-20  "
        />
        {/* -mb-20 md:mb-0 md:h-[300px] flex-shrink-0  h-[50px] w-max md:w-max xl:h-[200px] xl:w-max xl:mb-0 rounded-xl */}
        <div className={arimo.className}>
          <p className=" text-[12px] text-black md:text-[15px] space-y-1 mb-20 md:mb-20 mt-9 px-0 md:my-0 md:px-10">
            “Why create just a fictional world when I can create the real
            world?” This thought struck me three years ago while I was working
            on my second novel, which will eventually become my first English
            novel titled The Lost, Last Dancer. It will be an epic adventure
            period novel set in the era of Mughals. As the thought struck I
            started to learn coding, developing websites…. Oh wait let me start
            my story from the beginning. I was born and brought up in a Malnad
            village known as Mankale. I completed my basic schooling with flying
            colors at Pragathi Composite School in Sagar Tq. Then PU at
            Aurobindo PU College in Shivamogga. Later, I joined BNMIT, Bangalore
            as an EC engineering student but dropped out three years later. The
            reason was that I was fed up with fake failing at VTU, I gradually
            realized my potential as an artist, and it was the pre-corona era.
            Just a few months after my fellow batchmates graduated, I published
            my first novel, Saamyagaana. The journey took 1.5 years and 76,000
            words. After this, I pursued a diploma in filmmaking, where I
            assisted, wrote, directed and acted in short movies, music videos,
            and a feature movie. Meanwhile, my second novel was taking shape,
            the thought struck, started self-learning CS. Eventually I started
            to develop the real world through coding.
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default About;
