let fullName = 'mantu kumar';
let obj = {
  fullName: 'amrendra kumar',
  prop: {
    fullName: 'amrendra wipro',
    getfullName: function () {
      return this.fullName;
    },
  },
};
console.log(obj.fullName); //amrendra kumar
console.log(obj.prop.getfullName()); // amrendra wipro
let test = obj.prop.getfullName;
console.log(test()); //mantu kumar
//solution
console.log(test.call(obj.prop)); // amrendra wipro

/////

let fullName1 = 'mantu kumar';
let obj1 = {
  fullName1: 'amrendra kumar',
  prop1: {
    fullName1: 'amrendra wipro',
    getfullName1: () => {
      return this.fullName1;
    },
  },
};
console.log(obj1.fullName1); //amrendra kumar
console.log(obj1.prop1.getfullName1()); //undefined
let test1 = obj1.prop1.getfullName1;
console.log(test1()); //undifined
console.log(test1.call(obj1.prop1)); //undifined

let person = {
  name: 'Aditi',
  age: '14',
  info: function() {
    setTimeout(() => {
      console.log(`${this.name} old ${this.age}`); 
    }, 3000);
    
  },
};

console.log(person.info());

let People = function (person, age) {
  this.person = person;
  this.age = age;
  this.info = function () {
    console.log(`${this.person} is ${this.age}`);
  };
};

let person1 = new People('Amrendra', '35');
person1.info();
