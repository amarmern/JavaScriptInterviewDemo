//ECMAScript 6 has an even more straightforward way. Array.from(), a new addition in ECMAScript 6,
// creates a new array from any array-like object:


function sort() {
    var add =0;
    var a = Array.from(arguments);

    console.log(a.sort());
    
}
sort(40, 20, 50, 30);    // [20, 30, 40, 50]


/// for extend in es6
class Animal {
    constructor(type, name, sound) {
        this.type = type;
        this.name = name;
        this.sound = sound;
        this.makeSound = () => `The ${this.type} named ${this.name} goes ${this.sound}!`;
    }
}
//undefined
const frog = new Animal("frog", "George", "ribbit");
//undefined
//frog.name
//"George"
class Frog extends Animal {
    constructor(name) {
        super("frog", name, "ribbit");
    }
}
const george = new Frog("George");
george.makeSound();
//"The frog named George goes ribbit!"