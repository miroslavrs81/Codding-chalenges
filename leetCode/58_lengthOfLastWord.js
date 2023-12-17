var lengthOfLastWord = function(s) {
    let word = s.trim().split(' ');
    return word.at(-1).length;
}

console.log(lengthOfLastWord("Hello world"));
console.log(lengthOfLastWord("   fly me   to   the moon  "));