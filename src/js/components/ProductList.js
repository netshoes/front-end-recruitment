let React = require('react');
let Product = require('./Product');

let ProductList = React.createClass({
	render: function() {
		let products = this.props.products.map((product, i) => {
			return (<Product product={product} key={i} />);
		});

		return(
			<section className="products">
				<ul id="products" className="products-list">
					{products}
				</ul>
			</section>);
	}
});

module.exports = ProductList;