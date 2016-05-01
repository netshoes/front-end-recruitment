(function($) {

    'use strict';

    store.bag = {
        'show' : function() {
            $.getJSON('data/products.json', function(response) {
                var product = {};
                var template = $('#bag-template').html();
                var bag = JSON.parse(localStorage.getItem('bag'));
                var items = {
                    'products' : [],
                    'subtotal' : {
                        'price' : 0,
                        'installments' : 0
                    }
                };

                for (var sku in response.products) {
                    if (bag[response.products[sku].sku]) {
                        product = response.products[sku];
                        product.quantity = bag[product.sku].quantity;
                        product.size = bag[product.sku].size;
                        items.subtotal.price += product.price * product.quantity;
                        items.subtotal.installments = response.products[sku].installments;
                        items.subtotal.quantity = Object.keys(bag).length;
                        items.products.push(product);
                    }
                }

                var result = Mustache.render(template, items);

                $('[data-bag]').html(result);
                $('.page').addClass('show-bag');
            });
        },

        'remove' : function(element) {
            var sku = element.data('bagItemRemove');
            var bag = JSON.parse(localStorage.getItem('bag'));
            var total = 0;

            element.closest('[data-bag-item]').fadeOut(300, function() {
                element.remove();
            });

            delete bag[sku];

            localStorage.setItem('bag', JSON.stringify(bag));

            if (jQuery.isEmptyObject(bag)) {
                window.location.reload(false);
            }

            for (var sku in bag) {
                total += bag[sku].price;
            }

            $('[data-bag-subtotal]').text(store.product.formatPrice(total));
            $('[data-bag-quantity]').text(Object.keys(bag).length);
        }
    };

}(jQuery));

