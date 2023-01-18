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
      "Several projects that I have the pleasure to collaborate with amazing people on.",
    titleClass: "text-slate-800 dark:text-white",
    image: "/assets/silo.webp",
    imgClass: "px-4",
    className: "bg-white max-w-5xl rounded-lg p-4 my-8 m-auto shadow-white",
  },
  {
    image: "/assets/jvl.webp",
    imgClass: "px-4",
    className: "bg-white max-w-5xl rounded-lg p-4 my-8 m-auto",
  },
  {
    image: "/assets/procore.webp",
    imgClass: "px-4",
    className: "bg-white max-w-5xl rounded-lg py-8 my-8 m-auto",
    aos: "fade-up",
  },
  {
    image: "/assets/dupi.webp",
    imgClass: "px-4",
    className: "bg-white max-w-5xl rounded-lg py-8 my-8 m-auto",
    aos: "fade-left",
  },
  {
    image: "/assets/pli.webp",
    imgClass: "px-4",
    className: "bg-white max-w-5xl rounded-lg py-8 my-8 m-auto",
    aos: "fade-right",
  },
];
