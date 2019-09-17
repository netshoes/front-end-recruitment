import React, { useState, useEffect } from 'react';
import axios from 'axios';
import baseURL from '../config/const';

const StoreContext = React.createContext();
const StoreProvider = (props) => {
	let api = baseURL;
	const [ cart, setCart ] = useState({
		amount: 0,
		products: [],
		subtotal: 0
	});
	const [ error, setError ] = useState(false);
	const [ loading, setLoading ] = useState(true);
	const [ openCart, setOpenCart ] = useState(false);
	const [ products, setProducts ] = useState([]);

	const addProductToCart = (product, cart) => {
		const updatedCart = cart;
		const updatedItemIndex = updatedCart.products.findIndex((item) => item.id === product.id);
		let updatedItem;

		if (updatedItemIndex < 0) {
			updatedCart.products.push({ ...product, quantity: 1 });
		} else {
			updatedItem = updatedCart.products[updatedItemIndex];
			updatedItem.quantity++;
			updatedCart[updatedItemIndex] = updatedItem.products;
		}

		updatedCart.subtotal += product.price;
		updatedCart.amount++;

		setOpenCart(true);
		setCart(updatedCart);
		localStorage.setItem('cart-netshoes', JSON.stringify({ updatedCart }));
	};

	const removeProductFromCart = (product, cart) => {
		const updatedCart = cart;
		const updatedItemIndex = updatedCart.products.findIndex((item) => item.id === product.id);

		const updatedItem = updatedCart.products[updatedItemIndex];

		updatedItem.quantity--;
		if (updatedItem.quantity <= 0) {
			updatedCart.products.splice(updatedItemIndex, 1);
		} else {
			updatedCart.products[updatedItemIndex] = updatedItem;
		}
		updatedCart.amount--;

		setCart(updatedCart);
		localStorage.setItem('cart-netshoes', JSON.stringify({ updatedCart }));
	};

	const toogleCart = () => {
		setOpenCart(!openCart);
	};

	const fetchProducts = async () => {
		setError(false);
		setLoading(true);
		try {
			const result = await axios(api);
			setProducts(result.data);
			localStorage.setItem('products-list-netshoes', JSON.stringify(result.data));
		} catch (error) {
			setError(true);
		}
		setLoading(false);
	};

	const persistedData = async () => {
		if (localStorage.getItem('products-list-netshoes')) {
			setProducts(JSON.parse(localStorage.getItem('products-list-netshoes')));
		}
		if (localStorage.getItem('cart-netshoes')) {
			setCart(JSON.parse(localStorage.getItem('cart-netshoes')).updatedCart);
		}

		setLoading(false);
	};

	useEffect(() => {
		if (localStorage.getItem('products-list-netshoes') || localStorage.getItem('cart-netshoes')) {
			persistedData();
		}
		if (!localStorage.getItem('products-list-netshoes')) {
			fetchProducts();
		}
	}, []);

	return (
		<StoreContext.Provider
			value={{
				addProductToCart,
				cart,
				error,
				loading,
				removeProductFromCart,
				openCart,
				products,
				toogleCart
			}}
		>
			{props.children}
		</StoreContext.Provider>
	);
};

const StoreConsumer = StoreContext.Consumer;
export { StoreProvider, StoreConsumer, StoreContext };
