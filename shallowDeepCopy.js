var a = [1, 2, 3];
console.log(a);
var b = a;
console.log(b);
b[0] = 9;
console.log(b);
console.log(a);

var shalloCoppy = Object.assign([], a);
console.log(a[2]);
asign[2] = 81;

var deepCopy = shalloCoppy;
console.log(deepCopy);
console.log(a);

JSON.parse(JSON.stringify(a))
console.log("******Map*********");

var arr = [1, 2, 3, 4, 5, 6];
var mapIteration = arr.map(item => item * 2);
console.log(mapIteration);
