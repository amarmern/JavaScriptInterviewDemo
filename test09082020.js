function sayHello() {
  return function () {
    return 'Hello World!';
  };
}

let fn = sayHello();
let msg = fn();
console.log(msg);

function greet(fn) {
  console.log(fn());
}

// const person = { name: 'Amrendra' };
// const updated = Object.assign({}, person, {
//   name: 'kumar',
//   address: 'Banaglore',
// });
// console.log(person);
// console.log(updated);

// const person = { name: 'Amrendra' };
// const updated = {...person ,name:"kumar" , age: 30}

// const person = {
//   name: 'Amrendra',
//   address: {
//     country: 'India',
//     city: 'Bangalore',
//   },
// };
//gotcha in the shalow copy , it will update original also
// const updated = { ...person, name: 'Kumar'};
// updated.address.city = 'Delhi'

// console.log(person);
// console.log(updated);


const person = {
    name: 'Amrendra',
    address: {
      country: 'India',
      city: 'Bangalore',
    },
  };

  const updated = { 
    ...person,
    address: {
        ...person.address,
        city: 'Delhi'
    }
}

console.log(person);
console.log(updated)

