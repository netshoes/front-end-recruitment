var _splitValue = function(value) {
	var splitedPrice = value.toFixed(2).split('.');
	var integer = splitedPrice[0];
	var cents = splitedPrice[1];

	return {
		integer,
		cents
	}
};

module.exports = {
	formatPrice: function (price) {
		var value = _splitValue(price);

		return `${value.integer},${value.cents}`;
	},
	splitPrice: function (price) {
		return _splitValue(price);
	}
};