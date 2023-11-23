// I reverse()
function palindromeI(str) {
    
    let reversed = str.split('').reverse().join('');
    if (reversed === str) return true;
        return false;
    }
    
    console.log(palindromeI("racecar"));

// II regEx and toLowercase

function palindromeII(str) {
    // regEx to replace all non-letter \W, including '_'
    const reg = /[\W_]/g;

    let smallStr = str.toLowerCase().replace(reg, "");

    let reversed = smallStr.split("").reverse().join("");
    if(reversed === smallStr) return true;
    return false;
}

console.log(palindromeII("racecar"));

// III for loop

function palindromeIII(str){

let reversed = '';
let clean = str.toLowerCase().replaceAll(' ', '');
for (let i = clean.length-1; i >= 0; i--) {
    reversed +=  clean[i];
    }
    if(clean === reversed) return true;
    return false;
}

console.log(palindromeIII('Ana voli Milovana'));
