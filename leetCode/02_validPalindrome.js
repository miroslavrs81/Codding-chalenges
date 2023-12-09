var isPalindrome = function(s) {

    let reg = /[\W_]/g;
    if(s === ' ') return true;

    let smallS = s.toLowerCase().replace(reg, '');
    let r = smallS.split('').reverse().join('');
    if( r === smallS) return true;
    return false;
};

console.log(isPalindrome('Anas'));