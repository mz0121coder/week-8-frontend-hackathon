import { useState } from 'react';
export default function Product(props) {
	const [viewDetails, setViewDetails] = useState(false);
	// initial state for product added to cart
	const [added, setAdded] = useState(false);

	function handleViewDetails() {
		setViewDetails(!viewDetails);
	}

	function handleAdd() {
		setAdded(!added);
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
			<button onClick={handleAdd}>{!added ? '🛍 🛒' : '✅✅'}</button>
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
