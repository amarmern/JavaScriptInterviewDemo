(function checkPrimeNumber(num){
    var flag =true;
    for(var i=2; i< num; i++){
        if(num % i ==0){
            flag = false;
        }
    }
    if(flag){
        console.log(`${num} is prime number!`);
    }
})(11);


  