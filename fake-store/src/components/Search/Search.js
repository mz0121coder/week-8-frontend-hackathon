import React from "react";
import search from "../Images/search.png";
import "./Search.css";

function Search() {
  return (
    <div className="search-container">
      <img src={search} alt="search-icon" />
      <input type="text" placeholder="Search products here..." />
    </div>
  );
}

export default Search;
