function User(email, name) {
  (this.name = name), (this.email = email), (this.online = false);
}

User.prototype.login = function () {
  this.online = true;
  console.log(this.email, "has loggin");
};

User.prototype.logout = function () {
  this.online = false;
  console.log(this.email, "has logout");
};

function Admin(...args) {
  User.apply(this, args);
  this.role = "super user!";
}

Admin.prototype.deletUser = function (u) {
  users = users.filter((user) => {
    return user.email !== u.email;
  });
};

var user1 = new User("amamrmca51@gmail.com", "Amrendra");
var user2 = new User("aditi.kumari@gmail.com", "Aditi");
var admin = new Admin("sahmila.kumari", "sahmila");

var users = [user1, user2, admin];
console.log(users);
console.log(user1);
user2.login();

console.log(admin);

function Animal(name) {
  this.name = name;
}

Animal.prototype.bark = function () {
  console.log(this.name, "can bark");
};

function Dog(...args) {
  Animal.apply(this,args);
}

Dog.prototype = Object.create(Animal.prototype);

let dog1 = new Dog("Dog1");
dog1.bark();


