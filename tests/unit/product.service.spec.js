describe("Product Service", function(){
  var url, ProductService, product, $httpBackend;

  beforeEach(module('app'));
  beforeEach(inject(function(APP, _ProductService_, _$httpBackend_){
    ProductService  = _ProductService_;
    $httpBackend = _$httpBackend_;
    url = APP.API_URL;
  }));

  it('list', function() {
    var response;

    $httpBackend
    .expect('GET', '/products').respond(200, [{
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
        "price": 229.9,
        "installments": 9,
        "currencyId": "BRL",
        "currencyFormat": "R$",
        "isFreeShipping": true
      }]
    );

    ProductService.list().then(function(response){
      expect(response.data.length).toBe(2);
    });
    $httpBackend.flush();

  });

});
