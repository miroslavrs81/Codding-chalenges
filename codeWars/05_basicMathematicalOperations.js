function basicOp(operation, value1, value2) {
    switch (operation) {
        case '+': return value1 + value2;
        case '-': return value1 - value2;
        case '*': return value1 * value2;
        case '/': return value1 / value2;
        default:
          return 'You must specify operator';
      }
}

console.log(basicOp('+', 1, 3));
console.log(basicOp('-', 1, 3));
console.log(basicOp('*', 1, 3));
console.log(basicOp('/', 1, 3));
console.log(basicOp('', 1, 3));