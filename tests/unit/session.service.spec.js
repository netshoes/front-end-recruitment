describe("Session", function(){

  var session;

  beforeEach(module('app'));
  beforeEach(inject(function(_session_){
    session = _session_;
  }));

  it('set/get', function() {
    var cart;
    session.set('cart', {id:1, title:'camisa'});
    cart = session.get('cart');
    expect(cart.id).toBe(1);
  });

  it('getAll', function() {
    var MEAN;
    session.set('mongo', true);
    session.set('express', true);
    session.set('angular', true);
    session.set('node', true);
    MEAN = session.getAll();
    expect(MEAN.mongo).toBe(true);
    expect(MEAN.express).toBe(true);
    expect(MEAN.angular).toBe(true);
    expect(MEAN.node).toBe(true);
  });

  it('unset', function() {
    var cart;
    session.set('cart', {id:1, title:'camisa'});
    cart = session.get('cart');
    expect(cart.id).toBe(1);

    session.unset('cart');
    cart = session.get('cart');
    expect(cart).toBe(null);
  });

  afterEach(function(){
    session.clearAll();
  });
});
