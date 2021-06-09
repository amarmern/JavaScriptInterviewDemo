
//call apply and bind

var candy = {
  owner: 'niks',
  flavour: 'mango',
  whosCandyIsthis: function () {
    console.log('Owner of this is', this.owner);
  },
};

var myCandy = {
  owner: 'ank',
};

candy.whosCandyIsthis();
candy.whosCandyIsthis.call(myCandy);

// var myVar = 10;
// var obj = {
//   myVar: 20,
//   whoIsThis: function () {
//     myVar = 30;
//     console.log(myVar); //30
//     console.log(this.myVar); //20
//   },
// };

// obj.whoIsThis();

// var candy = {
//   owner: 'niks',
//   flavour: 'mango',
//   whosCandyIsthis: function () {
//     console.log('Owner of this is', this.owner);
//   },
// };

// candy.whosCandyIsthis();

// var obj = {
//   name: 'Amrendra',
//   age: 12,
// };

// var obj1 = obj;
// obj1.name = 'Kumar';

// //console.log(obj1);
// console.log(obj);

// let obj2 = {
//   name: 'amrendra',
// };

// let obj3 = obj2;
// obj3.name = 'test';

// console.log(obj2);

// for (let pr in obj) {
//   console.log(pr);
// }

// console.log(Object.keys(obj));

// /// callback function...

// setTimeout(display, 3000);
// function display() {
//   console.log('hello');
// }

// ///

// function myCalculator(num1, num2, callback) {
//   callback(num1 + num2);
// }

// myCalculator(10, 20, displaSum);

// function displaSum(sum) {
//   console.log(sum);
// }

// // setInterval(timeInterval, 1000);

// // function timeInterval() {
// //   var d = new Date();
// //   const currentime = d.getHours() + d.getMinutes() + d.getSeconds();
// //   console.log(currentime);
// // }
