//Arrow functions do not have their own this. Another example involving
var obj = {
  // does not create a new scope
  i: 10,
  b: () => console.log(this.i, this),
  c: function () {
    console.log(this.i, this);
  },
};

obj.b(); // prints undefined, Window {...} (or the global object)
obj.c(); // prints 10, Object {...}

//Arrow functions cannot be used as constructors and will throw an error when used with new.

var Foo = () => {};
//var foo = new Foo(); // TypeError: Foo is not a constructor

//Arrow functions do not have a prototype property.

var Foo = () => {};
console.log(Foo.prototype); // undefined

//Function body
//Arrow functions can have either a "concise body" or the usual "block body".

//In a concise body, only an expression is specified, which becomes the implicit return value. In a block body, you must use an explicit return statement.

var func = (x) => x * x;
// concise body syntax, implied "return"

var func = (x, y) => {
  return x + y;
};
// with block body, explicit "return" needed

// Arrow functions, introduced in ES6, provides a concise way to write functions in JavaScript.
// Another significant advantage it offers is the fact that it does not bind its own this. In other words,
//  the context inside arrow functions is lexically or statically defined.

let People = function (person, age) {
  this.person = person;
  this.age = age;
  this.info = function () {
    console.log(`${this.person} is ${this.age}`);
  };
};

let person1 = new People('Amrendra', '35');
person1.info();

let People3 = function (person, age) {
  this.person = person;
  this.age = age;
  this.info = () => {
    console.log(`${this.person} is ${this.age}`);
  };
};

let person4 = new People3('Amrendra', '35');
person4.info();
console.log(typeof People3);
console.log(People3.info);

let People1 = function (name, age) {
  this.name = name;
  this.age = age;
  this.info = function () {
    console.log(this);
    setTimeout(function () {
      console.log(`${this.name} old ${this.age}`);
    }, 3000);
  };
};

let person2 = new People1('jhgj', '67');
person2.info();

let People2 = function (name, age) {
  this.name = name;
  this.age = age;
  this.info = function () {
    console.log(this);
    setTimeout(() => {
      console.log(`${this.name} old ${this.age}`);
    }, 3000);
  };
};

let person3 = new People2('mnbbn', '67');
person3.info();
