function Person(){
    this.name= 'John',
    this.gender='M'
}

Person.prototype.SayHi = function(){
    console.log("Hi");
}

var personObj=  new Person();
personObj.toString();