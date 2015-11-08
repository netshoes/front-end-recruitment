/**
 * Created by alanlucian on 11/8/15.
 */

function ProductVO( data ){
    this.id;
    this.sku;
    this.title;
    this.description;
    this.availableSizes = new Array();
    this.style;
    this.price;
    this.installments;
    this.currencyId;
    this.currencyFormat;
    this.isFreeShipping;

    //Populate object from a JSON
    for(var i in data)
        this[i] = data[i];


}

var x  = new ProductVO();
