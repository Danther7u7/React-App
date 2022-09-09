import React, { useEffect, useState } from 'react';

import ItemDetail from './ItemDetail/index';
import { productos } from './../../Mock/productos';

const ItemDetailContainer = () => {
	const [producto, setProducto] = useState();

	const promise = new Promise((resolve, reject) => {
		resolve(productos);

		reject();
	});

	useEffect(() => {
		promise.then((data) => {
			setProducto(data.find((elem) => elem.id === 1));
		});
	}, []);

	return <>{producto && <ItemDetail producto={producto} />}</>;
};

export default ItemDetailContainer;