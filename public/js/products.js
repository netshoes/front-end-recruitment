(function($) {

    'use strict';

    store.product = {
        'fetch' : function() {
            $.getJSON('data/products.json', function(response) {
                var template = $('#products-template').html();
                var products = Mustache.render(template, response);

                $('[data-products]').html(products);
            });
        },

        'addToBag' : function(element) {
            var $productItem = element.closest('[data-product-item]');
            var size = element.prevAll('[data-product-sizes]').val();

            $productItem.removeClass('error');

            if (size === 'false') {
                return $productItem.addClass('error');
            }

            $.ajax({
                'url': 'data/success.json',
                'type': 'GET',
                'dataType': 'json',
                'success': $.proxy(this, 'saveBagToLocalStorage', element)
            });
        },

        'saveBagToLocalStorage' : function(element) {
            var bag = JSON.parse(localStorage.getItem('bag')) || {};
            var sku = element.data('addToBag');
            var size = element.prevAll('[data-product-sizes]').val();
            var quantity = 1;

            if (bag[sku]) {
                quantity = bag[sku].quantity + 1;
            }

            bag[sku] = {
                'quantity' : quantity,
                'size' : size
            };

            localStorage.setItem('bag', JSON.stringify(bag));

            $(document).trigger('show-bag');
        },

        'resetValidation' : function(element) {
            element.closest('[data-product-item]').removeClass('error');
        }
    };

}(jQuery));
