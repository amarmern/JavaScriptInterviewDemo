var hero = {
  name: 'hero1',
  action: 'Jokes',
};
console.log(hero.name); // hero1
console.log(hero['action']); // Jokes

function Employee() {}
var emp = new Employee();
var o = {};
console.log(emp instanceof Employee); //true
console.log(emp instanceof Object); //true
console.log(o instanceof Object); //true

var arr = ['a', 'b', 'd'];
console.log(arr instanceof Array); //true
console.log(arr instanceof Object); // true
console.log(arr instanceof String); //false

function Hero(name) {
  this.name = name;
  this.occupation = 'Ninja';
  this.whoAreYou = function () {
    return "I'm " + this.name + " and I'm a " + this.occupation;
  };
}

var h = new Hero('Leonardo');
console.log(typeof h); //object

var h = Hero('TestHero');
console.log(typeof h); //undefined
console.log(o.constructor); //ƒ Object() { [native code] }
console.log(typeof o.constructor); // function

function Hero() {}
var h = new Hero();
var o = {};
console.log(h instanceof Hero);
console.log(h instanceof Object);
console.log(o instanceof Object);

var o = new Object();
console.log(o.toString()); //[object Object]
console.log(Object.prototype.toString.call(o)); //[object Object]

var first = new Function('a, b, c, d', 'return arguments;');
console.log(first(1, 2, 3, 4)); //[1, 2, 3, 4]

function C() {
  this.a = 1;
  return false;
}
console.log(typeof new C()); // object
