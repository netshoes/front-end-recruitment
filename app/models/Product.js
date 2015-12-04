module.exports = function(app){

  class Product extends app.models.Application{
    constructor(){
      let schema = {
          id             : Number
        , sku            : Number
        , title          : String
        , description    : String
        , availableSizes : Array
        , style          : String
        , price          : Number
        , installments   : Number
        , currencyId     : String
        , currencyFormat : String
        , isFreeShipping : Boolean
      };
      super(schema);
    }
  }

  return Product;

};
