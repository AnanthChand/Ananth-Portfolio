import React from "react";
import Link from "next/link";
import Image from "next/image";

type Props = {};

function ShelfCard({}: Props) {
  return (
    <div className="grid grid-flow-col xl:grid-cols-3 justify-center gap-5 w-full mt-20">
      <div className="max-w-[400px] max-h-max  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <Link href="#">
          <div className="relative w-full h-60 ">
            <Image
              fill
              className="rounded-t-lg object-cover"
              src="/ananth.jpg"
              alt=""
            />
          </div>
        </Link>
        <div className="p-5">
          <Link href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Samyagana, a Kannada novel
            </h5>
          </Link>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
         
        </div>
      </div>
      <div className="max-w-[400px] max-h-max  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <Link href="#">
          <div className="relative w-full h-60 ">
            <Image
              fill
              className="rounded-t-lg object-cover"
              src="/ananth.jpg"
              alt=""
            />
          </div>
        </Link>
        <div className="p-5">
          <Link href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Samyagana, a Kannada novel
            </h5>
          </Link>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
         
        </div>
      </div>
      <div className="max-w-[400px] max-h-max  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <Link href="#">
          <div className="relative w-full h-60 ">
            <Image
              fill
              className="rounded-t-lg object-cover"
              src="/ananth.jpg"
              alt=""
            />
          </div>
        </Link>
        <div className="p-5">
          <Link href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Samyagana, a Kannada novel
            </h5>
          </Link>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
         
        </div>
      </div>

      
    </div>
  );
}

export default ShelfCard;

// import React from "react";
// import { Arimo } from "next/font/google";
// import Image from "next/image";

// export interface Book {
//   title: string;
//   description: string;
//   imageSrc: string;
// }

// interface Props {
//   book: Book;
// }

// function ShelfCard({ book }: Props) {
//   return (
//     <article className="hover:opacity-100 opacity-80 flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[100px] md:w-[200px] snap-center bg-[#292929] p-3">
//       <div className="m-0">
//         <Image src={book.imageSrc} alt="" className="rounded-lg m-0 w-full" height={100} width={100} />
//         <div className="m-0">
//           <h1 className="font-extrabold text-xl p-2">{book.title}</h1>
//           <p className="text-sm px-3 pb-10">{book.description}</p>
//         </div>
//       </div>
//     </article>
//   );
// }

// export default ShelfCard;
