import React from "react";
import "./Button.scss";

const Button = ({ color, text, className }) => {
  return <button className={`btn btn--${color} ${className}`}>{text}</button>;
};

export default Button;
