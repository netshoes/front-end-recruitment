import React, { useContext } from 'react';
import { StoreContext } from '../context/index';

export default function CartItem({ product }) {
	const { availableSizes, id, price, quantity, style, title } = product;

	const appContext = useContext(StoreContext);
	const { addProductToCart, removeProductFromCart, cart, openCart, spliceFromCart } = appContext;

	//function for change the item style on cart when user hover remove
	const changeOnRemoveHover = (event, mouseact) => {
		let cart_item = event.target.parentNode.parentNode.parentNode;
		if (!cart_item.classList.contains('cart__item__delete') && mouseact === 'hover-remove') {
			cart_item.className += ' cart__item__delete';
		} else if (mouseact === 'leaving-remove') {
			cart_item.classList.remove('cart__item__delete');
		}
	};

	return (
		<React.Fragment>
			<div className="cart__item" style={{ display: openCart ? 'flex' : 'none' }}>
				<img className="cart__item--image" src={`./assets/${id}.jpg`} alt={`produto ${id}`} />
				<div className="cart__item--info">
					<p className="cart__item--info--title">
						{title}
						<span
							className="cart__item--remove"
							onMouseOver={(event) => changeOnRemoveHover(event, 'hover-remove')}
							onMouseOut={(event) => changeOnRemoveHover(event, 'leaving-remove')}
							onClick={() => spliceFromCart(product, cart)}
						>
							X
						</span>
					</p>
					<select className="cart__item--info--size">
						{availableSizes.map((size) => {
							return (
								<option key={size} value={size}>
									{size}
								</option>
							);
						})}
					</select>
					<p className="cart__item--info--style"> | {style}</p>
					<div className="cart__item--info--quantity">
						<p>Quantidade: {quantity}</p>
						<div className="cart__item--info--quantity--input">
							<p
								className="cart__item--info--quantity--minus"
								onClick={() => {
									removeProductFromCart(product, cart);
								}}
							>
								-
							</p>
							<input value={quantity} />
							<p
								className="cart__item--info--quantity--plus"
								onClick={() => {
									addProductToCart(product, cart);
								}}
							>
								+
							</p>
						</div>
						<span className="cart__item--info--price">
							R$ {parseFloat(quantity * price).toFixed(2).replace('.', ',')}
						</span>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
}
