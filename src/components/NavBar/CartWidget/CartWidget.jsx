import '../../App.css';

import { FaShoppingCart } from 'react-icons/fa';
import React from 'react';

const CartWidget = () => {
	return (
		<>
			<button className='btn btn-light btn-car' type='submit'>
				<FaShoppingCart />
			</button>
		</>
	);
};

export default CartWidget;