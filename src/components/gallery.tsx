import React from "react";
import Image from "next/image";
import { IGallery } from "@/interfaces/IGallery";

interface Props {
  data: IGallery[];
}

const Gallery = ({ data }: Props) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 p-2 gap-8 pb-8">
      {data.map((val, index: number) => {
        return (
          <section
            key={index}
            className="h-full w-full outline outline-2 rounded hover:rotate-y-180 transition-transform duration-1000 rotate-card preserve-3d relative bg-white"
          >
            <Image
              src={val.image}
              alt={val.ariaLabel}
              height={600}
              width={400}
              className="h-full w-full object-cover back-face-hidden"
              aria-label={val.ariaLabel}
            />
            <div className="back-face-hidden h-full w-full bg-dark absolute top-0 left-0 bg-grey-100">
              I will be the data here
            </div>
          </section>
        );
      })}
    </div>
  );
};

export default Gallery;
