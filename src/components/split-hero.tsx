import React from "react";
import { IHero } from "@/interfaces/IHero";
import Link from "next/link";
import Image from "next/image";
import HeroData from "@/component-data/hero-data";

interface ISplitHero {
  data: IHero[];
}

const SplitHero = ({ data }: ISplitHero) => {
  const waveEmoji = "\u{1F44B}";

  return (
    <section className="text-dark dark:text-white flex justify-center items-center h-screen">
      {data.map((val, index) => {
        return (
          <div
            className="container grid grid-cols gap-6 md:grid-cols-2 justify-center p-6 lg:p-0 mx-auto sm:py-12 max-w-6xl"
            key={index}
          >
            <div className="order-2 md:order-1 p-4 md:p-6 rounded-sm flex flex-col justify-center">
              <h1 className="marker-font-class-heading text-4xl lg:text-5xl font-bold dark:text-white text-blue-500">
                {waveEmoji},{val.heading}
              </h1>
              <p className="text-xl lg:text-2xl py-5 nunito-font-class-body dark:text-secondaryText">
                {val.copy}
              </p>
              <div className="flex flex-col space-y-4 md:flex-row md:justify-between md:items-baseline">
                <Link
                  rel="noopener noreferrer"
                  href="/projects"
                  className="px-8 py-3 text-lg font-semibold rounded dark:bg-violet-600 dark:text-white hover:underline bg-darkTopGradient text-white"
                >
                  {val.cta1}
                </Link>
                <Link
                  rel="noopener noreferrer"
                  href="mailto: anthony.stolp@proton.me"
                  className="px-8 py-3 text-lg font-semibold rounded bg-sky-400 dark:bg-white dark:text-black hover:underline bg-darkTopGradient text-white"
                >
                  {val.cta2}
                </Link>
              </div>
            </div>
            <div className="order-1 md:order-2 flex justify-center">
              <Image
                src={val.image}
                alt={val.alt}
                height={400}
                width={400}
                style={{ width: "fit-content", height: "fit-content" }}
              ></Image>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default SplitHero;

export async function getStaticProps() {
  const data = HeroData;

  return {
    props: {
      data,
    },
  };
}
