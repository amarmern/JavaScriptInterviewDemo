

//ex by module Pattern
function createPeron(){
    //private variable and function 
 var firstName ="Amrendra";
 var lastName ="kumar";

//public variable and function
  //var retunObj ={
 return{
    "getFirstName": function(){
        return firstName;
    },
    "getLastName" : function(){
        return lastName;
    },
    "setFirstName" : function(name){
        firstName =name;
    },
    "setLastName" : function(name){
        lastName = name;
    }
  };
 //return retunObj;
}

var person = createPeron();
console.log(person);
console.log(person.firstName);
console.log(person.lastName);
// console.log(firstName);
// console.log(lastName);
console.log(person.getFirstName());
console.log(person.getLastName());
person.setFirstName("Mantu");
console.log(person.getFirstName());
person.setLastName("Yadav");
console.log(person.getLastName());


//ex:1(evern reurning the inner function and get into the outer function)

var a=10;
function outer(){
    var b=20;
    var inner= function(){
        console.log(a);
        console.log(b);
    };
    return inner;
}
var innerFn =outer();
innerFn();

var a=10;
function outer(){
var b=20;
   var inner= function(){
       a++;
       b++;
        console.log(a);
        console.log(b);
    };
  return inner;
}
var innerFn =outer();
innerFn();

var innerFn2 = outer();
innerFn2();

//first way
var i;
for(i =0; i< 10; i++){    
 (function(){
     var j=i;
    setTimeout(function(){console.log(j)},1000);
 })();
}
//second way
var i;
for(i =0; i< 10; i++){    
 (function(j){     
    setTimeout(function(){console.log(j)},1000);
 })(i);
}

