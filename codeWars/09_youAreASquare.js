// I way
var isSquare = function(n){
  
    let result = Math.sqrt(n);
    if (result % 1 !== 0) return false;
    if(Math.pow(result, 2) === n) return true;
    return false;
 }

console.log(isSquare(41));

// II way
  var isSquare = function(n){
 
    if (Math.sqrt(n) % 1 !== 0) return false;
    return true;
 }

console.log(isSquare(9));