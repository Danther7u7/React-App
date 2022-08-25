import React from "react";
import ImagenProducto from "../Imagenes/empanadas-de-carne-chilenas-4.jpg";

const ItemListContainer = () => {
  return (
    <>
      <div className="d-inline-flex p-3 bd-highlight">
        <div className="card " style={{width: '18rem'}}>
          <img src={ImagenProducto} className="card-img-top" alt="" />
          <div className="card-body">
            <h5 className="card-title">Rica Empanadita!</h5>
            <p className="card-text">Ñam Ñam lleve su empanadita sabrosonga!</p>
            <a href="#" className="btn btn-primary">Comprar</a>
          </div>
        </div>
      </div>
    </>
  )
} 

export default ItemListContainer;