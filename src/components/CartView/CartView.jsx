import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/CartContext";
import "./CartView.css";
const CartView = () => {
    const {cart, quitarProductoCarrito, getTotal, clearCart} = useContext(CartContext);

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
            <div className="container">
                <span className="textCart py-4" >Precio Total: ${getTotal()}</span>
                <button className="btn btn-dark btnCart my-4" onClick={() => clearCart()}> Vaciar Carro </button>
            </div>
        </div>

    )
}

export default CartView;