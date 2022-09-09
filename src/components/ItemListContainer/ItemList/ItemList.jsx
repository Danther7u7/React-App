import React, { useEffect, useState } from 'react';

import Item from '../Item/Item';
import { productos } from './../../../Mock/productos';
import { useParams } from 'react-router-dom';

const Producto = () => {
	const [list, setList] = useState([]);

	const promise = new Promise((resolve, reject) => {
		resolve(productos);
		reject();
	});

	useEffect(() => {
		promise.then((data) => {
			setList(data);
		});
	}, []);

	return (
		<>
			{list.map((elem, i) => (
				<Item key={i} producto={elem} />
			))}
		</>
	);
};

export default Producto;