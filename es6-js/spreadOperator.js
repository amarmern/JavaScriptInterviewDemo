//spread and rest operator..
const numbers = [1,2,3];
const newNumbers = [...numbers,4];
console.log(newNumbers);

const person ={
    name: 'aditi'
};

const newPerson = {
    ...person,
    age: 11
}

console.log(newPerson);


//Rest operator

const filter = (...args) =>{
    return args.filter(el => el ===1);
}

console.log(filter(1,2,3));

// didtructotr object
[a,b] = ["Hello","amar"];
console.log(a);
console.log(b);


let c = [1,2,[3,[4,5]]]
let d =c.flat()
console.log(d.flat())
//or
const arr = [10, [20, [30]]];

console.log(arr.flat(1))
console.log(arr.flat(2))


