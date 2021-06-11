//using while loop
function factorialize(num) {
var result = num;
while(num > 1){
  num--;
  console.log(num);
  result = result * num;
}  
console.log(result);
}
factorialize(5);
//factoriaUsingloop(5);

//using  for loop
function factorial(num){
  if(num ==0 || num ==1) return 1;
  for(var i = num-1; i >= 1; i-- ){
    num = num * i;
    //console.log(num);
  } 
  console.log(num);
}
factorial(5);


//using for recurssive...
function factorialRecurcivefunction(num){
  if(num ==0 || num <=1) return 1;
  else{
    return num * factorialRecurcivefunction(num -1)
  }
}

