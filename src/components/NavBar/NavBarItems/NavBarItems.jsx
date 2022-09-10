import React from "react";
const NavBarItems = () => {
  return (
    <>
      <ul className="navbar-nav me-auto">
        <li className="nav-item">
          <a className="nav-link" href="/productos">Inicio
            <span className="visually-hidden">(current)</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Productos</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Sobre Nosotros</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Contacto</a>
        </li>
      </ul>
    </>
  )
}

export default NavBarItems;