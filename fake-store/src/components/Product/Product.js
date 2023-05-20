import { useState } from 'react';
export default function Product(props) {
	const [quantity, setQuantity] = useState(0);
	const [viewDetails, setViewDetails] = useState(false);

	function handleViewDetails() {
		setViewDetails(!viewDetails);
	}

	function addToCart() {
		setQuantity(quantity + 1);
	}

	function removeFromCart() {
		if (quantity > 0) {
			setQuantity(quantity - 1);
		}
	}

	return (
		<>
			<h5>{props.category.toUpperCase()}</h5>
			<img src={props.image} alt='product' />
			<h3>{props.title}</h3>
			<h4>Price: £{props.price.toFixed(2)}</h4>
			<h4>
				Rating: {'⭐️'.repeat(Math.round(props.rating))} ({`${props.rating}/5`})
			</h4>
			<h4>{`${props.reviews}`} ratings</h4>
			<button onClick={addToCart}>+</button>
			{quantity > 0 && <button onClick={removeFromCart}>-</button>}
			<p>{quantity > 0 && `${quantity}`}</p>
			<button onClick={handleViewDetails}>
				{!viewDetails ? 'View more details:' : 'Hide details'}
			</button>
			{viewDetails && (
				<div className='product-details'>
					<h4>
						Description:
						<p>{props.description}</p>
					</h4>
					<h5>ID: {props.id}</h5>
				</div>
			)}
		</>
	);
}
