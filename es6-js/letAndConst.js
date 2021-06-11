//let const and arrow function
let letvar = "This is let Variable";
console.log(letvar);

const printNameandAge = (name, age) => {
  console.log(name, age);
};
printNameandAge("Amrendra", 32);

const multiply = number => number * 2;
console.log(multiply(2));

//Export and import

//class object and constructor

// class Person extends Human{
//     constructor(){
//         super();
//         this.name = "Aditi"
//     }
//     printMyName(){
//         console.log(this.name);
//     }
// }

// const person = new Person();
// person.printMyName();
// person.printAge()

/// extending classs

class Human {
  constructor() {
    this.gender = "Male";
  }
  printAge() {
    console.log(this.gender);
  }
}

class Person extends Human {
  constructor() {
    super();
    this.name = "AKumar";
  }
  printMyName() {
    console.log(this.name);
  }
}

const person = new Person();
person.printMyName();
person.printAge();
