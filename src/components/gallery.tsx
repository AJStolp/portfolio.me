import React from "react";
import Image from "next/image";
import { IGallery } from "@/interfaces/IGallery";

interface Props {
  data: IGallery[];
}
const Gallery = ({ data }: Props) => {
  return (
    <>
      <div className="grid justify-items-center sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 p-2 gap-8 pb-8">
        {data.map((val, index: number) => {
          return (
            <div
              key={val.id}
              className="max-w-sm bg-white rounded-lg shadow-lg dark:bg-card dark:border-gray-700"
            >
              <Image
                src={val.image}
                alt={val.alt}
                aria-label={val.ariaLabel}
                height={600}
                width={400}
                className="rounded-t-lg"
              />
              <div className="p-5">
                <h1 className="text-lg text-black dark:text-blue-50">
                  Tech Stack:
                </h1>
                <p className="dark:text-white text-black">
                  {val.projectDescription}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Gallery;
