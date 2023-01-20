import type { AppProps } from "next/app";
import "@/styles/globals.css";
import useColorMode from "@/hooks/use-theme";
import Button from "@/components/button";
import Nav from "@/components/nav";
// import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const [colorMode, setColorMode] = useColorMode();
  const [className, setClassName] = useState("bg-white");

  const router = useRouter();
  useEffect(() => {
    if (router.pathname === "/") {
      setClassName(
        "bg-[url('/assets/lake-sil.webp')] dark:bg-[url('/assets/my-custom-sil.webp')] bg-no-repeat bg-cover bg-bottom"
      );
    } else if (router.pathname === "/projects") {
      setClassName(
        "bg-[url('/assets/projects/prj-light.webp')] dark:bg-[url('/assets/projects/prj-dark.webp')] bg-no-repeat bg-cover"
      );
    }
  }, [router.pathname]);

  return (
    <div className={`${className} min-h-screen min-w-screen`}>
      <div className="flex flex-row justify-center md:justify-end gap-4 items-center p-4">
        <Button
          className="dark:text-white p-2 rounded bg-slate-400 dark:bg-slate-500"
          onClick={() => setColorMode(colorMode === "light" ? "dark" : "light")}
          buttontype={"primary"}
          srLabel="light and dark toggle"
        >
          {colorMode === "light" ? (
            <span className="text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
                />
              </svg>
            </span>
          ) : (
            //Next Image does not accept currentColor for somereason. Cannt get svg to take color of parent. Eventually abstract this so it is cleaner.
            <span className="text-amber-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                />
              </svg>
            </span>
          )}
        </Button>
        <Nav />
      </div>
      <Component {...pageProps} />
    </div>
  );
}
