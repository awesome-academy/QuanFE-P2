import Button from "components/Button/Button";
import ProductImage from "components/ProductImage/ProductImage";
import React from "react";
import "./Product.scss";

const Product = ({ title, link, price, original, tag, className }) => {
  return (
    <div className={className}>
      <a className="product" href="./" title={title}>
        <div className="wrapper-popup">
          <ProductImage img={link} tag={tag} />
          <div className="popup">
            <div className="popup__item">
              <i className="fa fa-heart"></i>
              <span>Yêu thích</span>
            </div>
            <div className="popup__item">
              <i className="fa fa-bar-chart"></i>
              <span>So sánh</span>
            </div>
            <div className="popup__item">
              <i className="fa fa-compress"></i>
            </div>
          </div>
        </div>
        <div className="product-content">
          <h5 className="title">{title}</h5>
          <p className="price">
            {price}
            <sup>đ</sup>
          </p>
          <span>{" - "}</span>
          <p className="original">
            {original}
            <sup>đ</sup>
          </p>
          <br />
          <br />
          <Button color="black" text="ADD TO CART" />
        </div>
      </a>
    </div>
  );
};

export default Product;
