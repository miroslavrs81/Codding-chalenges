// I way
function repeatString(test, num) {

    if(num <= 0) return ' ';
    return test.repeat(num);
}

console.log(repeatString('abc ', 5))

// II way
function repeatString(test, num) {

let final = '';

    for(let i = 0; i < num; i++) {
        final += test;
        }
        return final;
}

console.log(repeatString('abc ', 5))

// III way
function repeatString(test, num) {

    if(num === 0) return ' ';
    if(num === 1) return test;
    return test + repeatString(test, num - 1);
   
}

console.log(repeatString('abc ', 5))