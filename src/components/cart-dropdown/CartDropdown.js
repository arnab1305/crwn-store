import "./CartDropdown.scss";
import { Button } from "../UI/Button";
import React from "react";

export const CartDropdown = () => {
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items"/>
      <Button>CHECKOUT</Button>
    </div>
  );
};
