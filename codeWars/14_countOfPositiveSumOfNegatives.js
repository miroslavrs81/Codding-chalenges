function countPositivesSumNegatives(input) {

    let counter = 0;
    let negativeSum = 0;

    if (input === null || input === undefined || input.length === 0) {
        return [];
    }

    for(let i = 0; i < input.length; i++) {
        if(input[i] > 0) {
            counter++
        } else if(input[i] < 0) {
        negativeSum += input[i];
    }
  }
  return [counter, negativeSum];
}

  console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]))
  console.log(countPositivesSumNegatives([0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14])); 