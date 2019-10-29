var str = "hi there, how is it going?";

function Capitalization(str) {
    let oginalWords = str.split(' ');
    let words = [];
    for (let word of oginalWords) {
        words.push(word[0].toUpperCase() + word.slice(1));
    }
    console.log(words.join(' '));
}
Capitalization(str);