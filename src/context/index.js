import React, { useState, useEffect } from 'react';
import axios from 'axios';

const StoreContext = React.createContext();
const StoreProvider = (props) => {
	let api = `http://localhost:8001/products`;
	const [ loading, setLoading ] = useState(true);
	const [ error, setError ] = useState(false);
	const [ products, setProducts ] = useState([]);
	const fetchProducts = async () => {
		setError(false);
		setLoading(true);
		try {
			const result = await axios(api);
			setProducts(result.data);
		} catch (error) {
			setError(true);
		}
		setLoading(false);
	};

	useEffect(() => {
		fetchProducts();
	}, []);

	return (
		<StoreContext.Provider
			value={{
				loading,
				products
			}}
		>
			{props.children}
		</StoreContext.Provider>
	);
};

const StoreConsumer = StoreContext.Consumer;
export { StoreProvider, StoreConsumer, StoreContext };
