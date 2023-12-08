// I reverse()
function reversedString(str) {
    
    let reversed = str.split("").reverse().join("");
    return reversed;
}

console.log(reversedString("Just for a test"));

// II for loop
function reversedString(str) {

    let reversed = "";
    for(let i = str.length-1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}

console.log(reversedString("Just for a test"));

// III with recursion
const reversed = (str) => {

    if(str.length === 0) return "";
    return reversed(str.slice(1)) + str[0];
}

console.log(reversed("Just for a test"))