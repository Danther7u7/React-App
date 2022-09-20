import '../../App.css';

import { FaShoppingCart } from 'react-icons/fa';
import React from 'react';
import { Link } from 'react-router-dom';

const CartWidget = () => {
	return (
		<>
			<Link className='nav-link' to='/cart'>
				<button className='btn btn-light btn-car' type='submit'>
					<FaShoppingCart />
				</button>
			</Link>
		</>
	);
};

export default CartWidget;