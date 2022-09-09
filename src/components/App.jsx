import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemDetailContainer from './ItemDetailContainer';
import ItemListContainer from './ItemListContainer/ItemListContainer';
import NavBar from './NavBar/NavBar';
import React from 'react';

function App() {
	return (
		<>
			<NavBar />
      <div className='d-flex justify-content-center py-4'>
        <ItemListContainer />
      </div>
			<ItemDetailContainer />
		</>
	);
}

export default App;
