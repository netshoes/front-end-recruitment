(function() {

    'use strict';

    $(document).ready(function() {
        store.product.fetch();
    });

    $(document).on('change', '[data-product-sizes]', function(e) {
        var element = $(this);

        store.product.resetValidation(element);
    });

    $(document).on('click', '[data-add-to-bag]', function(e) {
        e.preventDefault();

        var element = $(this);

        store.product.addToBag(element);
    });

    $(document).on('show-bag', function() {
        store.bag.show();
    });

    $(document).on('click', '[data-bag-item-remove]', function() {
        var element = $(this);

        store.bag.remove(element);
    });

    $(document).on('mouseover', '[data-bag-item-remove]', function() {
        $(this).closest('[data-bag-item]').addClass('removing');
    });

    $(document).on('mouseleave', '[data-bag-item-remove]', function() {
        $(this).closest('[data-bag-item]').removeClass('removing');
    });

}(jQuery));
