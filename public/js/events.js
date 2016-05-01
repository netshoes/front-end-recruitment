(function() {

    'use strict';

    Mustache.Formatters = {
        'formatPrice' : store.product.formatPrice,
        'calculateInstallments' : function(price, installments) {
            return price / installments;
        }
    };

    $(document).ready(function() {
        store.product.fetch();
    });

    $(document).on('change', '[data-product-sizes]', function(e) {
        store.product.resetValidation(
            $(this)
        );
    });

    $(document).on('click', '[data-add-to-bag]', function(e) {
        e.preventDefault();

        store.product.addToBag(
            $(this)
        );
    });

    $(document).on('bag-show', function() {
        store.bag.show();
    });

    $(document).on('click', '[data-bag-item-remove]', function() {
        store.bag.remove(
            $(this)
        );
    });

    $(document).on('mouseover', '[data-bag-item-remove]', function() {
        $(this).closest('[data-bag-item]').addClass('removing');
    });

    $(document).on('mouseleave', '[data-bag-item-remove]', function() {
        $(this).closest('[data-bag-item]').removeClass('removing');
    });

}(jQuery));
