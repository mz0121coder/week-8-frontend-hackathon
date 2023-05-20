import './App.css';
import Navbar from '../Navbar/Navbar';
import Search from '../Search/Search';
import { useEffect, useState } from 'react';
import Product from '../Product/Product';
function App() {
	// Set the state for the entire list of products
	const [products, setProducts] = useState([]);
	// Set the state for checking if all products have loaded
	const [loaded, setLoaded] = useState(false);
	// Set the initial filtered products state
	const [filteredProducts, setFilteredProducts] = useState([]);
	// Set the initial state for the theme (light or dark)
	const [theme, setTheme] = useState('light');
	// Set the initial state for the cart quantity
	// const [cart, setCart] = useState(0);

	// Use the useEffect hook to fetch the products data
	useEffect(() => {
		fetch('https://fakestoreapi.com/products')
			.then(res => res.json())
			.then(json => {
				console.log(json);
				setProducts(json);
				setFilteredProducts(json); // Set the initial filtered products to all products
				setLoaded(true);
			});
	}, []);
	// Use the useEffect hook to set the theme of the document body based on state change
	useEffect(() => {
		document.body.className = theme;
	}, [theme]);
	if (!loaded) {
		return <div>Loading...</div>;
	}
	// Update the search state on input change
	function handleSearch(e) {
		// Filter the products based on search input when button is clicked
		const filteredSearch = products.filter(product =>
			product.title.toLowerCase().includes(e.target.value.toLowerCase())
		);
		setFilteredProducts(filteredSearch);
	}

	// Update the displayed category of products
	function handleCategory(e) {
		const filteredCategory = products.filter(product =>
			e.target.value === ''
				? product.category.includes('')
				: product.category === e.target.value
		);
		setFilteredProducts(filteredCategory);
	}

	// Toggle between light and dark themes
	function handleDarkTheme() {
		if (theme === 'light') {
			setTheme('dark');
		} else {
			setTheme('light');
		}
	}
	return (
		<>
			<Navbar handleDarkTheme={handleDarkTheme} />
			<Search handleSearch={handleSearch} handleCategory={handleCategory} />
			<div className='products-container'>
				{filteredProducts.map((product, index) => (
					<div className='product' key={product.id}>
						<Product
							image={product.image}
							title={product.title}
							price={product.price}
							description={product.description}
							rating={product.rating.rate}
							reviews={product.rating.count.toString()}
							category={product.category}
							id={product.id}
						/>
					</div>
				))}
			</div>
		</>
	);
}
export default App;
