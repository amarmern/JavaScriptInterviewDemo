function test(){
    var result = 0;
    if(arguments.length > 0){
      for(var i=0; i< arguments.length; i++){
        result = result + arguments[i];
      }
    }
  }

  test(1,2,3,4)

  for(var i =0; i < 5; i++){
    setTimeout(function (){
      console.log(i);
    },2000)
  }

  
let arr = [9, 9,9,9, 111, 2, 3, 4, 4, 5, 7];
arr.filter(function(value,index,self){ 
  return (self.indexOf(value) !== index )
}) //[9, 9, 9, 4]


//Q. How can check array or object?
var arr = ['tuna', 'chicken', 'pb&j'];
Object.prototype.toString.call(arr); //"[object Array]"
var arr =  {sandwich: 'tuna', chips: 'cape cod'};
Object.prototype.toString.call(obj) //"[object Object]"
