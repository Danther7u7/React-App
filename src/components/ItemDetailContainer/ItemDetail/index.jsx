import React, {useState, useContext} from 'react';
import {CartContext} from "../../../context/CartContext";

const ItemDetail = ({ producto }) => {
	const { nombre, marca, modelo, stock, precio, img } = producto;
    /* Destructuring */

    const [cantidad, setCantidad] = useState(1);
    const {carrito, agregarProductoCarrito} =  useContext(CartContext);

    const agregarAlCarrito = (producto, cantidad) => {
        const productoCarrito = {id: producto.id, cantidad: cantidad}
        agregarProductoCarrito(productoCarrito)
        console.log(carrito)
    }

    const cantidadProducto = (operacion) => {
        if(operacion == "+") {
            if(cantidad < stock) {
                setCantidad(cantidad + 1)
            }
        } else if (operacion == "-") {
            if(cantidad > 1) {
                setCantidad(cantidad - 1)
            }
        } else if (operacion == "Reset") {
            setCantidad(1)
        }
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
                    <h6 className="card-text mb-3">Stock: {stock} </h6>
					<p className='mb-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere nulla a, cum qui, fuga aliquid, consequuntur itaque enim nesciunt ex sunt molestiae recusandae. Velit at soluta harum explicabo, tempora accusamus.</p>
                    <h6 className='mb-3'>
                        Cantidad: {cantidad}
                    </h6>
                    <div className='mb-3'>
                        <button className='btn btn-dark btnCount py-2' onClick={() => cantidadProducto("-")}>-</button>
                        <button className='btn btn-primary btnCount' onClick={() => cantidadProducto("Reset")}>Reset</button>
                        <button className='btn btn-dark btnCount' onClick={() => cantidadProducto("+")}> +</button>
                    </div>
                    <div className='mb-3'>
                        <button className='btn btn-success py-3' onClick={() => agregarAlCarrito(producto, cantidad)}>Agregar al Carro</button>
                    </div>
                </div>
            </div>
        </div>
        </div>
		</div>
	);
};

export default ItemDetail;
