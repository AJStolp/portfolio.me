import Button from "./button";
import Nav from "./nav";
import useColorMode from "@/hooks/use-theme";
import Image from "next/image";
import SunSvg from "@/assets/sun.svg";
import MoonSvg from "@/assets/moon.svg";

export default function Layout() {
  const [colorMode, setColorMode] = useColorMode();
  return (
    <main>
      <div className="h-screen w-screen p-6 bg-white dark:bg-slate-800">
        <Nav />
        <Button
          className="dark:text-white text-black dark:bg-white rounded"
          onClick={() => setColorMode(colorMode === "light" ? "dark" : "light")}
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
  );
}
