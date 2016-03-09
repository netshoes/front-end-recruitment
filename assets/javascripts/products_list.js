// API CONNECTION
var API = {
  // global API getJSON function
  getJSON: function(url) {

    var resp;
    var xmlHttp;

    resp  = '';
    xmlHttp = new XMLHttpRequest();

    if(xmlHttp != null) {
      xmlHttp.open( "GET", url, false );
      xmlHttp.send( null );

      resp = xmlHttp.responseText;
      resp = JSON.parse( resp );
    }

    return resp;
  },

  products: function() {
    var url = "public/data/products.json";
    var resp = this.getJSON( url );

    return resp;
  },
};

var Products = _.map(API.products(), function(data){
  var html = '';
  var $productsContainer = $('.products__list');
  for ( var i = 0; i < data.length; i++ ) {
    var item = data[i];
    html += '<li class="list__item" data-index="' + i + '">';
    html +=   '<figure class="item__figure"></figure>'
    html +=   '<h5 class="item__title">' + item.title + '</h5>';
    html +=   '<div class="item__price">';
    html +=     '' + item.currencyFormat + ' <strong>' + item.price.toFixed(2).replace('.',',') + '</strong>';
    html +=     '<br/>';
    html +=     '<small>ou em 10x de' + item.currencyFormat + ' ' + ( (item.price / 2).toFixed(2).replace('.',',') ) + '</small>';
    html +=     '<div class="price__line-top"></div>'
    html +=     '</br>'
    html +=     '</br>'
    html +=     '<button class="btn btn_dark btn_block item__add-to-cart" data-index="' + i + '" type="button">Adicionar ao carrinho</button>'
    html +=     '</br>'
    html +=   '</div>';
    html += '</li>';
  };

  if ( html != '' ) {
    $productsContainer.append( html );
  }
});

function addToCart() {
  var $list = $('.list__item');
  var $btnAdd = $list.find('.item__add-to-cart');

  //add to the cart
  $(document).on('click', '.item__add-to-cart', function(){
    var $index = $(this).data('index');
    var $cartList = $('.cart').find('.cart__list');

    _.map(API.products(), function(data){
      var html = '';
      var $productsContainer = $('.products__list');
      var item = data[$index];
      html += '<li class="list__item" style="display: none;" data-index="' + $index + '">';
      html +=   '<div class="item__remove">x</div>';
      html +=   '<figure class="item__figure"></figure>'
      html +=   '<h5 class="item__title">' + item.title + '';
      html +=     '<div class="title__details">' + item.style + '</div>';
      html +=     '<br/>';
      html +=     '<br/>';
      html +=   '</h5>';
      html +=   '<div class="item__price" data-price="' + item.price + '">';
      html +=     '' + item.currencyFormat + ' <strong>' + item.price.toFixed(2).replace('.',',') + '</strong>';
      html +=   '</div>';
      html += '</li>';

      if ( html != '' ) {
        $cartList.prepend( html );
        $cartList.find('[data-index=' + $index + ']').slideDown(200);
      }
    });

    counterCart();
  });

  // remove from cart
  $(document).on('click', '.item__remove', function(){
    var $index = $(this).parent().data('index');
    var $parent = $(this).parent();
    $parent.slideUp(200, function(){
      $(this).remove();
      counterCart();
    });

  });

  // items counter for cart
  function counterCart() {
    var $cartHeader = $('.cart__header');
    var $numberCounted = $('.cart').find('.cart__list').children().length;
    $cartHeader.find('span').attr('data-count', $numberCounted);

    calcPrice();
  }

  function calcPrice() {
    var $cartTotal = $('.cart__subtotal');
    var $countChildren = $('.cart__list').find('.item__price');
    var arrayData = _.map($countChildren, function(e){
      return $(e).attr('data-price');
    });
    var totalValue = 0;
    $.each(arrayData,function() {
      totalValue += Number(this);
    });
    if (totalValue > 0) {
      $cartTotal.find('.subtotal__value strong').text(totalValue.toFixed(2).replace('.',','));
      $cartTotal.find('.subtotal__value small').text( 'ou em até 10x de R$' + (totalValue / 10).toFixed(2).replace('.',',') );
    } else {
      $cartTotal.find('.subtotal__value strong').text('0,00');
      $cartTotal.find('.subtotal__value small').text('');
    }
  }
};

addToCart();

