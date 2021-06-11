var temp = "this is a temp variable";
var temp = "this is a second temp variable"; //replaced easily
console.log(temp);

let lettemp = "this is a temp variable";
//let lettemp = "this is a second temp variable"; //replaced easily 
// Identifier 'lettemp' has already been declared 
console.log(lettemp);

var varVariable = "this is a var variable";
let letVariable = "this is a let variable";

console.log(window.varVariable);
console.log(window.letVariable); //undefined

// for(var i=0; i<10; i++){
//     //console.log(i); //i is visible thus is logged in the console as 0,1,2,....,9
//     }
//     console.log(i); //i is visible here too. thus is logged as 10.


for(let i=0;i<10;i++){
   // console.log(i); //i is visible thus is logged in the console as 0,1,2,....,9
    }
    console.log(i); //throws an error as "i is not defined" because i is not visible

    