import React from "react";
import { layout, styles } from "../util/style";
import Button from "./button";
import { features } from "../util/constants";
import FeatureCart from "./FeatureCart";

function Businnes(props) {
  return (
    <section id="features" className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={`${styles.heading2}`}>
          Biznesingizni rivojlantiring, <br className="sm:block hidden" />
          pulni hal qilamiz
        </h2>
        <p className={`${styles.paragraph} max-w-[550px] mt-5`}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum nesciunt
          at quibusdam hic rerum reprehenderit deserunt numquam fugit debitis
          sint?
        </p>
        <Button styles={"mt-10"} />
      </div>
      <div className={`${layout.sectionImage} flex-col`}>
        {features.map((feature, idx) => (
          <FeatureCart key={feature.id} {...feature} idx={idx} />
        ))}
      </div>
    </section>
  );
}

export default Businnes;
