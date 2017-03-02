describe("Cart Service", function(){

  var CartService, cart, cart_list, session;

  beforeEach(module('app'));
  beforeEach(inject(function(_CartService_, _session_){
    CartService = _CartService_;
    session = _session_;
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
      }
    ];

    CartService.add(cart[0]);
    cart_list = CartService.list();

  }));

  it('add', function() {
    expect(cart_list.length).toBe(1);
  });

  it('add twice', function() {
    CartService.add(cart[0]);
    cart_list = CartService.list();
    expect(cart_list.length).toBe(1);
    expect(cart_list[0].quantity).toBe(2);
  });

  it('remove', function() {
    CartService.remove(1);
    expect(cart_list.length).toBe(0);
  });

  it('findById', function() {
    var product = CartService.findById(1);
    expect(product.title).toBe('Camisa Nike Corinthians I');
  });

  afterEach(function(){
    session.clearAll();
  });

});
