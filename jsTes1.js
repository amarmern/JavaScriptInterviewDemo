// var a = [5, 5, 5, 2, 2, 2, 2, 2, 9, 4].reduce(function(acc, curr) {
//   if (typeof acc[curr] == "undefined") {
//     acc[curr] = 1;
//   } else {
//     acc[curr] += 1;
//   }

//   return acc;
// }, {});
// console.log(a);


// try {
//   undefined()
// } catch (err) {
//   console.log(err)
// }

// console.log(err)

// for(let i=0; i< 10; i++){
//   console.log(i);
// }
// console.log(i)


var a = false;
if(a){
  function foo(){ console.log("a")}
}
else{
  function foo() {console.log("b")}
}
foo();


// for(var i =1; i<=5; i++){
//   setTimeout(function timer(){
//     console.log(i);
//   }, i*1000)
// }


// console.log("" == 0 , false == 0 , undefined == "" , undefined == null)



// console.log('1' == 1 , '1' ===1 , Number('01') ===1)

// const a = {o:1}; a.o =2; console.log(a)

// let x = 'Outer value';
// (function(){
//   console.log(x);
//   let x = 'inner value'
// }());


// const counter = function (initialValue , stepVal){
//   var c= initialValue || 0;

//   return function  nest(){
//     c = c + stepVal;
//     return c
//   }
// }

//  const c1 = counter(1,1);
//  console.log(c1() , c1())


// const counter = function ( initialValue , stepVal){
//   return {
//     val : initialValue,
//     next() {
//       this.val = this.val + stepVal;
//       return this.val

//     }
//   }
// }

// const c= counter( 0 , 2);

// console.log(c.val , c.next() , c.val)


// var obj = {
//   val : 0,
//   inc() {
//     this.val++;
//     console.log(this.val)
//   }
// }

// var inc = obj.inc;
// inc();
// inc.call(obj);
// obj.inc();

// var obj2 = { val: 2}
// var inc2 = inc.bind(obj2);
// inc2()




// function A() {

// };

// function B(val){
//   this.valB = val;
// }

// B.prototype = Object.create(A.prototype);
// var b= new B(2);

// console.log(b.valB)
// console.log(b.val)

// A.prototype.val = 1
// console.log(b.val)


// function A(id){
//   console.log(`in A(${id})`);

// }

// class B extends A {
//   constructor(id){
//     super(id);
//     console.log(`in B(${id})`);
//   }
// }

// var b= new B(2)


// function A(id){
//   this.id =id
// }
// A.fn = function() {
//   console.log('in A.fn', this.id)
// }

// A.id = 'CLASS A'

// A.prototype.fn = function(){
//   console.log('in A.protyper in', this.id)
// }

// var a = new A('object a')

// a.fn()
// A.fn();


// const a= [1,2,3];

// const[one, ...rem] =a
// const [first,,, fourth] =a
// console.log(one === 1 , rem.every((i,j) => i == j+2) , first ===1 , fourth ===2)

// const a = {
//   one: '1.0',
//   two: '2.0',
//   three: '3.0'
// };

// const {one, ...rem} =a;
// const all = {...a}

// console.log(one === '1.0', rem === undefined , rem.three ==='3.0' , all.one === a.one) 


// function f() {
//   console.log(arguments); 
// }

// f([1,2]); 
// f(1,2);
// f.apply(null, [1,2]) 
// f.call(null , 1,2)



const defaultVal = () =>1;
const required  = arg => { throw Error(`Argument ${arg} is required`)}

const fn = ({ a = defaultVal(), b= required('b')}) =>{
console.log('a, b =' ,a, b )
}

try {
  [{b:'b'}, {a:'a'}, {b : 'b'}, { a: 'a' , b: undefined}].map(fn)
  
} catch (err) {
  console.log(err.message)
}


