import Head from "next/head";
import Button from "@/components/button";
import Image from "next/image";
import SunSvg from "@/assets/sun.svg";
import MoonSvg from "@/assets/moon.svg";
import useColorMode from "@/hooks/use-theme";
import Nav from "@/components/nav";

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
    </>
  );
}
