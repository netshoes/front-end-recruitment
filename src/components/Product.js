import React, { useContext } from 'react';
import { StoreContext } from '../context/index';

export default function Product({ product }) {
	const { id, installments, price, title } = product;

	let price_splitted = String(parseFloat(Math.round(price * 100) / 100).toFixed(2)).split('.');
	/*
    Available properties on destructing:
    id, sku, title, description, availableSizes": ["S","G","GG","GGG"],
    style, price, installments, currencyId, currencyFormat, isFreeShipping
    */
	const appContext = useContext(StoreContext);
	const { addProductToCart, removeProductFromCart, cart, toogleCart } = appContext;
	return (
		<React.Fragment>
			<div className="product">
				<img
					className="product__image"
					src={`./assets/${id}.jpg`}
					alt={`produto ${id}`}
					onClick={() => {
						if (document.querySelector('.cart__hidden')) {
							addProductToCart(product, cart);
						} else {
							toogleCart();
						}
					}}
				/>
				<p className="product__title" onClick={() => removeProductFromCart(product, cart)}>
					{title}
				</p>
				<div className="product__price">
					<p className="product__price--topline" />
					R${' '}
					<span className="product__price--second-1">
						{price_splitted[0]}
						<span className="product__price--second-2">,{price_splitted[1]}</span>
					</span>
				</div>
				<p className="product__installment">
					ou {installments} x R$ {parseFloat(Math.round(price / installments)).toFixed(2).replace('.', ',')}
				</p>
			</div>
		</React.Fragment>
	);
}
