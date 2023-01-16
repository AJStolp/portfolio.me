import type { AppProps } from "next/app";
import "@/styles/globals.css";
import useColorMode from "@/hooks/use-theme";
import Button from "@/components/button";
import Image from "next/image";
import SunSvg from "@/assets/sun.svg";
import MoonSvg from "@/assets/moon.svg";
import Nav from "@/components/nav";
import Section from "@/components/section";
import Div from "@/components/div";

export default function App({ Component, pageProps }: AppProps) {
  const [colorMode, setColorMode] = useColorMode();

  return (
    <Div className="h-screen w-screen p-6 bg-white dark:bg-slate-800">
      <Div className="flex flex-row-reverse justify-between">
        <Section>
          <Nav />
        </Section>
        <Section className="mr-14">
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
        </Section>
      </Div>
      <Component {...pageProps} />
    </Div>
  );
}
