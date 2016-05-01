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
                }

                for (var index in response.products) {
                    if (bag[response.products[index].sku]) {
                        product = response.products[index];
                        product.quantity = bag[product.sku].quantity;
                        product.size = bag[product.sku].size;
                        items.products.push(product);
                        items.subtotal.price += response.products[index].price;
                        items.subtotal.installments = response.products[index].installments;
                    }
                }

                var result = Mustache.render(template, items);

                $('[data-bag]').html(result);
                $('html,body').animate({ scrollTop: 0});
                $('.page').addClass('active');
            });
        },

        'remove' : function(element) {
            $.ajax({
                'url': 'data/success.json',
                'type': 'GET',
                'dataType': 'json',
                'success': $.proxy(this, 'removeFromLocalStorage', element)
            });
        },

        'removeFromLocalStorage' : function(element) {
            var sku = element.data('bagItemRemove');
            var bag = JSON.parse(localStorage.getItem('bag'));

            element.closest('[data-bag-item]').fadeOut(300, function() {
                element.remove();
            });

            delete bag[sku];

            localStorage.setItem('bag', JSON.stringify(bag));
        }
    };

}(jQuery));

