import './App.css';
import React from "react";
import { FaShoppingCart } from 'react-icons/fa';

const CartWidget = () => {
  return (
    <>
      <button className="btn btn-light btn-car" type="submit"><FaShoppingCart /></button>
    </>
  )
}

export default CartWidget;