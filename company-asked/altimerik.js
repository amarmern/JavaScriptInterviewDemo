
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
function segrigate01(arr) {
  let left = 0,
    right = arr.length - 1;

  while (left < right) {
    /* Increment left index while we see 0 at left */
    while (arr[left] === 0 && left < right) left++;

    /* Decrement right index while we see 1 at right */
    while (arr[right] === 1 && left < right) right--;

    /* If left is smaller than right then there is a 1 at left
      and a 0 at right. Exchange arr[left] and arr[right]*/
    if (left < right) {
      arr[left] = 0;
      arr[right] = 1;
      left++;
      right--;
    }
  }
}

console.log(segrigate01(arr));

