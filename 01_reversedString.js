function reversedString(str) {
    
    let reversed = str.split("").reverse().join("");
    return reversed;
}

console.log(reversedString("Just for a test"));