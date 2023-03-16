type CardData = {
  title?: string;
  copy?: string;
  image: string;
  alt: string;
  titleClass?: string;
  imgClass: string;
  className: string;
  aos?: string;
  id: number;
};

export const CardDatas: CardData[] = [
  {
    id: 1,
    title:
      "Below, are several projects that I have had the pleasure to collaborate with talented people on - from across the globe.",
    titleClass:
      "text-slate-800 dark:text-white m-auto w-11/12 text-xl lg:text-2xl",
    image: "/assets/projects/silo.webp",
    alt: "sil.com",
    imgClass: "rounded-t-lg",
    className: "bg-slate-800 dark:bg-slate-200  rounded-lg  m-auto w-11/12",
  },
  {
    id: 2,
    image: "/assets/projects/jvl.webp",
    alt: "johsosonville.com",
    imgClass: "rounded-t-lg",
    className:
      "bg-slate-800 dark:bg-slate-200 dark:bg-slate-800 rounded-lg m-auto w-11/12",
    // aos: "fade-up",
  },
  {
    id: 3,
    image: "/assets/projects/procore.webp",
    alt: "procore.com",
    imgClass: "rounded-t-lg",
    className:
      "bg-slate-800 dark:bg-slate-200 dark:bg-slate-800 rounded-lg  m-auto w-11/12",
    // aos: "flip-up",
  },
  {
    id: 4,
    image: "/assets/projects/dupi.webp",
    alt: "dupixent.com",
    imgClass: "rounded-t-lg",
    className:
      "bg-slate-800 dark:bg-slate-200 dark:bg-slate-800 rounded-lg  m-auto w-11/12",
    // aos: "fade-up",
  },
  {
    id: 5,
    image: "/assets/projects/pli.webp",
    alt: "polarlightimaging.com",
    imgClass: "rounded-t-lg",
    className:
      "bg-slate-800 dark:bg-slate-200 dark:bg-slate-800 rounded-lg  m-auto w-11/12",
    // aos: "flip-up",
  },
];
