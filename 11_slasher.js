// I way
function slasher(arr, howMany) {

    arr.splice(0, howMany);
    return arr;
}

console.log(slasher([1, 2, 3, 5, 9, 10], 2));

// II way
function slasher(arr, howMany) {

  return arr.slice(howMany);
}

console.log(slasher([1, 2, 3, 5, 9, 10], 2));
