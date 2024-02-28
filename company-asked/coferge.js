1. how many ways we can create the object?
2. polyfill in javascript for writing the map function
3. shallow copy and deep copy in js

class Person {
  constructor() {
    this.name = 'test2';
  }
}

var p1 = new Person();
console.log(p1.name);

let obj1 = {
  fname: 'hari',
  lNmae: 'shiva',
  age: {
    val: 23,
  },
};

let obj2 = {
  ...obj1,
};

obj2.fname = 'shanker';
let newObj = JSON.parse(JSON.stringify(obj1));
newObj.age.val = 34;

console.log('user1', obj1);
console.log('user2', newObj);
