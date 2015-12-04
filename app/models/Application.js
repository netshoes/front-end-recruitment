import db from '../database/database';
import pluralize from 'pluralize';

function make_find_methods(schema){
  for(let prop in schema){
    if( schema.hasOwnProperty ){
      let field_name  = prop.charAt(0).toUpperCase() + prop.slice(1);
      let method_name = "findBy" + field_name;

      this[method_name] = (value) => {
        let obj = {};
        obj[prop] = value;
        return this.model.find( obj );
      };
    }
  }
}

class Application{

  constructor(_schema = {}){
    let schema = _schema;
    this.model_name = pluralize(this.constructor.name.toLowerCase());
    this.model = db.model(this.model_name, schema);

    make_find_methods.call(this, schema);
  }

  create(object){
    return this.model.findOne((err, row) => {
      let id = 0;
      if( row ) id = row.id;
      object.id = id + 1;
      return this.model.collection.insert(object);
    }).sort({ "id" : -1 });
  }

  all(){
    return this.model.find();
  }

  lastId(){
    let data = this.model.findOne().sort({ "id" : -1 });
    return data.id;
  }

  sort(field, asc = true){
    if( !field ) return;
    asc = (asc) ? 1 : -1;

    let obj = {};
    obj[field] = asc;

    return this.model.find().sort(obj);
  }

}

module.exports = function(app){ return Application; };
