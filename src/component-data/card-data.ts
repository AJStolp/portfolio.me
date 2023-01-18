type CardData = {
  title?: string;
  copy?: string;
  image?: string;
  titleClass?: string;
  imgClass: string;
  className: string;
  aos?: string;
};

export const CardDatas: CardData[] = [
  {
    title:
      "Below, are several projects that I have had the pleasure to collaborate with amazing people on - from across the globe.",
    titleClass:
      "text-slate-800 dark:text-white m-auto w-11/12 text-xl lg:text-2xl",
    image: "/assets/silo.webp",
    imgClass: "px-4",
    className:
      "bg-slate-800 dark:bg-slate-200  rounded-lg p-4 my-8 m-auto w-11/12",
  },
  {
    image: "/assets/jvl.webp",
    imgClass: "px-4",
    className:
      "bg-slate-800 dark:bg-slate-200 dark:bg-slate-800 rounded-lg p-4 my-8 m-auto w-11/12",
    aos: "fade-up",
  },
  {
    image: "/assets/procore.webp",
    imgClass: "px-4",
    className:
      "bg-slate-800 dark:bg-slate-200 dark:bg-slate-800 rounded-lg py-8 my-8 m-auto w-11/12",
    aos: "flip-up",
  },
  {
    image: "/assets/dupi.webp",
    imgClass: "px-4",
    className:
      "bg-slate-800 dark:bg-slate-200 dark:bg-slate-800 rounded-lg py-8 my-8 m-auto w-11/12",
    aos: "fade-up",
  },
  {
    image: "/assets/pli.webp",
    imgClass: "px-4",
    className:
      "bg-slate-800 dark:bg-slate-200 dark:bg-slate-800 rounded-lg py-8 my-8 m-auto w-11/12",
    aos: "flip-up",
  },
];
