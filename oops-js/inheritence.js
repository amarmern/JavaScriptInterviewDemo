function Person(fName,lName){
    this.fName = fName;
    this.lName = lName;
}

Person.prototype.getFullName = function(){
 return this.fName + " " +this.lName;
}

function Student(fName,lName, grade){
    Person.call(this,fName,lName);
    this.grade = grade;
}

Student.prototype = new Person();
Student.prototype.constructor= Student;
 var stdObj = new Student("Amrendra", "Kumar", "A");
 var stdObj1 = new Student("Aditi","Kumari","B");

 console.log(stdObj.getFullName());
 console.log(stdObj1.getFullName());

 