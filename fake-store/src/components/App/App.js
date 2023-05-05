import './App.css';
import Navbar from '../Navbar/Navbar';
import Search from '../Search/Search';
import { useEffect, useState } from 'react';
// import { useEffect } from 'react';
import Product from '../Product/Product';
// import productsData from '../../data/products-data';

// console.log(productsData);

function App() {
	// make a state for products list
	const [products, setProducts] = useState([]);
	// state to check all products showing on page load
	const [loaded, setLoaded] = useState(false);
	useEffect(() => {
		fetch('https://fakestoreapi.com/products')
			.then(res => res.json())
			.then(json => {
				setProducts(json);
				setLoaded(true);
			});
	}, []);

	if (!loaded) {
		return <div>Loading...</div>;
	}

	return (
		<>
			<Navbar />
			<Search />
			<div className='products-container'>
				{products.map((product, index) => (
					<div className='product'>
						{' '}
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
