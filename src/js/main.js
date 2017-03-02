let React = require('react');
let ReactDOM = require('react-dom');
let NetshoesCart = require('./components/NetshoesCart');
let ProductData = require('./utils/ProductData');

ProductData.getSelected();
ProductData.get();

ReactDOM.render(
	<NetshoesCart />,
    document.getElementById('ns-cart')
);