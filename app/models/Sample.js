module.exports = function(app){

  class Sample extends app.models.Application{
    constructor(){
      let schema = {
          id      : Number
        , param1  : String
        , param2  : String
      };
      super(schema);
    }
  }

  return Sample;

};
