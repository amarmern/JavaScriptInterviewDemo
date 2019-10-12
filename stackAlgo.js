var word = "raccar";
var rWord = ""

var arr = [];

for (var i = 0; i < word.length; i++) {
    arr.push(word[i]);
}

for (var i = 0; i < word.length; i++) {
    rWord += arr.pop();
}

if (word == rWord) {
    console.log('Palindrum');
}
else {
    console.log(' Not Palindrum!');

}



function reverse(str) {
    var stack = []
    for (var i = 0; i < str.length; i++) {
        stack.push(str[i]);
    }
    var reverseStr = '';
    while (stack.length > 0) {
        reverseStr += stack.pop();
    }
    return reverseStr;
}

console.log(reverse('javascript'));