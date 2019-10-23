var someString = "lkjhUYGliklKHLIUlkjLIuhKUYuyKUYgkjhKUyg";
var newString = '';
for (var x = 0; x < someString.length; x++) {
    newString += someString.substring(x, 1); //add current character to new string
    if (someString.charCodeAt(x) >= 65 && someString.charCodeAt(x) <= 90) //check to see if captial
    {
        newString += ' '; // add space
    }
}
console.log(newString);

let stringCamelCase = "MySitesIs";
let string = stringCamelCase.split(/(?=[A-Z])/).join(" ");
console.log(string)