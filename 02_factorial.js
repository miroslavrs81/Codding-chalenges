// I way for loop

const factorialFor = num => {
   
    let result = 1;
    for (let i = 1; i <= num; i++) {
        result *= i;
    }
    return result;
}

console.log(factorialFor(5));

// II way for loop 2

const factorialForRew = num => {
   
    let result = 1;
    for (let i = num; i >= 1; i--) {
        result *= i;
    }
    return result;
}

console.log(factorialForRew(5));

// III way recursion

const factorialRecursion = num => {
   
  if(num === 0 || num === 1) return 1;

  return num * factorialRecursion(num - 1);
}

console.log(factorialRecursion(5));
