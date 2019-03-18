class Human{    
    gender= "Male";   
    printAge = () =>{
        console.log(this.gender);
    }
}

class Person extends Human{   
   name = "AKumar"
    printMyName =() =>{
        console.log(this.name);
    }
}

const person = new Person();
person.printMyName();
person.printAge()