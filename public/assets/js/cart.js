/**
 * Created by alanlucian on 11/9/15.
 */


var CartModule = (function ( cartContainerSelector, cartProductListSelector, cartItemTemplate) {

    // Time in minutes
    var cartCacheDuration =  60;

    var cartItens = [];

    var cacheVarCart = "CART_ITENS";
    var cacheVarTime = "CART_TIMESTAMP";
    var cartProductListSelector = cartProductListSelector;
    var cartContainerSelector = cartContainerSelector;
    var cartItemTemplate = cartItemTemplate;

    /* Persist data  */
    function saveData(){

        var saveData = (JSON.stringify( cartItens));

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

    function renderCartData(){
        for( var i in cartItens) {
            renderCartDataItem(cartItens[i],(i==cartItens.length-1));
        }
    }

    function renderCartDataItem(cartItem,completeEvent){
        typeof completeEvent !== 'undefined' ? completeEvent : false;

        var productInfo = Object.create(cartItem.data );
        productInfo.quantity = cartItem.quantity

        console.log(cartProductListSelector, cartItemTemplate, productInfo);

        $(cartProductListSelector).loadTemplate(cartItemTemplate, productInfo,
            {
                overwriteCache: true,
                append: true,
                complete: (completeEvent)? bindEvents: null  //  at the last item BindEvents when template load is complete
                //bindingOptions: {"ignoreUndefined": true, "ignoreNull": true}
            });
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
                console.log(JSON.stringify(cartItens[inCartProduct].data) , JSON.stringify( product ));
                if( JSON.stringify(  cartItens[inCartProduct].data) == JSON.stringify( product)){
                    cartItens[inCartProduct].quantity+=1;
                    productAdded = true;
                }
            }

            if(!productAdded ){
                cartItens.push( {data: product , quantity:1});
                //console.log( "?>" , cartItens[cartItens.length-1]);
                renderCartDataItem(cartItens[cartItens.length-1]);
            }

            console.log(cartItens);
            saveData();
            this.showCart();
        },

        loadData:function(){

            if( !checkCacheIsValid()){
                console.log("expired cache");
                clearAllCartData();
                return;
            }

            loadCachedData();
            renderCartData( cartItens );

        },

        showCart:function(){
            $(cartContainerSelector).addClass("open");
            setTimeout(function(){
                $('#cartToggle').addClass("cartOpen");
            }, 200);
        },
        hideCart:function(){
            $(cartContainerSelector).removeClass("open");
            setTimeout(function(){
                $('#cartToggle').removeClass("cartOpen");
            }, 200);
        }


    }


})('#cart-container',"#cart-products", "assets/cart-item.tpl.html" );
$(function() {
    CartModule.setCacheDuration(10);
    CartModule.loadData();
    $('html').click(function (e) {
        if (!e.target.id == 'cart-container') {
            CartModule.hideCart()
        }
    });
    $("#cart-container").mouseleave(function(){
        CartModule.hideCart();
    });
    $('#cartToggle').click(function(e){
        CartModule.showCart();
    });
});


