import Head from "next/head";
import SplitHero from "@/components/split-hero";
import { IHero } from "@/interfaces/IHero";

interface IHome {
  data: IHero[];
}

export default function Home(props: IHome) {
  return (
    <>
      <Head>
        <title>Anthony Stolp Professional Portfolio</title>
        <meta name="description" content="Anthony Stolp portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SplitHero data={props.data}></SplitHero>
    </>
  );
}

export async function getStaticProps() {
  const response = await fetch("http://localhost:3000/api/hero-data");
  const data = await response.json();

  return {
    props: {
      data,
    },
  };
}
