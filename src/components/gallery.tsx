import React from "react";
import Image from "next/image";
import { IGallery } from "@/interfaces/IGallery";

interface Props {
  data: IGallery[];
}

const Gallery = ({ data }: Props) => {
  return (
    <>
      <div className="pl-2 text-amber-500">
        {" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          height="24"
          width="24"
        >
          <path d="M8.875 21.85H5.3q-1.325 0-2.238-.912-.912-.913-.912-2.238V5.3q0-1.325.912-2.238.913-.912 2.238-.912h3.575V5.3H5.3v13.4h3.575Zm1.625 1.925V.225h3.15v23.55ZM18.7 5.3V2.15q1.325 0 2.238.912.912.913.912 2.238H18.7Zm0 7.85v-2.3h3.15v2.3Zm0 8.7V18.7h3.15q0 1.325-.912 2.238-.913.912-2.238.912Zm0-12.625v-2.3h3.15v2.3Zm0 7.85v-2.3h3.15v2.3Zm-3.425 4.775V18.7h1.8v3.15Zm0-16.55V2.15h1.8V5.3Z" />
        </svg>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 p-2 gap-8 pb-8">
        {data.map((val, index: number) => {
          return (
            <div
              className="bg-transparent cursor-pointer group perspective"
              key={index}
            >
              <section className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-[16.875rem] duration-1000">
                <section className="absolute backface-hidden w-full h-full">
                  <Image
                    src={val.image}
                    alt={val.alt}
                    aria-label={val.ariaLabel}
                    height={600}
                    width={400}
                    className="h-full w-full"
                  />
                </section>
                <div className="nunito-font-class-body absolute my-rotate-y-180 backface-hidden w-full h-full bg-card text-white dark:bg-white dark:text-black overflow-hidden p-4 flex justify-center items-center">
                  {val.projectDescription}
                </div>
              </section>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Gallery;
