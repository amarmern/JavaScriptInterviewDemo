// console.log(this);

// function whreThis() {
//   console.log(this);
// }
// whreThis();

// const person = {
//   name: 'Amrendra',
//   person: function () {
//     console.log(this);
//     console.log(this.name);
//   },
// };

// person.person();

// herer object is called by admin , so it will be depends on admin

// const person2 = {
//   name: ' Amrendra',
//   greet() {
//     console.log(this);
//     console.log(this.name);
//   },
// };

// const admin = { age: 30 };
// admin.greet = person2.greet;

// admin.greet();

// const person3 = {
//   name: 'Singh',
//   greet() {
//     console.log(this);
//     console.log(this.name);
//   },
// };

// const { greet } = person3;
// //greet(); // nothig will call
// //greet.call(this)  //window
// greet.call(person3);

// window.age = 27;
// function sayAge() {
//   console.log(`My age is ${this.age}`);
// }

// sayAge();

// var numbers = [53, 78, 34, 56, 67, -1];
// console.log(Math.max.apply(this, numbers));
// console.log(Math.min.apply(this, numbers));

// function Product(name, price) {
//   this.name = name;
//   this.price = price;
// }

// function Pizza(name, price) {
//   Product.call(this, name, price);
//   this.category = 'pizza';
// }

// function Toy(name, price) {
//   Product.call(this, name, price);
//   this.category='toy'
// }

// let pizza = new Pizza('margerita', 500);
// let toy = new Toy('Remote Car', 40)

// console.log(pizza);
// console.log(toy)

//bind
// var x = 9;
// const module = {
//   x: 81,
//   getX: function () {
//     return this.x;
//   },
// };

// console.log(module.getX());

// let retriveX = module.getX;
// console.log(retriveX());
// var boundGetX = retriveX.bind(module);
// console.log(boundGetX());

/// Factory function

// function createTaxCalculator(tax) {
//   function calculateTax(amount) {
//     return amount * tax;
//   }
//   return calculateTax;
// }

// const calculateVatAmount = createTaxCalculator(0.19);
// const calculateIncomeTaxAmount = createTaxCalculator(0.25);

// console.log(calculateVatAmount(1000));
// console.log(calculateIncomeTaxAmount(10000));

//clouser

// let userName = 'amrendra';

// function greetUser() {
//     let name ="mantu"
//   console.log(userName);
// }
// userName = "kumar"
// greetUser();

// function powerOf(base, power) {
//   let result = 1;
//   for (let i = 0; i < power; i++) {
//     result *= base;
//   }

//   return result;
// }

// console.log(powerOf(2, 3));

// //using recusrssion

// function powerOfRec(x, n) {
//   if (n == 1) return x;
//   return x * powerOfRec(x, n - 1);
// }

// console.log(powerOfRec(2, 3));

// function makeAdder(a) {
//   return function adder(b) {
//     return a + b;
//   };
// }

// let res = makeAdder(1);
// console.log(res(10));

// function MakeAdder(a){
//    function add(b){
//     return a + b
//   }
//   return add
// }

// var res1 = MakeAdder(10);
// console.log(res1(10))

// for (var j = 0; j < 5; j++) {
//   (function () {
//     var i = j;
//     setTimeout(() => {
//       console.log(i);
//     }, 2000);
//   })();
// }


function reverseInt(num){
  let rev =0;
  while(num > 0){
    rem = num % 10;
    rev = rev * 10 + rem;
    num = num /10
  }
  return rev;
}

console.log(reverseInt([1,2,3,4,5]))

