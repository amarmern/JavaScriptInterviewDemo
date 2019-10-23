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




console.log(getCount("hello world"));
function getCount(str) {
    const histagram = {};
    for (let i in str) {
        const ch = str[i];
        histagram[ch] = (histagram[ch] || 0) + 1
    }
    return histagram;
}

