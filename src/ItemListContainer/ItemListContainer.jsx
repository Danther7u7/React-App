import React from "react";
import ImagenProducto from "../Imagenes/empanadas-de-carne-chilenas-4.jpg";
import ItemCount from "../components/ItemCount"

const ItemListContainer = () => {
  function onAdd(count){
    console.log(`Se han comprado ${count} productos`)
  }

  return (
    <>
      <div className="d-inline-flex">
        <div className="p-3 bd-highlight">
          <div className="card" style={{width: '18rem'}}>
            <img src={ImagenProducto} className="card-img-top" alt="" />
            <div className="card-body">
              <h5 className="card-title">Rica Empanadita!</h5>
              <p className="card-text">Ñam Ñam lleve su empanadita sabrosonga!</p>
              <ItemCount stock={10} onAdd={onAdd}/>
            </div>
          </div>
        </div>
      </div>
    </>
  )
} 

export default ItemListContainer;