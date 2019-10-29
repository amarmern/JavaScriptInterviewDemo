VowelsCount('apple')
// function VowelsCount(str) {
//     let count = 0;
//     let checker = ['a', 'e', 'i', 'o', 'u'];
//     for (var char of str.toLowerCase()) {
//         if (checker.includes(char)) {
//             count++
//             // console.log(char, "->", count);
//             console.log(char, "->", count);
//         }
//     }

//     count;
// }

function VowelsCount(str) {
    const matches = str.match(/[aeiou]/gi);
    if (matches) {
        console.log(matches.length)
    } else {
        matches = 0;
    }
    matches;
}


