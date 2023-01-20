import silo from "@public/assets/projects/silo.webp";
import jvl from "@public/assets/projects/jvl.webp";
// import procore from "@public/assets/projects/procore.webp";
// import procore from "@public/public/assets/projects/procore.webp";

import { StaticImageData } from "next/image";

type CarouselDataType = {
  slide1: StaticImageData;
  slide2: StaticImageData;
  //   slide3: StaticImageData;
  //   slide4: StaticImageData;
  //   slide5: StaticImageData;
};

const data: CarouselDataType = {
  slide1: silo,
  slide2: jvl,
  //   slide3: procore,
  //   slide4: "/assets/projects/dupi.webp",
  //   slide5: "/assets/projects/pli.webp",
};

export const CarouselData = [
  data.slide1,
  //   data.slide2,
  //   data.slide3,
  //   data.slide4,
  //   data.slide5,
];
