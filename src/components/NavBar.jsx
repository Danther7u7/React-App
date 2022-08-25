import React from "react";
import Form from "./Form";
import NavBarItems from "./NavBarItems";
import Logo from "./Logo";
import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
            <Logo />
          <div className="collapse navbar-collapse" id="navbarColor03">
            <NavBarItems />
            <CartWidget />
            <Form varBuscar="Productos"/>
          </div>
        </div>
      </nav>
    </>
  )
}

export default NavBar;
