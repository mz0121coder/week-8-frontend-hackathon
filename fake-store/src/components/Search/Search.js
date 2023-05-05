import React from "react";
import search from "../Images/search.png";
import "./Search.css";

// Be able to search for a product
// Product name contains search text 



function Search(props) {
  return (
    <div className="search-container">
      <button onClick={props.handleClick}><img src={search} alt="search-icon" /></button>
      <input type="text" placeholder="Search products here..." onChange={props.handleSearch}/>
    </div>
  );
}

export default Search;
