import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import { useRef } from "react";
import silo from "../../public/assets/projects/silo.webp";
import jvl from "../../public/assets/projects/jvl.webp";
import procore from "../../public/assets/projects/procore.png";
import dupixent from "../../public/assets/projects/dupi.webp";
import pli from "../../public/assets/projects/pli.webp";

interface CarouselProps {
  prjImages: StaticImageData[];
}

const Carousel: React.FC<CarouselProps> = () => {
  const carouselRef = useRef<HTMLDivElement | null>(null);

  const [currentIndex, setCurrentIndex] = useState(0);
  // const [startX, setStartX] = useState(0);
  // const [endX, setEndX] = useState(0);

  const [projImages, setImages] = useState([silo, jvl, procore, dupixent, pli]);

  // mess around with swipe later
  // useEffect(() => {
  //   if (carouselRef.current) {
  //     carouselRef.current.addEventListener("touchstart", handleTouchStart);
  //     carouselRef.current.addEventListener("touchmove", handleTouchMove);
  //     carouselRef.current.addEventListener("touchend", handleTouchEnd);
  //   }
  //   return () => {
  //     if (carouselRef.current) {
  //       carouselRef.current.removeEventListener("touchstart", handleTouchStart);
  //       carouselRef.current.removeEventListener("touchmove", handleTouchMove);
  //     }
  //   };
  // }, [carouselRef.current]);

  const handlePrevious = () => {
    const previousIndex = currentIndex - 1;
    setCurrentIndex(previousIndex < 0 ? projImages.length - 1 : previousIndex);
  };

  const handleNext = () => {
    const nextIndex = currentIndex + 1;
    setCurrentIndex(nextIndex === projImages.length ? 0 : nextIndex);
  };

  // const handleTouchStart = (e) => {
  //   setStartX(e.touches[0].clientX);
  // };

  // const handleTouchMove = (e) => {
  //   setEndX(e.touches[0].clientX);
  // };

  // const handleTouchEnd = (e) => {
  //   const swipeDistance = endX - startX;
  //   if (swipeDistance > 0) {
  //     handlePrevious();
  //   } else {
  //     handleNext();
  //   }
  // };

  return (
    <div className="relative h-96 md:h-auto" ref={carouselRef}>
      <Image src={projImages[currentIndex]} alt="" style={{ height: "75%" }} />

      <div className="absolute bottom-0 right-0 p-4 bg-slate-800/75 rounded w-full text-center md:m-4 md:w-fit">
        <button
          onClick={handlePrevious}
          className="bg-gray-700 text-white p-2 mr-4 w-28"
        >
          Previous
        </button>
        <button
          onClick={handleNext}
          className="bg-gray-700 text-white p-2 ml-4 w-28"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Carousel;
