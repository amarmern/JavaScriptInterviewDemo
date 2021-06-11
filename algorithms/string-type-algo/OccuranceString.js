var str = "abcabcac";

//OcuuranceChar(str);


function OcuuranceChar(str) {
    var chars = str.split("");
    //declare associative key of array
    var letters_count = {};
    for (var i = 0; i < chars.length; i++) {
        if (letters_count[chars[i]] == undefined) {
            letters_count[chars[i]] = 0;
        }
        else {
            letters_count[chars[i]]++;
        }
    }
    for (var i in letters_count) {
        console.log(i + ' ' + letters_count[i]);
    }
}



