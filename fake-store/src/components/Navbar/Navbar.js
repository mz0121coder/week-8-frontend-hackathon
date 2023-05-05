import React from "react";
import "./Navbar.css";
import shoppingCart from "../Images/icons8-shopping-cart.gif";

function Navbar() {
  return (
    <div className="navbar-div">
      <h1>Fake Store API App</h1>
      <img src={ shoppingCart } alt="shopping-cart" />
    </div>
  );
}

export default Navbar;
