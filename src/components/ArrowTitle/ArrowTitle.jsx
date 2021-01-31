import React from "react";
import Images from "constants/images";
const ArrowTitle = ({ title }) => {
  return (
    <div>
      <h4>{title}</h4>
      <img src={Images.ARROW} alt="img" />
    </div>
  );
};

export default ArrowTitle;
