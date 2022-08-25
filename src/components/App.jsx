import './App.css';
import React from 'react';
import NavBar from "./NavBar"
import ItemListContainer from '../ItemListContainer/ItemListContainer';

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer />
      <ItemListContainer />
      <ItemListContainer />
      <ItemListContainer />
      <ItemListContainer />
      <ItemListContainer />
    </>
  );
}

export default App;
