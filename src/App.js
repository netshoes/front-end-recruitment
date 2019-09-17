import React, { useContext } from 'react';
import Cart from './components/Cart';
import ProductList from './components/ProductList';
import { StoreContext } from './context/index';
import './sass/main.scss';

function App() {
	const appContext = useContext(StoreContext);
	const { loading } = appContext;
	return (
		<React.Fragment>
			{loading ? (
				<h1> Loading... </h1>
			) : (
				<React.Fragment>
					<ProductList />
					<Cart />
				</React.Fragment>
			)}
		</React.Fragment>
	);
}

export default App;
