(function($) {

    'use strict';

    $(document).on('show-bag', function() {
        $.getJSON('data/products.json', function(response) {
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
                if (bag[response.products[index].id]) {
                    items.products.push(response.products[index]);
                    items.subtotal.price += response.products[index].price;
                    items.subtotal.installments = response.products[index].installments;
                }
            }

            var result = Mustache.render(template, items);

            $('[data-bag]').html(result);
            $('.page').addClass('active');
            $('html,body').animate({ scrollTop: 0});
        });
    });

    $(document).on('click', '[data-bag-item-remove]', function() {
        var element = $(this);
        var id = $(this).data('bagItemRemove');

        $.ajax({
            'url': 'data/success.json',
            'type': 'GET',
            'dataType': 'json',
            'success': function(response) {
                var bag = JSON.parse(localStorage.getItem('bag'));

                element.closest('[data-bag-item]').fadeOut(300, function() {
                    element.remove();
                });

                delete bag[id];

                localStorage.setItem('bag', JSON.stringify(bag));
            }
        });
    });

    $(document).on('mouseover', '[data-bag-item-remove]', function() {
        $(this).closest('[data-bag-item]').addClass('removing');
    });

    $(document).on('mouseleave', '[data-bag-item-remove]', function() {
        $(this).closest('[data-bag-item]').removeClass('removing');
    });

}(jQuery));

