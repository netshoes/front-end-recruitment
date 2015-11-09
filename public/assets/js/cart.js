/**
 * Created by alanlucian on 11/9/15.
 */


var CartModule = (function ( cartContainer , cartItemTemplate) {

    // Time in minutes
    var cartCacheDuration =  60;

    var cartItens = [];

    var cacheVarCart = "CART_ITENS";
    var cacheVarTime = "CART_TIMESTAMP";
    var cartContainerSelector = cartContainer;
    var cartItemTemplate = cartItemTemplate;

    /* Persist data  */
    function saveData(){
        var saveData = [];
        //console.log(cartItens );

        //
        //for( var i in cartItens ){
        //    //console.log(cartItens[i], JSON.stringify( cartItens[i]));
        //    saveData.push( JSON.stringify( cartItens[i]));
        //}
        saveData = (JSON.stringify( cartItens));
//console.log( JSON.stringify(cartItens) );
        localStorage.setItem( cacheVarCart , saveData );
        refreshCartExpirarion();
    }

    function loadCachedData(){
        cartItens = JSON.parse( localStorage[cacheVarCart] );
        refreshCartExpirarion();
    }
    function checkCacheIsValid(){


        if(localStorage[cacheVarTime] == undefined) return false;

        var diff =  new Date().getTime() - parseInt( localStorage[cacheVarTime]) ;
        console.log( "Cache time:", new Date(parseInt( localStorage[cacheVarTime])) , "Durantion in Minutes", cartCacheDuration);
        diff =  diff / 1000 / 60  ;

        return diff < cartCacheDuration ? true : false ;

    }

    function refreshCartExpirarion(){
        localStorage.setItem( cacheVarTime , new Date().getTime() );
    }

    function clearAllCartData(){
        cartItens = new Array();
        localStorage.removeItem(cacheVarCart);
        localStorage.removeItem(cacheVarTime);
    }

    function renderCartData(data){


            for( var i in cartItens) {

                var productInfo = cartItens[i].data;
                productInfo.quantity = cartItens[i].quantity

                console.log(cartContainer, cartItemTemplate, data);

                $(cartContainerSelector).loadTemplate(cartItemTemplate, productInfo,
                    {
                        overwriteCache: true,
                        append: true,

                        complete: (i==cartItens.length-1)? bindEvents: null,  //  at the last item BindEvents when template load is complete
                        //bindingOptions: {"ignoreUndefined": true, "ignoreNull": true}
                    });
            }

    }

    function bindEvents(){

    }

    /* Parses product info to add to the cart*/
    function parseProductData( productData ){
        var product;
        for (var i in productData) {
            if (productData[i].name == "product-info") {
                product = $.parseJSON( productData[i].value);
                continue;
            }

            product[productData[i].name] = productData[i].value;

        }

        return product;
    }

    return {
        setCacheDuration: function ( minutes ){
            cartCacheDuration = minutes ;
        },
        addProduct: function (productData) {
            var product = parseProductData( productData );

            console.log(product);

            var productAdded = false;
            for( var inCartProduct in cartItens ){
                // identical product found, increment quantity
                if( JSON.stringify(  cartItens[inCartProduct].data) == JSON.stringify( product)){
                    cartItens[inCartProduct].quantity+=1;
                    productAdded = true;
                }
            }

            if(!productAdded ){
                cartItens.push( {data: product , quantity:1});
            }

            console.log(cartItens);
            saveData();
        },

        loadData:function(){

            if( !checkCacheIsValid()){
                console.log("expired cache");
                clearAllCartData();
                return;
            }

            loadCachedData();
            renderCartData( cartItens );

        }

    }


})("#cart-products", "assets/cart-item.tpl.html" );
$(function() {
    CartModule.setCacheDuration(10);
    CartModule.loadData();


    $('#cartToggle').click(function(e){
        var $parent = $(this).parent('#cart-container');
        $parent.toggleClass("open");
        setTimeout(function(){
            $('#cartToggle').toggleClass("cartOpen");
        }, 200);
        e.preventDefault();
    });
});


