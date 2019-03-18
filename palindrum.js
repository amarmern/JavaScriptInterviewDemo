//121 -palindrum // aba === aba //abc !== cba
(function palindrumCheck(str){
    let originalValue = str + "";
    let result = originalValue.split('').reverse().join('');
    if(result == originalValue){
        console.log("Palindrum number or string") 
    }
    else{
        console.log('not Palindrum or string');
    }
})(123);

(function palindrumCheck(str){
    let originalValue = str;
    let result = '';
    for(let i = str.length; i>=0; i--){
        result = result + str.charAt(i);
    }
    if(result == originalValue){
        console.log("Palindrum string")
    }
    else{
        console.log('not Palindrum string');
    }
})('aba');


