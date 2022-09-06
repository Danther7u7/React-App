import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';

const Producto = () => {
    const [producto, setProductoCard] = useState([]);
    const {id} = useParams()
    useEffect(() => {
        fetch("../json/productos.json")
        .then(response => response.json())
        .then(data => {
            const producto1 = data.find(producto => producto.id == id)
            setProductoCard(producto1)
        })

    }, []);

    return (
        <>
        <div className='container py-4'>
         <div className="card mb-3">
            <div className="row g-3">
                <div className="col-md-6">
                    <img src={"../img/"+ producto.img} className="img-fluid rounded-start" alt="..." />
                </div>
            <div className="col-md-6">
                <div className="card-body">
                    <h5 className="card-title">{producto.nombre}</h5>
                    <p className="card-text">Marca: {producto.marca} </p>
                    <p className="card-text">Modelo: {producto.modelo} </p>
                    <p className="card-text">Precio: ${producto.precio} </p>
                    <p className="card-text">Stock: {producto.stock} </p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum in tempore iure sed quis voluptatem ullam dolor deserunt. Velit sint eius beatae nemo quos facere nostrum sit unde a assumenda?</p>
                    <button className='btn btn-dark'>Comprar</button>
                </div>
            </div>
        </div>
        </div>
        </div>
        </>
    );
}

export default Producto;