import React from "react";
import "./Button.scss";

const Button = ({ color, text, className, href, type }) => {
  return (
    <a href={href}>
      <button className={`btn btn--${color} ${className}`} type={type}>
        {text}
      </button>
    </a>
  );
};

export default Button;
