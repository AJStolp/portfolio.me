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
          <div key={index} className="my-16 w-4/6">
            <h1 className={val.titleClass}>{val.title}</h1>
            <section key={index} className={val.className} data-aos={val.aos}>
              <img src={val.image} className={val.imgClass} />
            </section>
          </div>
        );
      })}
    </>
  );
};

export default Card;
