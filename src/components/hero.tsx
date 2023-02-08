import React from "react";
import { HeroDatas } from "@/component-data/hero-data";
import { NavDatas } from "@/component-data/nav-links";
import Link from "next/link";

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
      <div className="container flex flex-col justify-center items-center p-6 mx-auto sm:py-12 lg:py-10 lg:flex-row lg:justify-evenly mt-24 w-full">
        <div className="dark:bg-transparent bg-slate-100/25 flex flex-col justify-center p-4 lg:p-6 rounded-sm w-fit lg:w-1/2 text-left lg:text-left">
          <h1 className="text-3xl text-slate-900 dark:text-slate-100 font-bold md:text-6xl">
            {waveEmoji}, {HeroDatas.hero.heading}
            <span className="dark:text-violet-400 text-amber-400 text-outline-black text-outline-thin tracking-wide">
              {HeroDatas.hero.colorName}
            </span>
          </h1>
          <p
            id="styled-code"
            className="mt-6 mb-8 text-xl sm:mb-12 nunito-font-class-body"
          >
            {HeroDatas.hero.copy}
          </p>
          <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
            <Link
              rel="noopener noreferrer"
              href="/projects"
              className="px-8 py-3 text-lg font-semibold rounded dark:bg-violet-400 dark:text-gray-900 dark:hover:text-white hover:text-sky-400 bg-slate-100 text-slate-900"
            >
              {HeroDatas.hero.cta1}
            </Link>
            <Link
              rel="noopener noreferrer"
              href="mailto: anthony.stolp@outlook.com"
              className="px-8 py-3 text-lg font-semibold rounded bg-sky-400 dark:bg-white dark:text-gray-900 dark:hover:text-sky-400 hover:text-white bg-vilote-400 text-slate-800"
            >
              {HeroDatas.hero.cta2}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
