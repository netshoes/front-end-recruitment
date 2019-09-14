import React, { useState } from 'react';

export default function Product({ product }) {
	const { id, installments, price, title } = product;

	let price_splitted = String(parseFloat(Math.round(price * 100) / 100).toFixed(2)).split('.');
	/*
    Available properties on destructing:
    id, sku, title, description, availableSizes": ["S","G","GG","GGG"],
    style, price, installments, currencyId, currencyFormat, isFreeShipping
    */

	return (
		<React.Fragment>
			<div className="product">
				<img className="product__image" src={`./assets/${id}.jpg`} />
				<p className="product__title">{title}</p>

				<p className="product__price">
					<p className="product__price--topline" />
					R${' '}
					<span className="product__price--second-1">
						{price_splitted[0]}
						<span className="product__price--second-2">,{price_splitted[1]}</span>
					</span>
				</p>
				<p className="product__installment">
					ou {installments} x R$ {parseFloat(Math.round(price / installments)).toFixed(2).replace('.', ',')}
				</p>
			</div>
		</React.Fragment>
	);
}
