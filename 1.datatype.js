//1.Number
var a = 40
console.log(a); // --> 40
console.log(typeof(a)) //-->number
var f = '1'
f = 3 * f;
console.log(typeof f) // --> Number
var g = '1' ;
g++;
console.log(typeof(g));
var h = "100"; 
console.log(typeof h);
h = h * 1
console.log(typeof h) 
var i = '101 dalmatians';
console.log(i * 1) // --> NaN
console.log(typeof(typeof(45))) // --> string
console.log(typeof(typeof(""))) // --> string

//2.string
a = "40"
console.log(a); // --> 40
console.log(typeof(a))  // --> string
var s1 = 'I don\'t know';
console.log(s1);
var s2 = "I don\'t know";
console.log(s2);
var s3 = "I don't know";
console.log(s3);
var s4 = '"Hello", he said.';
console.log(s4)
var s5 = "\"Hello\", he said.";
console.log(s5);
var s7 = "1\\2";
console.log(s7)
var s8 = '\n1\n2\n3\n';
console.log(s8);
var s9 = "1\t2"
console.log(s9);

//3.undefined
var b;
console.log(b); // --> undefined
console.log(typeof(b)) // --> undefined
//console.log(i); //--> Refernce error 'i' is not define
console.log(typeof(i)); //--> undefined
console.log(1 * undefined) //-> NaN
console.log(1 + undefined) // -->NaN

//4.Null
var c = null
console.log(c); // --> null
console.log(typeof(c)); // --> object
console.log(5 + null); // ->5
console.log(1 * null)// 0
console.log("" + null); //-> null
console.log("abc" + null); // --. abcnull

//5.Boolean
var d = 10, e = 20;
console.log(d > e) ///--> false
var b1 = !true;
console.log(b1); // false
var b2 = !!true;
console.log(b2); //true
var b3 = "one";
console.log(!b3);
var b4 = true;
console.log(b4 && "something");
var b5 = false;
console.log(b5 && "something");

//NaN (specail value not a data type)
console.log(NaN); // --> NaN
console.log(typeof(NaN)) // --> NaN
console.log(NaN + NaN); // --> NaN
console.log(10 + NaN); // --> NaN
console.log("hello" + NaN) // --> NaN
console.log(null + NaN); // NaN
console.log(null == undefined) /// --> true
console.log(null ===  undefined) // --> false
console.log(NaN == NaN) // false
console.log(NaN === NaN) // false


//Complex data type:

//1.object
//2.Array
//3.function



