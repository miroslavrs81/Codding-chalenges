
function longestWord(str) {

    let longest = "";
    let text = " is the longest word and has length: "
    let words = str.split(" ");

    for(let word of words) {
        if(word.length > longest.length) {
            longest = word;
        }
    }
    return longest + text + longest.length;
   
}

console.log(longestWord("Dobro se dobrim vraca"))