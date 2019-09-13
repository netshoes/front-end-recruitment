import React, { useState } from 'react';

export default function Recipe({ product }) {
	const { id, sku, title } = product;
	/*
    Available properties on destructing:
    id, sku, title, description, availableSizes": ["S","G","GG","GGG"],
    style, price, installments, currencyId, currencyFormat, isFreeShipping
    */

	return (
		<React.Fragment>
			<div>
				<div className="card">
					<h6>{title}</h6>
					<img src={`./assets/${id}.jpg`} />
				</div>
			</div>
		</React.Fragment>
	);
}
