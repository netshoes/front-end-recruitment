import React, { useContext } from 'react';
import ProductList from './components/ProductList';
import { StoreContext } from './context/index';
import './sass/main.scss';

function App() {
	const appContext = useContext(StoreContext);
	const { loading } = appContext;
	return <React.Fragment>{loading ? <h1> fetching products... </h1> : <ProductList />}</React.Fragment>;
}

export default App;
