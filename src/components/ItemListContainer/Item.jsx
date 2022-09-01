import {React, useState, useEffect} from "react";
import ImagenProducto from "../../Imagenes/empanadas-de-carne-chilenas-4.jpg";
import ItemCount from "../ItemCount"

const productos = [
    {nombre:"Empanada 1", precio: 2500},
    {nombre:"Empanada 2", precio: 2500},
    {nombre:"Empanada 3", precio: 2500},
    {nombre:"Empanada 4", precio: 2500},
    {nombre:"Empanada 5", precio: 2500},
    {nombre:"Empanada 6", precio: 2500},
    {nombre:"Empanada 7", precio: 2500}
]

function consultarPromesa(confirmacion) {
    return new Promise ((res,rej) => {
        if(confirmacion) {
            res(productos)
        } else {
            rej("Acceso denegado")
        }
    })
}

const Productos = () => {
    function onAdd(count){
        console.log(`Se han comprado ${count} productos`)
      }
    const [productos, setProductos] = useState([]);
    useEffect (() => {
        consultarPromesa(true)
        .then(data => {
            const productosJSX = data.map((producto,indice) =>
                <div className="d-inline-flex" key={indice}>
                    <div className="p-3 bd-highlight">
                        <div className="card" style={{width: '18rem'}}>
                            <img src={ImagenProducto} className="card-img-top" alt="" />
                            <div className="card-body">
                            <h5 className="card-title">{producto.nombre}</h5>
                            <p className="card-text">Ñam Ñam lleve su empanadita sabrosonga! por solo: ${producto.precio}</p>
                            <ItemCount stock={10} onAdd={onAdd}/>
                            <button className="btn btn-info my-2">Ver Más</button>
                            </div>
                        </div>
                    </div>
                </div>
            )
            
            console.log(productosJSX)
            setProductos(productosJSX)
        })
        .catch(error => {
            console.error(error)
        })
    }, []);

    return (
        <>
            {productos}
        </>
    )
}

export default Productos;

