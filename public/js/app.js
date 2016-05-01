(function($) {

    'use strict';

    $(document).ready(function() {
        $.getJSON('data/products.json', function(response) {
            var template = $('#product-list').html();
            var products = Mustache.render(template, response);

            $('[data-product-list]').html(products);
        });
    });

    $(document).on('click', '[data-add-to-bag]', function() {
        $.post('data/add.json', function(response) {});
    });

}(jQuery));
