import React from "react";
import { Arimo } from "next/font/google";
import Image from "next/image";


type Props = {};

function ShelfCard({}: Props) {
  return (
    <article className="hover:opacity-100 opacity-80  flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[100px] md:w-[200px] snap-center bg-[#292929] p-3">
      
        <div className="m-0">
          <Image src="/samyagana.jpg" alt="" className="rounded-lg m-0" height={50} width={50} />
          <div className="m-0">
              <h1 className="font-extrabold text-xl p-2">Saamyagaana</h1>
              <p className="text-sm px-3 pb-10">
                A Kannada novel published on 01/01/21. its a social drama of
                villagers who got displaced after the construction of a dam near
                Malnad.
              </p>
          </div>
        </div>
      
    </article>
  );
}

export default ShelfCard;
