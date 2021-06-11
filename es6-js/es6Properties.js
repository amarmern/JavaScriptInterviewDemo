class Human{    
    gender= "Male";   
    printGender = () =>{
        console.log(this.gender);
    }
}

class Person extends Human{   
   name = "AKumar"
    printName =() =>{
        console.log(this.name);
    }
}

const person = new Person();
person.printName();
person.printGender()