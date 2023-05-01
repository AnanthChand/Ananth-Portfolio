import React from "react";
import { motion } from "framer-motion";
import ShelfCard from "./ShelfCard";

type Props = {};

const Shelf = (props: Props) => {
  return (
    <div
      className="bg-contain bg-center"
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
        className=" h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center "
      >
        <div className=" absolute top-10 uppercase tracking-[10px] text-white text-2xl">
          Creator's Shelf
        </div>
        <div className="w-full flex overflow-x-scroll snap-x snap-mandatory absolute space-x-5 top-12 p-10  ">
          <ShelfCard />
          <ShelfCard />
          
        </div>
      </motion.div>
    </div>
  );
};

export default Shelf;
