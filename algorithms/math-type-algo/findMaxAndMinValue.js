let salary = [4000,10000,60000,3000,2000];

console.log(Math.max.apply(null,salary));
console.log(Math.min.apply(null,salary));

//using sort method...
salary.sort((a,b)=> b-a);
console.log(salary[0]);

//for find the minimum salary..
let minNumber = salary[0];

for(var i =0; i< salary.length; i++){
    if(salary[i] < minNumber){
        minNumber = salary[i];
    }
}

// for finding maximum value....
let number = [4000,10000,60000,3000,2000];
let maxNumber = number[0];

for(var i =0; i< number.length; i++){
    if(number[i] > maxNumber){
        maxNumber = number[i];
    }
}