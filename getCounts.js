const string = "Hello There!"

const chars = {};

for (let char of string) {

    chars[char] = chars[char] + 1 || 1
}
console.log(chars)

// const string = "Hello There!"

// const chars = {};

// for (let char of string) {
//     if (!chars[char]) {
//         chars[char] = 1
//     }
//     else {
//         chars[char]++
//     }

// }
// console.log(chars);
// for (let i in chars) {
//     console.log(i, "=> ", chars[i])
// }





// console.log(getCount("hello world"));
// function getCount(str) {
//     const histagram = {};
//     // for (let i = 0; i < str.length; i++) {
//     for (let i in str) {
//         const ch = str[i];
//         // console.log(ch);
//         if (!histagram[ch]) {
//             histagram[ch] = 0;
//         }
//         histagram[ch]++;
//     }
//     return histagram;
// }




// console.log(getCount("hello world"));
// function getCount(str) {
//     const histagram = {};
//     for (let i in str) {
//         const ch = str[i];
//         histagram[ch] = (histagram[ch] || 0) + 1
//     }
//     return histagram;
// }




// var str = "abcabcac";

// OcuuranceChar(str);


// function OcuuranceChar(str) {
//     var chars = str.split("");
//     //declare associative key of array
//     var charCount = {};
//     for (var char in chars) {
//         if (charCount[chars[char]] == undefined) {
//             charCount[chars[char]] = 0;
//         }
//         else {
//             charCount[chars[char]]++;
//         }
//     }
//     for (var i in charCount) {
//         console.log(i + ' ' + charCount[i]);
//     }
// }

// function OcuuranceChar(str) {
//     var chars = str.split("");
//     //declare associative key of array
//     var letters_count = {};
//     for (var i = 0; i < chars.length; i++) {
//         if (letters_count[chars[i]] == undefined) {
//             letters_count[chars[i]] = 0;
//         }
//         else {
//             letters_count[chars[i]]++;
//         }
//     }
//     for (var i in letters_count) {
//         console.log(i + ' ' + letters_count[i]);
//     }
// }





OcuuranceChar()
  function OcuuranceChar() {
    //var chars = str.split("");
    //declare associative key of array
   const string = "Hello There!"

const chars = {};

for (let char of string) {

    chars[char] = chars[char] + 1 || 1
}


    for (var str in chars) {
        console.log(str + ' ' + chars[str]);
    }
}

 

