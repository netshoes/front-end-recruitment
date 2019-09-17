import React, { useContext } from 'react';
import { StoreContext } from '../context/index';

export default function CartItem({ product }) {
	const { availableSizes, id, price, quantity, style, title } = product;

	const appContext = useContext(StoreContext);
	const { openCart } = appContext;

	return (
		<React.Fragment>
			<div className="cart__item" style={{ display: openCart ? 'flex' : 'none' }}>
				<img className="cart__item--image" src={`./assets/${id}.jpg`} alt={`produto ${id}`} />
				<div className="cart__item--info">
					<p className="cart__item--info--title">{title}</p>
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
					<p className="cart__item--info--quantity">
						Quantidade: {quantity}
						<span className="cart__item--info--price">
							R$ {parseFloat(quantity * price).toFixed(2).replace('.', ',')}
						</span>
					</p>
				</div>
			</div>
		</React.Fragment>
	);
}
