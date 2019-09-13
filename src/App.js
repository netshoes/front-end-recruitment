import React, { useContext } from 'react';
import ProductList from './components/ProductList';
import { StoreContext } from './context/index';
import './App.scss';

function App() {
	const appContext = useContext(StoreContext);
	const { loading } = appContext;
	return <div>{loading ? <h1> fetching products... </h1> : <ProductList />}</div>;
}

export default App;
