import React from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import NavBar from "./NavBar"
import Home from './ItemListContainer/Item';
import Producto from './ItemListContainer/ItemList';

function App() {
  return (
    <>
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/productos/:id" element={<Producto/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
