import React from "react";
import "./CartFixed.scss";

function CartFixed() {
  return (
    <div>
      <a href="cart.html" id="cart-icon">
        <i className="fa fa-shopping-cart">
          <span id="cart-icon-quantity">0</span>
        </i>
      </a>
    </div>
  );
}

export default CartFixed;
