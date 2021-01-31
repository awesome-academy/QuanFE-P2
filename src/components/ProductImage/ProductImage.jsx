import React from "react";
import "./ProductImage.scss";

const ProductImage = ({ img, tag }) => {
  return (
    <div className="product-image">
      <img className="img" src={img} alt="" />
      <img className="tag" src={tag} alt="" />
    </div>
  );
};

export default ProductImage;
