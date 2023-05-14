import React from 'react';
import search from '../Images/search.png';
import './Search.css';

function Search(props) {
	return (
		<div className='search-container'>
			<img src={search} alt='search-icon' />
			<input
				type='text'
				placeholder='Search products here...'
				onChange={props.handleSearch}
			/>
			<label htmlFor='categories'>Filter by category</label>
			<select name='categories' id='categories' onChange={props.handleCategory}>
				<option value="men's clothing">Men's Clothing</option>
				<option value="women's clothing">Women's Clothing</option>
				<option value='jewelery'>Jewellery</option>
				<option value='electronics'>Electronics</option>
			</select>
		</div>
	);
}

export default Search;
