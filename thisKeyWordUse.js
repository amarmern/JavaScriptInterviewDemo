/*
What is this?
The JavaScript this keyword refers to the object it belongs to.
It has different values depending on where it is used:
In a method, this refers to the owner object.
Alone, this refers to the global object.
In a function, this refers to the global object.
In a function, in strict mode, this is undefined.
In an event, this refers to the element that received the event.
Methods like call(), and apply() can refer this to any object.
*/

//In a method, this refers to the owner object.

var person = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
};

//Alone, this refers to the global object.

/*When used alone, the owner is the Global object, so this refers to the Global object.

In a browser window the Global object is [object Window]: */

var x = this;

//In a function, this refers to the global object.

//So, in a function, this refers to the Global object [object Window].
function myFunction() {
    return this;
}

/*   JavaScript strict mode does not allow default binding.

 So, when used in a function, in strict mode, this is undefined.*/

"use strict";
function myFunction() {
    return this;
}

//In HTML event handlers, this refers to the HTML element that received the event:

<button onclick="this.style.display='none'">
    Click to Remove Me!
</button>

//Methods like call(), and apply() can refer this to any object.
/*Explicit Function Binding
The call() and apply() methods are predefined JavaScript methods.

They can both be used to call an object method with another object as argument.*/

var person1 = {
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
}
var person2 = {
    firstName: "John",
    lastName: "Doe",
}
person1.fullName.call(person2);  // Will return "John Doe"




