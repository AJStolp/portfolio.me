import { CardDatas } from "@/component-data/card-data";
import Aos from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

const Card = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <>
      {CardDatas.map((val, index) => {
        return (
          <>
            <section key={val.id} className={val.className} data-aos={val.aos}>
              <div className="absolute bg-slate-800-25"></div>
              <Image src={val.image} className={val.imgClass} alt={val.alt} />
            </section>
          </>
        );
      })}
    </>
  );
};

export default Card;
