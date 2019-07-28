//const

const name = "amrendra"
console.log(name);

// name = "kumar";
// console.log(name);

const person ={
    name: 'amrendra',
    age:'32',
    isplaced: true
}

console.log(person.name);
person.name ="kumar";
console.log(person.name);


// let

let name1 ="amrendra";
console.log(name1);

name1 = "kumar"
console.log(name1);

//let object

// Object using let 
let bike = { 
	name : 'Ninja ZX-10R', 
	engine:'998cc', 
	abs : 'dual channel'
}; 
console.log(bike.engine); // 998cc 
bike.engine = '789cc'; 
console.log(bike.engine); // 789cc 


//arrow function

function printName(name){
    console.log('Hello ' + name);
}
printName("amrendra");

//es 6

const printName1 = (name) =>{
    return `Hello ${name}`;
}

console.log(printName1('amrendra'));

//Template literal

// ES5 
var val = 'Mukul Latiyan'; 
console.log('My name is '+ val); 

// ES6 
const val1 = 'Mukul Latiyan'; 
console.log(`My name is ${val1}`); 


//Object destruction

// ES5 
const college = { 
	name2 : 'DTU', 
	established : '1941', 
	isPrivate : false
}; 

let name2 = college.name2; 
let established = college.established; 
let isPrivate = college.isPrivate; 

console.log(name2); // DTU 
console.log(established); // 1941 
console.log(isPrivate); // false 

//ES6 destruction

const college1 = { 
	collegeName : 'DTU', 
	established1 : '1941', 
	isPrivate1 : false
};

let{collegeName, established1, isPrivate1 } = college1;
console.log(collegeName);
console.log(established1);
console.log(isPrivate1);


//Array destruction

const fruits = ['Apple', 'Banana', 'Orange'];

let[value1, val2, val3] = fruits;

console.log(value1);
console.log(val2);
console.log(val3);


//Default parameter
//es5
function fun(a,b){
    return a + b;
}

console.log(fun(1,2));
console.log(fun(1));

// ES5(improved) 
function fun(a,b){ 
	b = (typeof b!=='undefined')?b:1; 
	return a + b; 
} 

console.log(fun(2,1)); // 3 
console.log(fun(2)); // 3 

// ES6 
function fun(a,b=1){ 
	return a + b; 
} 

console.log(fun(2,1)); // 3 
console.log(fun(2)); // 3 

//classess  in ES6

// classes in ES6 
class Vehicle{ 
	constructor(name,engine){ 
		this.name = name; 
		this.engine = engine; 
	} 
} 

const bike1 = new Vehicle('Ninja ZX-10R','998cc'); 
const bike2 = new Vehicle('Duke','390cc'); 

console.log(bike1.name); // Ninja ZX-10R 
console.log(bike2.name); // Duke 

//Rest parameter 

// simple function 
function fun(a,b){ 
	return a + b; 
} 

console.log(fun(1,2)); // 3 
console.log(fun(1,2,3,4,5)); // 3 

// ES6 rest parameter 
function fun(...input){ 
	let sum = 0; 
	for(let i of input){ 
		sum+=i; 
	} 
	return sum; 
} 

console.log(fun(1,2)); // 3 
console.log(fun(1,2,3)); // 6 
console.log(fun(1,2,3,4,5)); // 15 

//Spread Operator

console.log(Math.min(1,2,3,-1)); // -1

// Without spread 
let arr = [1,2,3,-1]; 
console.log(Math.min(arr)); // NaN 

// With spread 
let arr1 = [1,2,3,-1]; 
console.log(Math.min(...arr1));  //-1








