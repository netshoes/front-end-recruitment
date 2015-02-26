'use strict';

function formatMoney(value) {
  let int = value.toFixed();
  let dec = (((value % 1).toFixed(2)) * 100).toFixed();
  let full = `${int},${dec}`;

  console.log(full);

  return {
    int: int,
    dec: dec,
    full: full
  }
}

export default formatMoney;
