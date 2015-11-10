/**
 * Created by alanlucian on 11/8/15.
 */

Number.prototype.formatMoney = function( currencyId){
    if(currencyId == "BRL"){
        return this.toFixed(2).replace(/\./,",").replace(/(\d)(?=(\d{3})+,)/g, '$1.');
    }
    return this.toFixed(2).replace(/(\d)(?=(\d{3})+.)/g, '$1.');
};

$.addTemplateFormatter({


    AddPrefix : function(value, prefix) {
        return prefix+value;
    },
    AddSufix : function(value, sufix) {
        return value + sufix;
    }
});


var VIEW_CONFIG= {
    productImagePath: "images/product/",
    listItemTemplate: "assets/product.tpl.html",
    cartItemTemplate: "assets/cart-item.tpl.html"
};

