import Head from "next/head";
import useColorMode from "@/hooks/use-theme";
import Hero from "@/components/hero";

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
      <Hero title={""} className={""} image={""}>
        {}
      </Hero>
    </>
  );
}
