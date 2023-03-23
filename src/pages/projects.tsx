import Head from "next/head";
import Gallery from "@/components/gallery";
import { IGallery } from "@/interfaces/IGallery";

interface IProjects {
  professionalData: IGallery[];
  personalData: IGallery[];
}

export default function Projects(props: IProjects) {
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
        <section className="mb-4 rounded z-10">
          <h1 className="text-2xl text-slate-900 dark:text-white mb-12 leading-10 font-bold p-2 nunito-font-class-body">
            Below, are several projects that I have had the pleasure to
            collaborate with talented people on from across the globe.
          </h1>
        </section>
        <h2 className="itim-font-class-heading dark:text-blue-50 text-dark text-xl tracking-wider font-bold my-4 p-2">
          Professional Projects
        </h2>
        <Gallery data={props.professionalData} />
        <h2 className="text-dark dark:text-blue-50 text-xl tracking-wider font-bold my-4 p-2">
          Personal Projects
        </h2>
        <Gallery data={props.personalData} />
      </div>
    </>
  );
}
async function fetchData(url: string) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

export async function getStaticProps() {
  const [professionalData, personalData] = await Promise.all([
    fetchData("http://localhost:3000/api/professional-gallery-data"),
    fetchData("http://localhost:3000/api/personal-gallery-data"),
  ]);

  return {
    props: {
      professionalData,
      personalData,
    },
  };
}
