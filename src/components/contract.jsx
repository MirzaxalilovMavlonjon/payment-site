import React from "react";
import { layout, styles } from "../util/style";
import  card  from "../assets/card.png";
import Button from "./button";

function Contract(props) {
  return (
    <section className={layout.section} id="product">
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Bir necha oson qadamda <br className="sm:block hidden" /> shartnoma
          tuzish
        </h2>
        <p className={`${styles.paragraph} max-w-[550px] mt-5`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
          necessitatibus cumque cupiditate maxime sit earum laborum iusto ad
          velit repellat.
        </p>
        <Button styles={"mt-10"}/>
      </div>
      <div className={layout.sectionImage}>
        <img src={card} alt="card" className="w-[100%] h-[100%]" />
      </div>
    </section>
  );
}

export default Contract;
