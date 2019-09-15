import React, { useContext } from 'react';
import { StoreContext } from '../context/index';
import CartItem from './CartItem';
import { ReactComponent as SacolaLogo } from './sacola.svg';

export default function Cart() {
	const appContext = useContext(StoreContext);
	const { amount, cart, openCart, subtotal } = appContext;

	return !openCart ? (
		<React.Fragment>
			<div className="cart__hidden" />
		</React.Fragment>
	) : (
		<React.Fragment>
			<div className="cart">
				<div className="cart__title">
					<SacolaLogo className="cart__title--logo" />
					<p className="cart__title--text">
						SACOLA
						<span className="cart__title--amount">{amount}</span>
					</p>
				</div>
				<div className={`cart__list  ${cart.length >= 4 ? 'cart__list--scroll' : ''}`}>
					{cart.map((product) => {
						return <CartItem key={product.id} product={product} />;
					})}
				</div>
				<div className="cart__subtotal">
					<p className="cart__subtotal--1st">SUBTOTAL</p>
					<p className="cart__subtotal--2nd">
						R$
						{parseFloat(subtotal).toFixed(2).replace('.', ',')}
						<span className="cart__subtotal--2nd--installments">
							OU EM ATÉ 10 X R$ {parseFloat(subtotal / 10).toFixed(2).replace('.', ',')}
						</span>
					</p>
				</div>
				<button className="cart__checkout">COMPRAR</button>
			</div>
		</React.Fragment>
	);
}
