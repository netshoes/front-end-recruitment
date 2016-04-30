module.exports = function(options) {
  'use strict';

  var delimitersDecimal = ',',
      format = '0,0.00',
      getTotalBy = function(cart, by, multiply) {
        var sum = 0;
        for (var idx in cart) {
          if (multiply) {
            sum += (cart[idx][by] * cart[idx][multiply]);
          } else {
            sum += cart[idx][by];
          }
        };
        return sum;
      },
      formatInstallment = function(value, installmentQtde, currencyFormat, text) {
        return (value < 10) ? null : (text ? text : 'ou ') + installmentQtde + 'x de ' + currencyFormat + ' ' + value.format(format);
      };

  options.numeral.language('pt-br', {
      delimiters: {
          thousands: '.',
          decimal: delimitersDecimal
      },
      abbreviations: {
          thousand: 'mil',
          million: 'milhões',
          billion: 'b',
          trillion: 't'
      },
      ordinal : function (number) {
          return 'º';
      },
      currency: {
          symbol: 'R$'
      }
  });
  options.numeral.language('pt-br');

  options.dust.helpers.isMobile = function (chunk, context, bodies, params) {
    var device = options.functions.getDevice(params.request);
    return (options.settings.app.devicesEnabled[device].isMobile).toString();
  };
  options.dust.helpers.priceMask = function(chunk, context, bodies, params) {
    return options.numeral(params.price).format(format);
  };
  options.dust.helpers.priceMaskDecimalWrapper = function(chunk, context, bodies, params) {
    var parts = options.dust.helpers.priceMask(chunk, context, bodies, params).split(',');
    chunk.write(parts[0] + '<small>' + delimitersDecimal + parts[1] + '</small>');
  };
  options.dust.helpers.installment = function(chunk, context, bodies, params) {
    var qntd = 3,
        value = options.numeral(params.price).divide(qntd);
    return chunk.write(formatInstallment(value, qntd, params.currencyFormat, null));
  };
  options.dust.helpers.cartQuantity = function(chunk, context, bodies, params) {
    var qntd = 0;
    for (var idx in params.cart) {
      qntd += params.cart[idx].quantity;
    };
    return qntd;
  };
  options.dust.helpers.cartTotalItemPerQuantity = function(chunk, context, bodies, params) {
    return options.numeral(params.price).multiply(params.quantity).format(format);
  };
  options.dust.helpers.cartTotal = function(chunk, context, bodies, params) {
    return options.numeral(getTotalBy(params.cart, 'price', 'quantity')).format(format);;
  };
  options.dust.helpers.installmentTotal = function(chunk, context, bodies, params) {
    var qntd = 10,
        total = getTotalBy(params.cart, 'price', 'quantity'),
        value = options.numeral(total).divide(qntd);
    return chunk.write(formatInstallment(value, qntd, 'R$', 'ou em até '));
  };
  options.dust.helpers.iterate = function (chunk, context, bodies, params) {
    var body = bodies.block,
      sort,
      arr,
      i,
      k,
      obj,
      compareFn;

    params = params || {};

    function desc(a, b) {
      if (a < b) {
        return 1;
      } else if (a > b) {
        return -1;
      }
      return 0;
    }

    function processBody(key, value) {
      return body(chunk, context.push({
        $key: key,
        $value: value,
        $type: typeof value
      }));
    }

    if (params.key) {
      obj = options.dust.helpers.tap(params.key, chunk, context);

      if (body) {
        if ( !! params.sort) {
          sort = options.dust.helpers.tap(params.sort, chunk, context);
          arr = [];
          for (k in obj) {
            if (obj.hasOwnProperty(k)) {
              arr.push(k);
            }
          }
          compareFn = context.global[sort];
          if (!compareFn && sort === 'desc') {
            compareFn = desc;
          }
          if (compareFn) {
            arr.sort(compareFn);
          } else {
            arr.sort();
          }
          for (i = 0; i < arr.length; i++) {
            chunk = processBody(arr[i], obj[arr[i]]);
          }
        } else {
          for (k in obj) {
            if (obj.hasOwnProperty(k)) {
              chunk = processBody(k, obj[k]);
            }
          }
        }
      } else {
        _console.log('Missing body block in the iter helper.');
      }
    } else {
      _console.log('Missing parameter \'key\' in the iter helper.');
    }
    return chunk;
  };

};
