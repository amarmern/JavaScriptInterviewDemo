


// var e = 10;
// function sum(a){
//     return function(b){
//         return function(c){
//             return function(d){
//                 return e + a+ b + c +d;
//             }
//         }
//     }
// }

// console.log(sum(1)(2)(3)(4));

// var s = sum(1);
// var s1= s(2);
// var s2 = s1(3);
// var s3= s2(4);
// console.log(s3);



// var counter = (function(){
//     var privateCounter =0;
//     function changeBy(val){
//         privateCounter += val;
//     }

//     return{
//         value: function(){
//             return privateCounter;
//         },
//         increment: function(){
//             changeBy(1);
//         },
//         decrement: function(){
//             changeBy(-1);
//         }
        
//     }
// })();


// console.log(counter.value());
// counter.increment();
// counter.increment();
// console.log(counter.value());
// counter.decrement();
// console.log(counter.value());


// function MakeAdder(x){
//     return function(y){
//         return x + y
//     };
// }

// var add2 = MakeAdder(2);
// console.log(add2(2));



// function MakeFunc(){
//     var name= 'hcl';
//     function displayName(){
//         alert(name);
//     }
//     return displayName;
// }

// var makefunc = MakeFunc();
// makefunc();