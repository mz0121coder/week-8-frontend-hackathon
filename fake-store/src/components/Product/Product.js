import { useState } from 'react';
export default function Product(props) {
	const [viewDetails, setViewDetails] = useState(false);
	function handleViewDetails() {
		setViewDetails(!viewDetails);
	}
	return (
		<>
			<img src={props.image} alt='product' />
			<h2>{props.title}</h2>
			<h3>Price: £{props.price.toFixed(2)}</h3>
			<button onClick={handleViewDetails}>
				{!viewDetails ? 'View more details:' : 'Hide details'}
			</button>
			{viewDetails && (
				<div className='product-details'>
					<h4>
						Description:
						<p>{props.description}</p>
					</h4>
					<h4>
						Rating: {'⭐️'.repeat(props.rating)} ({`${props.rating}/5`})
					</h4>
					<h4>{`${props.reviews}`} ratings</h4>
					<h5>Category: {props.category}</h5>
					<h5>ID: {props.id}</h5>
				</div>
			)}
		</>
	);
}
