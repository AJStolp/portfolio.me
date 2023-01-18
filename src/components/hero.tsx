import React from "react";
import { HeroDatas } from "@/component-data/hero-data";
import { NavDatas } from "@/component-data/nav-links";

interface IHero {
  title: string;
  className: string;
  children: React.ReactNode;
  image: string;
}

const Hero: React.FC<IHero> = ({ title, className, children }) => {
  const waveEmoji = "\u{1F44B}";
  return (
    <div className=" dark:text-gray-100">
      <div className="container flex flex-col justify-center items-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-evenly">
        <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
          <img
            src={HeroDatas.hero.image}
            alt=""
            className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128 rounded"
          />
        </div>
        <div className="flex flex-col justify-center p-6 rounded-sm lg:max-w-md xl:max-w-lg text-left lg:text-left">
          <h1 className="text-3xl font-bold leading-none md:text-6xl">
            {waveEmoji}, {HeroDatas.hero.heading}
            <span className="dark:text-violet-400 text-violet-600">
              {HeroDatas.hero.colorName}
            </span>
          </h1>
          <p id="styled-code" className="mt-6 mb-8 text-xl sm:mb-12 font-mono">
            {HeroDatas.hero.copy}
          </p>
          <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
            <a
              rel="noopener noreferrer"
              href="/projects"
              className="px-8 py-3 text-lg font-semibold rounded dark:bg-violet-400 dark:text-gray-900 dark:hover:text-white hover:text-white bg-slate-800 text-violet-400"
            >
              {HeroDatas.hero.cta1}
            </a>
            <a
              rel="noopener noreferrer"
              href="/projects"
              className="px-8 py-3 text-lg font-semibold rounded bg-sky-400 dark:bg-white dark:text-gray-900 dark:hover:text-sky-400 hover:text-white bg-vilote-400 text-dark-400"
            >
              {HeroDatas.hero.cta2}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
