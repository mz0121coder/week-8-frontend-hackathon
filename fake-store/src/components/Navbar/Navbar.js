import React from "react";
import "./Navbar.css";
import shoppingCart from "../Images/icons8-shopping-cart.gif";

function Navbar(props) {
  return (
    <div className="navbar-div">
      <h1>Fake Store API App</h1>
      <div className="toggle-div">
        <button onClick={props.handleDarkTheme}>Toggle Dark Theme:🌙</button>
        <img src={shoppingCart} alt="shopping-cart" />
      </div>
    </div>
  );
}

export default Navbar;
