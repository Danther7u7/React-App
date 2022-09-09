import '../../App.css';
import React, { useEffect, useState } from 'react';

const Item = ({ producto }) => {
	const { nombre, marca, stock, precio, img} = producto;

	return (
    <div className="card text-center" style={{width: '16rem'}}>
      <img src={img} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{nombre}</h5>
        <h6 className='mb-2'>Marca: {marca}</h6>
        <h6 className='mb-2'>Stock: {stock}</h6>
        <h6 className='mb-2'>Precio: ${precio}</h6>
        <a href="#" className="btn btn-primary my-2">Ver Producto</a>
      </div>
    </div>
	);
};

export default Item;
