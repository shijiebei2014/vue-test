function Sale (_price) {
  this.price = _price
}

Sale.prototype.getPrice = function () {
  return this.price
}

Sale.prototype.decorate = function (type) {
  var dec = this.constructor.decorators[type],
      F = function() {},
      newObj,
      i;
  F.prototype = this;
  newObj = new F();
  // newObj.price = dec.getPrice(this.price);
  newObj.uber = F.prototype
  for(i in dec) {
  	if (dec.hasOwnProperty(i)) {
  	  console.log('i:', i)
      newObj[i] = dec[i]
  	}
  }
  return newObj
}

Sale.decorators = {}
Sale.decorators.fedtax = {
  getPrice () {
    console.log('fedtax')
    return this.uber.getPrice() - 1;
  }
}
Sale.decorators.quebec = {
  getPrice() {
    console.log('quebec')
    return this.uber.getPrice() - 2;
  }
}
Sale.decorators.money = {
  getPrice() {
    console.log('money')
    return this.uber.getPrice() - 3;
  }
}

var sale = new Sale(100);

sale = sale.decorate('fedtax');
sale = sale.decorate('quebec');
sale = sale.decorate('money');
console.log(sale.getPrice())