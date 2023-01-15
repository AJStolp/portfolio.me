import { useState, useEffect, useRef } from "react";
import Head from "next/head";
import Button from "@/components/button";
import Image from "next/image";
import SunSvg from "@/assets/sun.svg";
import MoonSvg from "@/assets/moon.svg";
import Link from "next/link";
import useColorMode from "@/hooks/use-theme";

export default function Home() {
  const [colorMode, setColorMode] = useColorMode();

  return (
    <>
      <Head>
        <title>Anthony Stolp Professional Portfolio</title>
        <meta name="description" content="Anthony Stolp portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="h-screen w-screen p-6 bg-white dark:bg-slate-800">
          <Button
            className="dark:text-white text-black dark:bg-white rounded"
            onClick={() =>
              setColorMode(colorMode === "light" ? "dark" : "light")
            }
            buttontype={"primary"}
          >
            {colorMode === "light" ? (
              <Image src={MoonSvg} alt="moon" />
            ) : (
              <Image src={SunSvg} alt="sun" />
            )}
          </Button>
        </div>
      </main>
    </>
  );
}
