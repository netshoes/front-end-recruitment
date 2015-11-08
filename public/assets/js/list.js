/**
 * Created by alanlucian on 11/6/15.
 */

Number.prototype.formatMoney = function( currencyId){
    if(currencyId == "BRL"){
        return this.toFixed(2).replace(/\./,",").replace(/(\d)(?=(\d{3})+,)/g, '$1.');
    }
    return this.toFixed(2).replace(/(\d)(?=(\d{3})+.)/g, '$1.');
};

 function ListPage( dataPath , listContainerSelector, itemTemplatePath){
    // Private STATMENTS
    var self  = this;
    var itemTemplatePath = itemTemplatePath;
    var dataPath = dataPath;
    var listContainer = $("#"+listContainerSelector);
    var productList;

    function getData() {
        $.get( dataPath, parseData, "json"  );
    };

    //
    function parseData ( data ){
        console.log(data);
        productList = data;

        for ( var i =0 ; i < productList.products.length; i++){
            var product = productList.products[i];
            product.productPrice1 = product.price.toString().split(".")[0];
            product.productPrice2 = ","+product.price.toString().split(".")[1];
            product.installmentPrice = ( product.price / product.installments ).formatMoney(product.currencyId);
        }
        renderList();

    };

    function renderList(){
        for ( var i =0 ; i < productList.products.length; i++){
            console.log(productList.products[i]);
            listContainer.loadTemplate(itemTemplatePath, productList.products[i] , {overwriteCache: true, append: true});
        }
    }

    // PUBLIC STATMENTS
    this.show = function(){
            getData();
    };

    this.todo=function(){
        alert("public AF");
    };



}

//ListPage.prototype = (function() {
//
//    return {
//
//        constructor: ListPage,
//
//        show: function () {
//
//        }
//
//    };
//});


$(function() {
    var lp = new ListPage( "data/products.json", "product-list", "assets/product.tpl.html" );
    lp.show();

});
