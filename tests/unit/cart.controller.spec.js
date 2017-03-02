describe("Cart Controller", function(){

  var CartController, CartService, cart, cart_list, scope, rootScope, session, events;

  beforeEach(module('app'));
  beforeEach(inject(function(_$controller_, _$rootScope_, _CartService_, _session_, _events_) {

    rootScope = _$rootScope_;
    scope   = _$rootScope_.$new();

    session = _session_;
    events = _events_;

    CartController = _$controller_("CartController", {
     '$scope' : scope, 'CartService' : _CartService_
    });

    spyOn(rootScope, '$emit');

    cart = [
      {
        "id": 1,
        "sku": 8552515751438644,
        "title": "Camisa Nike Corinthians I",
        "description": "14/15 s/nº",
        "availableSizes": ["S", "G", "GG", "GGG"],
        "style": "Branco com listras pretas",
        "price": 229.9,
        "installments": 9,
        "currencyId": "BRL",
        "currencyFormat": "R$",
        "isFreeShipping": true
      },{
        "id": 2,
        "sku": 18644119330491312,
        "title": "Camisa Nike Corinthians II",
        "description": "14/15 s/nº",
        "availableSizes": ["S", "G", "GG", "GGG"],
        "style": "Preta com listras brancas",
        "price": 500.92,
        "installments": 9,
        "currencyId": "BRL",
        "currencyFormat": "R$",
        "isFreeShipping": true
      }
    ];

    CartController.add(cart[0]);

  }));

  it('list', function() {
    expect(CartController.cart.length).toBe(1);
  });

  it('add', function() {
    CartController.add(cart[1]);
    expect(CartController.isHidden).toBe(false);
    expect(CartController.cart.length).toBe(2);
  });

  it('add twice', function() {
    CartController.add(cart[0]);
    expect(CartController.cart[0].quantity).toBe(2);
  });

  it('remove', function() {
    CartController.remove(1);
    expect(CartController.isHidden).toBe(true);
    expect(CartController.cart.length).toBe(0);
  });

  it('total', function() {
    var total = (cart[0].price * 2) + cart[1].price;
    CartController.add(cart[0]);
    CartController.add(cart[1]);
    expect(CartController.total_price).toBe(total);

    total = 0;
    CartController.remove(1);
    CartController.remove(2);
    expect(CartController.total_price).toBe(total);

  });

  it('count', function() {
    CartController.add(cart[1]);
    CartController.count();
    expect(CartController.items_size).toBe(2);
  });

  it('isInCart', function() {
    var isInCart = CartController.isInCart(cart[0]);
    expect(isInCart).toBe(true);

    isInCart = CartController.isInCart(cart[1]);
    expect(isInCart).toBe(false);
  });

  it('event buy', function(){
    events.emit('buy', cart[1]);
    expect(rootScope.$emit).toHaveBeenCalledWith( 'buy', cart[1]);
  });

  afterEach(function(){
    session.clearAll();
  });

});
