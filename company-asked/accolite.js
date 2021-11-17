//sum(2, 3) // output 5
//sum(2)(3) // output 5

function sum(a) {
  if (arguments.length > 1) {
    return arguments[0] + arguments[1];
  } else {
    return function (b) {
      return a + b;
    };
  }
}

let sum1 = add(2, 0); //5
console.log("sum1", sum1);

let sum2 = add(2)(0); //5
console.log("sum2", sum2);
function add(a, b) {
  if (b === undefined) {
    return (b) => {
      return a + b;
    };
  } else {
    return a + b;
  }
}


console.log("sumation1", sum1(2)(3));

console.log("sumation2", sum1(2, 3));

var users = [
  {
    id: 1,
    name: "user1"
  },
  {
    id: 2,
    name: "user2"
  }
];

var ages = [
  {
    id: 2,
    age: 25
  },
  {
    id: 1,
    age: 23
  }
];

var companies = [
  {
    id: 2,
    company: "Microsoft"
  },
  {
    id: 1,
    company: "NASA"
  }
];
// let merged = [];

// for (let i = 0; i < users.length; i++) {
//   merged.push({
//     ...users[i],
//     ...ages[i],
//     ...companies[i]
//   });
// }
// console.log(merged);

let arr3 = users.map((item, i) =>
  Object.assign({}, item, ages[i], companies[i])
);

console.log(arr3);
//console.log(results);

// expected result=[{
// "id":1,
// "name":"user1",
// "company":"NASA",
// "age":23
// },
// {
// "id":2,
// "name":"user2",
// "company":"Microsoft"
// "age":25
// }
// ]

console.log(Math.random().toString(32));

