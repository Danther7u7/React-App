import React, {createContext, useState} from 'react';
import ItemDetail from '../components/ItemDetailContainer/ItemDetail';

const CartContext = createContext()

const CarritoProvider = (props) => {

    const [cart, setCarrito] = useState([]);

    const agregarProductoCarrito = (producto, cantidad) => {
        // const auxCarrito = cart
        // auxCarrito.push(producto)
        // setCarrito(auxCarrito)
        if(isInCart(producto.id)) {
            const newCart = [...cart]
            for (const element of newCart) {
                if(element.producto.id === producto.id) {
                    element.cantidad = element.cantidad + cantidad
                }
            }
            setCarrito(newCart)
        } else {
            setCarrito(
                [
                    ...cart,
                    {
                        producto: producto,
                        cantidad: cantidad
                    }
                ]
            )
        }
    }

    const quitarProductoCarrito = (id) => {
        // const auxCarrito = cart
        // let indice = auxCarrito.findIndex(prod => prod.id === producto.id)
        // auxCarrito.splice(indice, 1)
        // setCarrito(auxCarrito)
        const newCart = [...cart].filter(element => element.producto.id !== id)
        setCarrito(newCart)

    }

    const isInCart = (id) => {
        return cart.find((element) => element.producto.id === id)
    }

    const getTotal = () => {
        let total = 0;
        cart.forEach((element) => {
            total += (element.cantidad * element.producto.precio);
        })
        return total;
    }

    const clearCart = () => {
        setCarrito([]);
    }

    return (
        <>
            <CartContext.Provider value={{cart, agregarProductoCarrito, quitarProductoCarrito, clearCart, getTotal}}>
                    {props.children}
            </CartContext.Provider>
        </>
    );
}

export {CartContext, CarritoProvider};