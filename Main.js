console.log("js file is connected");
console.log(2 + 2);



function checkout (item1, item2, coupon) {
  var subtotal = item1 + item2;
  var superCoupon = .69
  var couponValue = subtotal * superCoupon;
  var total = subtotal - couponValue;
  console.log(total);
}

checkout(33, 19, .15);


var bankAccount = 10000000000000; // :0
