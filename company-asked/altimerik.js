
//Find most experiance pilot
var personnel = [
  {
    id: 5,
    name: "Luke Skywalker",
    pilotingScore: 98,
    shootingScore: 56,
    isForceUser: true,
  },
  {
    id: 82,
    name: "Sabine Wren",
    pilotingScore: 73,
    shootingScore: 99,
    isForceUser: false,
  },
  {
    id: 22,
    name: "Zeb Orellios",
    pilotingScore: 20,
    shootingScore: 59,
    isForceUser: false,
  },
  {
    id: 15,
    name: "Ezra Bridger",
    pilotingScore: 43,
    shootingScore: 67,
    isForceUser: true,
  },
  {
    id: 11,
    name: "Caleb Dume",
    pilotingScore: 71,
    shootingScore: 85,
    isForceUser: true,
  },
];
 let totalScore = personnel.filter(person => person.isForceUser).reduce((acc , curr) =>{
  return acc + curr.shootingScore + curr.pilotingScore
},0)

console.log(totalScore)

//function pull all 0s left and 1s right

let arr = [0, 1, 0, 1, 1, 1];

function segeration01(arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    while (arr[left] === 0) {
      left++;
    }
    while (arr[right] === 1) {
      right--;
    }

    if (left < right) {
      arr[left] = 0;
      arr[right] = 1;
      left++;
      right--;
    }
  }
  return arr;
}

console.log(segeration01(arr));





[14:25] Jyotil Raval
    function test() {​
  console.log(a);
  console.log(foo());
  var a = 1;
  function foo() {​
    return 2;
  }​
}​
test();
​[14:27] Jyotil Raval
    let i;
for (i = 0; i < 3; i++) {​
  const log = () => {​
    console.log(i);
  }​;
  setTimeout(log, 100);
}​
​[14:29] Jyotil Raval
    function createIncrement() {​
  let count = 0;
  function increment() {​
    count++;
  }​
  let message = `Count is ${​count}​`;
  function log() {​
    console.log(message);
  }​
  return [increment, log];
}​
const [increment, log] = createIncrement();
increment();
increment();
increment();
log();
​[14:37] Jyotil Raval
    var funkA = () => console.log(‘Hi’);
var funkB = new funkA();
funkB();
​[14:40] Jyotil Raval
    var a = [1, 2, 3, 4, 5];
//Your Code - Begin;
//Your Code - Finish;
console.log(a);
// Output
['start', 1, 2, 3, 4, 5, 'end'];
​[14:42] Jyotil Raval
    var a=['a','b','c','d'];
//Your Code - Begin;
//Your Code - Finish;
console.log(a);
// Output
//{​a:1,b:2,c:3,d:4}​
​[14:45] Jyotil Raval
    var arr = ['INDIA','india','B','b','c','C'];
​[14:48] Jyotil Raval
    A frog is at the bottom of a 30 meter well.
Each day it summons enough energy for one 3 meter leap up the well.
Exhausted, it then hangs there for the rest of the day.
At night, while it is asleep, it slips 2 meters backwards.
How many days does it take him to escape from the well?


