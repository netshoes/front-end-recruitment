import React, { useContext } from 'react';
import Product from './Product';
import { StoreContext } from '../context/index';

export default function ProductList() {
	const appContext = useContext(StoreContext);
	const { products, toogleCart } = appContext;

	return (
		<React.Fragment>
			<div className="products-list" onClick={() => toogleCart()}>
				{products.map((product) => {
					return <Product key={product.id} product={product} />;
				})}
			</div>
		</React.Fragment>
	);
}
