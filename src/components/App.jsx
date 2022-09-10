import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemDetailContainer from './ItemDetailContainer';
import ItemListContainer from './ItemListContainer/ItemListContainer';
import NavBar from './NavBar/NavBar';
import React from 'react';

function App() {
	return (
		<BrowserRouter>
			<NavBar />	
			<Routes>
				<Route path='/' element={<div className='py-4 d-flex justify-content-center'><ItemListContainer/></div>}></Route>
				<Route path='/productos' element={<div className='py-4 d-flex justify-content-center'><ItemListContainer/></div>}></Route>
				<Route path='/detalles/:id' element={<ItemDetailContainer/>}></Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
