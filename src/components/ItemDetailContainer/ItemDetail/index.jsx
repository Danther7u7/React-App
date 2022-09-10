import React from 'react';
import Count from '../../ItemListContainer/ItemCount/ItemCount'

const ItemDetail = ({ producto }) => {
	const { nombre, marca, modelo, stock, precio, img } = producto;
	/* Destructuring */

	const onAdd = (quantity) => {
		console.log(`Se han agregado ${quantity} productos al carrito`)
	}

	return (
		<div className='container py-4'>
			<div className="card mb-3">
            <div className="row g-2">
                <div className="col-md-12">
                    <img src={img} className="img-fluid rounded-start" alt="..." />
                </div>
            <div className="col-md-12">
                <div className="card-body">
                    <h5 className="card-title mb-3">{nombre}</h5>
                    <h6 className="card-text mb-3">Marca: {marca} </h6>
                    <h6 className="card-text mb-3">Modelo: {modelo} </h6>
                    <h6 className="card-text mb-3">Precio: ${precio} </h6>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere nulla a, cum qui, fuga aliquid, consequuntur itaque enim nesciunt ex sunt molestiae recusandae. Velit at soluta harum explicabo, tempora accusamus.</p>
					<Count stock = {stock} onAdd={onAdd}/>
                </div>
            </div>
        </div>
        </div>
		</div>
	);
};

export default ItemDetail;
