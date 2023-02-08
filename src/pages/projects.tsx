import Head from "next/head";
import Gallery from "@/components/gallery";
import ProfessionalGalleryData from "@/component-data/professional-gallery-data";
import PersonalGalleryData from "@/component-data/personal-gallery-data";

export default function Projects() {
  return (
    <>
      <Head>
        <title>Astolp Project Page</title>
        <meta
          name="description"
          content="Anthony Stolp Personal and Professional Projects."
        />
      </Head>
      <div className="mt-12 md:my32 lg:mt-24 m-auto max-w-[63rem]">
        <section className="dark:bg-transparent bg-slate-100/75 mb-4 rounded">
          <h1 className="text-2xl text-slate-900 dark:text-white mb-12 leading-10 font-bold p-2 nunito-font-class-body">
            Below, are several projects that I have had the pleasure to
            collaborate with talented people on from across the globe.
          </h1>
        </section>
        <h2 className="itim-font-class-heading dark:text-blue-50 text-dark text-xl tracking-wider font-bold my-4 p-2">
          Professional Projects
        </h2>
        <Gallery data={ProfessionalGalleryData} />
        <h2 className="text-blue-50 text-xl tracking-wider font-bold my-4 p-2">
          Personal Projects
        </h2>
        <Gallery data={PersonalGalleryData} />
      </div>
    </>
  );
}
