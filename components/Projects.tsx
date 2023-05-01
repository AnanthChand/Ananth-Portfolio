import React from "react";
import Image from "next/image";

type Props = {};

function Projects({}: Props) {
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
      <div className="h-screen w-full relative flex flex-col justify-center items-center ">
        <h1 className=" absolute top-20 uppercase tracking-[10px] text-white text-2xl text-center">
          Projects
          <span className="text-xs mt-10  tracking-[2px] ">
            <h6>Swipe on the project to see next project</h6>
          </span>
        </h1>

        <div className="w-[800px] carousel  absolute top-36 opacity-80 hover:opacity-100">
          <div className="carousel-item w-full flex flex-col items-center  justify-center">
            <Image
              src="/ananth.jpg"
              className="w-[600px] rounded-lg cursor-pointer"
              alt="Tailwind CSS Carousel component"
              width={600}
              height={600}
            />
            <h1>Project 1</h1>
          </div>
          <div className="carousel-item w-full flex flex-col items-center  justify-center">
            <Image
              src="/ananth.jpg"
              className="w-[600px] rounded-lg cursor-pointer"
              alt="Tailwind CSS Carousel component"
              width={600}
              height={600}
            />
            <h1>Project 2</h1>
          </div>
          <div className="carousel-item w-full flex flex-col items-center  justify-center">
            <Image
              src="/ananth.jpg"
              className="w-[600px] rounded-lg cursor-pointer"
              alt="Tailwind CSS Carousel component"
              width={600}
              height={600}
            />
            <h1>hello</h1>
          </div>
          <div className="carousel-item w-full flex flex-col items-center  justify-center">
            <Image
              src="/ananth.jpg"
              className="w-[600px] rounded-lg cursor-pointer"
              alt="Tailwind CSS Carousel component"
              width={600}
              height={600}
            />
            <h1>hello</h1>
          </div>
          <div className="carousel-item w-full flex flex-col items-center  justify-center">
            <Image
              src="/ananth.jpg"
              className="w-[600px] rounded-lg cursor-pointer"
              alt="Tailwind CSS Carousel component"
              width={600}
              height={600}
            />
            <h1>hello</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
