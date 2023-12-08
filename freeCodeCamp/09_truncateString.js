// I way
function myString(str, num) {

    if(num <= 3 ) return str.slice(0, num) + '...';
    if(str.length <= num) return str;
    return str.slice(0, num-3)+ '...'; 
}

console.log(myString('This is my destiny!', 10));

// II way
function truncate(str, num) {
    
 if (str.length <= num) return str;
 if (str.length > num+3) return str.slice(0, num) + '...';
}

console.log(truncate('This is my destiny!', 10));