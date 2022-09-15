import React, {createContext, useState} from 'react';

const CartContext = createContext()

const CarritoProvider = (props) => {

    const [carrito, setCarrito] = useState([]);

    const agregarProductoCarrito = (producto) => {
        const auxCarrito = carrito
        auxCarrito.push(producto)
        setCarrito(auxCarrito)
    }

    const quitarProductoCarrito = (producto) => {
        const auxCarrito = carrito
        let indice = auxCarrito.findIndex(prod => prod.id === producto.id)
        auxCarrito.splice(indice, 1)
        setCarrito(auxCarrito)
    }
    
    return (
        <>
            <CartContext.Provider value={{carrito, agregarProductoCarrito, quitarProductoCarrito}}>
                    {props.children}
            </CartContext.Provider>
        </>
    );
}

export {CartContext, CarritoProvider};