function Person(){
    this.name= 'John',
    this.gender='M'
}

Person.prototype.SayHi = function(){
    console.log("Hi");
}
////////////////

var personObj=  new Person();
personObj.toString();

function User(email, name) {
  this.name = name, 
  this.email = email, 
  this.online = false;
}

User.prototype.login = function () {
  this.online = true;
  console.log(this.email, "has loggin");
};

User.prototype.logout = function () {
  this.online = false;
  console.log(this.email, "has logout");
};

var user1 = new User("amamrmca51@gmail.com", "Amrendra");
var user2 = new User("aditi.kumari@gmail.com", "Aditi");

console.log(users);
console.log(user1);
user2.login();

