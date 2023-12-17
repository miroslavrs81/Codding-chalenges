var reverseWords = function(s) {
// All whitepaces(space, tab, newline) if  occur 2 or more times. 
const reg = /\s{2,}/g;  //
let words = s.trim().replace(reg, ' ');
    return words.split(' ').reverse().join(' ');
}

console.log(reverseWords("the sky is      blue"));
