import Carousel from "@/components/carousel";
import { CarouselData } from "@/component-data/carousel-data";
import Head from "next/head";

export default function Projects() {
  return (
    <>
      <Head>
        <title>Astolp Project Page</title>
      </Head>
      <div className="mt-12 md:my-32 lg:mt-24 grid grid-cols-1 place-items-center m-auto max-w-[63rem]">
        <h1 className="text-2xl text-slate-900 dark:text-white mb-12 leading-8">
          Below, are several projects that I have had the pleasure to
          collaborate with talented people on - from across the globe.
        </h1>
        <div>
          <Carousel prjImages={CarouselData}></Carousel>
        </div>
      </div>
    </>
  );
}
