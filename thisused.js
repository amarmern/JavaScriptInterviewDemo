var fullName = 'mantu kumar';
var obj = {
    fullName : 'amrendra kumar',
    prop: {
     fullName : "amrendra wipro",
      getfullName : function(){
        return this.fullName;
      }
    }
};
console.log(obj.fullName)//amrendra kumar
console.log(obj.prop.getfullName()) // amrendra wipro
var test = obj.prop.getfullName;
console.log(test()); //mantu kumar
//solution
console.log(test.call(obj.prop)); // amrendra wipro



/////

var fullName1 = 'mantu kumar';
var obj1 = {
    fullName1 : 'amrendra kumar',
    prop1: {
     fullName1 : "amrendra wipro",
      getfullName1 : ()=>{
        return this.fullName1;
      }
    }
};
console.log(obj1.fullName1)//amrendra kumar
console.log(obj1.prop1.getfullName1()) // mantu kumar
var test1 = obj1.prop1.getfullName1;
console.log(test1()); //mantu kumar
//solution
console.log(test1.call(obj1.prop1)); // mantu kumar



