(function($) {

    'use strict';

    $(document).ready(function() {
        $.getJSON('data/products.json', function(response) {
            var template = $('#products-template').html();
            var products = Mustache.render(template, response);

            $('[data-products]').html(products);
        });
    });

    $(document).on('click', '[data-add-to-bag]', function(e) {
        e.preventDefault();

        var id = $(this).data('addToBag');

        $.ajax({
            'url': 'data/success.json',
            'type': 'GET',
            'dataType': 'json',
            'success': function(response) {
                var bag = JSON.parse(localStorage.getItem('bag')) || {};

                bag[id] = (bag[id]) ? bag[id] += 1 : 1;

                localStorage.setItem('bag', JSON.stringify(bag));

                $(document).trigger('show-bag');
            }
        });
    });

}(jQuery));
