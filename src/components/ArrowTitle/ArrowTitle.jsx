import React from "react";
import { IMAGES } from "constants/images";

const ArrowTitle = ({ title }) => {
  return (
    <div>
      <h4>{title}</h4>
      <img src={IMAGES.ARROW} alt="img" />
    </div>
  );
};

export default ArrowTitle;
