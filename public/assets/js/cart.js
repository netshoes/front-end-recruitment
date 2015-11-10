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
            renderCartDataItem(cartItens[i]);
        }
    }

    function renderCartDataItem(cartItem){
        completeEvent  = typeof completeEvent !== 'undefined' ? completeEvent : false;

        var productInfo = Object.create(cartItem.data );
        productInfo.quantity = cartItem.quantity
        productInfo.JSONString = JSON.stringify(cartItem.data );
        $(cartProductListSelector).loadTemplate(cartItemTemplate, productInfo,
            {
                overwriteCache: true,
                append: true,
                complete:bindEvents
            });

        refreshNumbers()
    }

    function refreshNumbers(){
        $(".cart-item-count").html(cartItens.length);

        var totalPrice = 0;
        var minInstallments  ;
        var currencyID;
        var currencyFormat;

        for( var i in cartItens){
            totalPrice+= cartItens[i].data.price * cartItens[i].quantity;
            currencyID = cartItens[i].data.currencyId;
            currencyFormat = cartItens[i].data.currencyFormat;
            if( minInstallments == undefined || minInstallments > cartItens[i].data.installments ){
                minInstallments = cartItens[i].data.installments ;
            }
        }

        console.log(  totalPrice, minInstallments );
        $("#cart-total-price").html( totalPrice ) ;
        $("#cart-instalments").html( minInstallments );
        $("#cart-instalments-value").html(
            currencyFormat + " " +
            ( totalPrice / minInstallments ).formatMoney(currencyID)
        ) ;
    }

    function updateCartItemUIQuantity( productIndex){
        var quantityElm = $(".cart-item-quantity").eq(productIndex);
        quantityElm.html(cartItens[productIndex].quantity);
        $(cartContainerSelector).animate({
            scrollTop: quantityElm.offset().top
        }, 200);
        setTimeout(function(){
            quantityElm.toggleClass("highlight");
        },250);
        setTimeout(function(){
            quantityElm.toggleClass("highlight");
        },1000);

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

    function bindEvents(){
        console.log("Bnd");
        $(".cart-item-remove").unbind();
        $(".cart-item-remove").on( "mouseenter", function(){
            $(this).parents("article").addClass("removeItemFromCart");
        });
        $(".cart-item-remove").on( "mouseleave", function(){
            $(this).parents("article").removeClass("removeItemFromCart");
        });

        $(".cart-item-remove").click(function(){
           CartModule.removeProduct( $(this).parents("article").data("product-info"));
        });

    }

    return {
        setCacheDuration: function ( minutes ){
            cartCacheDuration = minutes ;
        },
        removeProduct:function(productData){
            console.log(productData);
            for( var productIndex in cartItens ){

                if( JSON.stringify(  cartItens[productIndex].data) == JSON.stringify( productData)){
                    cartItens.splice( productIndex, 1);
                    console.log(cartItens);
                    var selector = $("#cart-content article").eq(productIndex).remove();
                    refreshNumbers();
                    saveData();
                }
            }
        }
        ,
        addProduct: function (productData) {
            var product = parseProductData( productData );

            console.log(product);

            var productAdded = false;
            for( var productIndex in cartItens ){
                // identical product found, increment quantity
                //console.log(JSON.stringify(cartItens[inCartProduct].data) , JSON.stringify( product ));
                if( JSON.stringify(  cartItens[productIndex].data) == JSON.stringify( product)){
                    cartItens[productIndex].quantity+=1;
                    console.log(productIndex);
                    updateCartItemUIQuantity(productIndex);

                    //}
                    productAdded = true;
                }
            }

            if(!productAdded ){

                cartItens.push( {data: product , quantity:1});

                renderCartDataItem(cartItens[cartItens.length-1]);

            }

            console.log(cartItens);
            refreshNumbers();
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
    $("#cart-container").mouseleave(function(){
        //CartModule.hideCart();
    });
    $('#cartToggle').click(function(e){
        CartModule.showCart();
    });



});


