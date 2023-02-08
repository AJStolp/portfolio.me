import Head from "next/head";
import Gallery from "@/components/gallery";
import ProfessionalGalleryData from "@/component-data/professional-gallery-data";
import PersonalGalleryData from "@/component-data/personal-gallery-data";

export default function Projects() {
  return (
    <>
      <Head>
        <title>Astolp Project Page</title>
      </Head>
      <div className="mt-12 md:my32 lg:mt-24 m-auto max-w-[63rem]">
        <section className="dark:bg-transparent bg-slate-100/75 mb-4 rounded">
          <h1 className="text-2xl text-slate-900 dark:text-white mb-12 leading-10 font-bold p-2 ">
            Below, are several projects that I have had the pleasure to
            collaborate with talented people on from across the globe.
          </h1>
        </section>
        <h2 className="dark:text-purple-500 text-amber-500 text-2xl tracking-wider font-bold my-4 p-2 text-outline-thin">
          Professional Projects
        </h2>
        <Gallery data={ProfessionalGalleryData} />
        <h2 className="dark:text-purple-500 text-amber-500 text-2xl tracking-wider font-bold my-4 p-2 text-outline-thin">
          Personal Projects
        </h2>
        <Gallery data={PersonalGalleryData} />
      </div>
    </>
  );
}
