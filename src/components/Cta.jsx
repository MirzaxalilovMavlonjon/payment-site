import React from "react";
import { styles } from "../util/style";
import Button from "./button";

function Cta(props) {
  return (
    <div
      className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-dark-gradient rounded-[20px] box-shadow`}
    >
      <div className={`flex-1 flex flex-col`}>
        <h2 className={`${styles.heading2}`}>Xizmatlarni sinab ko'rish!</h2>
        <p className={`${styles.paragraph} max-w-[550px] `}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
          ipsa voluptates saepe similique deleniti,
        </p>
      </div>
      <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
        <Button />
      </div>
    </div>
  );
}

export default Cta;
