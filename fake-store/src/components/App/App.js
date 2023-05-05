import "./App.css";
import Navbar from "../Navbar/Navbar";
import Search from "../Search/Search";
import { useEffect, useState } from "react";
// import { useEffect } from 'react';
import Product from "../Product/Product";
// import productsData from '../../data/products-data';

// console.log(productsData);

function App() {
  // make a state for products list
  const [products, setProducts] = useState([]);
  // state to check all products showing on page load
  const [loaded, setLoaded] = useState(false);
  // Set initial state for search
  const [search, setSearch] = useState("");
  // Set initial state for buttonclick
  const [click, setClick] = useState(false);
  // Set initial state for our filtered products
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        setProducts(json);
        setFilteredProducts(json);
        setLoaded(true);
      });
  }, []);

  if (!loaded) {
    return <div>Loading...</div>;
  }

  function handleSearch(e) {
    setSearch(e.target.value);
    // return products.filter(product => product.title.toLowerCase().includes(search.toLowerCase()))
    // console.log(search)
  }
  const filteredSearch = products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  function handleClick() {
    setClick(true);
    setFilteredProducts(filteredSearch);
  }
  return (
    <>
      <Navbar />
      <Search handleSearch={handleSearch} handleClick={handleClick} />
      <div className="products-container">
        {/* {click === false &&
          products.map((product, index) => (
            <div className="product">
              {" "}
              <Product
                key={product.id}
                image={product.image}
                title={product.title}
                price={product.price}
                index={product.index}
              />
            </div>
          ))} */}

        {filteredProducts.map((product, index) => (
          <div className="product">
            {" "}
            <Product
              key={product.id}
              image={product.image}
              title={product.title}
              price={product.price}
              index={product.index}
            />
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
