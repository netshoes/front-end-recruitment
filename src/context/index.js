import React, { useState, useEffect } from 'react';
import axios from 'axios';

const StoreContext = React.createContext();
const StoreProvider = (props) => {
	let api = `http://localhost:8001/products`;
	const [ cart, setCart ] = useState([]);
	const [ error, setError ] = useState(false);
	const [ loading, setLoading ] = useState(true);
	const [ openCart, setOpenCart ] = useState(false);
	const [ products, setProducts ] = useState([]);
	const [ amount, setAmount ] = useState(0);
	const [ subtotal, setSubtotal ] = useState(0);

	const addProductToCart = (product, cart) => {
		const updatedCart = [ ...cart ];
		const updatedItemIndex = updatedCart.findIndex((item) => item.id === product.id);
		let updatedItem;

		if (updatedItemIndex < 0) {
			updatedCart.push({ ...product, quantity: 1 });
		} else {
			updatedItem = updatedCart[updatedItemIndex];
			updatedItem.quantity++;
			updatedCart[updatedItemIndex] = updatedItem;
		}
		setCart(updatedCart);
		setAmount(amount + 1);
		setSubtotal(subtotal + product.price);
		setOpenCart(true);
	};

	const removeProductFromCart = (product, cart) => {
		const updatedCart = [ ...cart ];
		const updatedItemIndex = updatedCart.findIndex((item) => item.id === product.id);

		const updatedItem = {
			...updatedCart[updatedItemIndex]
		};
		updatedItem.quantity--;
		if (updatedItem.quantity <= 0) {
			updatedCart.splice(updatedItemIndex, 1);
		} else {
			updatedCart[updatedItemIndex] = updatedItem;
		}
		setCart(updatedCart);
		setAmount(amount - 1);
	};

	const toogleCart = () => {
		if (document.querySelector('.cart')) {
			setOpenCart(!openCart);
		}
	};

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
				addProductToCart,
				amount,
				cart,
				error,
				loading,
				openCart,
				removeProductFromCart,
				products,
				subtotal,
				toogleCart
			}}
		>
			{props.children}
		</StoreContext.Provider>
	);
};

const StoreConsumer = StoreContext.Consumer;
export { StoreProvider, StoreConsumer, StoreContext };
