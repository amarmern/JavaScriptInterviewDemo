var a = 10;
var b= 20;
console.log(a);
console.log(b);
var b = a + c;
console.log(b);
var b = 30;
c = 40;

var me =1;
function findMe(){
  if(me){
    var me =100;
    console.log(me);
  }
  console.log(me);
}
findMe(); // undefined




test();
var a = 10;
function test(){  
  console.log(a); //undefined
}

test();
function test(){ 
  var a = 10;    
}

console.log(a); // Not defined

var a = 10;
test();
function test(){  
  console.log(a); //10
}

var a = 10;
function test(){  
  console.log(a); //10
}
test();





a = 20;
var a =10; 
var b = 10;
c =40;
var c = 30

console.log(c)
c = a + b;
console.log(a);
console.log(b);
console.log(c)

let hoist;

console.log(hoist); // Output: undefined
hoist = 'Hoisted'

hoisted(); // Output: "This function has been hoisted."

function hoisted() {
  console.log('This function has been hoisted.');
};

var x = 10; 
function test() 
{ 
	var x = 20; 
} 

test(); 
console.log(x); 
