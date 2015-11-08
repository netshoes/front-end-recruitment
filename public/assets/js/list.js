/**
 * Created by alanlucian on 11/6/15.
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

 function ListPage( dataPath , listContainerSelector, itemTemplatePath){
    // Private STATMENTS
    var self  = this;
    var itemTemplatePath = itemTemplatePath;
    var dataPath = dataPath;
    var listContainer = $("#"+listContainerSelector);
    var productList;
     var productDetails =  new Array();
var detailModalPrefix =  "productDetail_";
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
            product.modalDetailId = detailModalPrefix  + product.id ;
            product.JSONString = window.JSON.stringify(product);


        }
        renderList();

    };

    function renderList(){
        for ( var i =0 ; i < productList.products.length; i++){
            //console.log(productList.products[i]);
            listContainer.loadTemplate(itemTemplatePath, productList.products[i] , { overwriteCache : true, append: true});
        }

        setTimeout(bindEvents, 100);


    }

     function bindEvents(){
         $(".product-detail").each(function(){
             //console.log($(this).attr("id"));
             productDetails[$(this).attr("id")] =
                 $(this).dialog({
                     closeOnEscape: true,
                     draggable: false,
                     modal: true,
                     open: function(event, ui) {
                         $(".ui-dialog-titlebar-close").hide();
                         $(".ui-dialog-titlebar").hide();

                     },
                    autoOpen: false
                 });
         });

         $(".product .clickable").click(function(){
              var product_id =  $(this).parents("article").data("product-info").id ;
              productDetails[detailModalPrefix  + product_id].dialog( "open" );
             $('.ui-widget-overlay').click(function(){
                 //$(this).find(".dialog").dialog("close");
                 productDetails[detailModalPrefix  + product_id].dialog('close');
             });
         });

        //console.log(productDetails);
     }

    // PUBLIC STATMENTS
    this.show = function(){
            getData();
    };

    this.todo=function(){
        alert("public AF");
    };



}
$(function() {
    var lp = new ListPage( "data/products.json", "product-list", "assets/product.tpl.html" );
    lp.show();

});
