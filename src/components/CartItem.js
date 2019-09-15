import React, { useContext } from 'react';
import { StoreContext } from '../context/index';

export default function CartItem({ product }) {
	const { availableSizes, id, price, quantity, style, title } = product;

	return (
		<React.Fragment>
			<div className="cart__item">
				<img className="cart__item--image" src={`./assets/${id}.jpg`} />
				<div className="cart__item--info">
					<p className="cart__item--info--title">{title}</p>
					<p className="cart__item--info--size-style">
						{availableSizes[0]} | {style}
					</p>
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
