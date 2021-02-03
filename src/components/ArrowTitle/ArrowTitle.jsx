import React from "react";
import { IMAGES } from "constants/images";
import "./ArrowTitle.scss";

const ArrowTitle = ({ title }) => {
  return (
    <div className="arrow-title">
      <h4>{title}</h4>
      <img src={IMAGES.ARROW} alt="img" />
    </div>
  );
};

export default ArrowTitle;
