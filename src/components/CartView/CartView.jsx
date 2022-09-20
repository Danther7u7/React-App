import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/CartContext";
import "./CartView.css";

const CartView = () => {
    const {cart, quitarProductoCarrito } = useContext(CartContext);

    return (
        <div>
            {
                cart.map((element) => (
                    <div className="container py-4">
                        <span className="textCart"> {element.producto.nombre} </span>
                        <span className="textCart"> Precio: {element.producto.precio} </span>
                        <span className="textCart"> Cantidad: {element.cantidad} </span>
                        <img className="imgCart" src={element.producto.img}/>
                        <button className="btn btn-dark btnCart" onClick={() => quitarProductoCarrito(element.producto.id)}> Eliminar </button>
                    </div>
                ))
            }
        </div>

    )
}

export default CartView;