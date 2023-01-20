import { CardDatas } from "@/component-data/card-data";
import Aos from "aos";
import "aos/dist/aos.css";
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
            <section key={index} className={val.className} data-aos={val.aos}>
              <div className="absolute bg-slate-800-25"></div>
              <img src={val.image} className={val.imgClass} />
            </section>
          </>
        );
      })}
    </>
  );
};

export default Card;
