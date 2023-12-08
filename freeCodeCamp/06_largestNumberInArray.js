// I way
function largestOfFour(arr) {
   
    let maxes = [];

    for(let i = 0; i < arr.length; i++) {
        let tempMax = arr[i][0];
        for(let j = 0; j < arr[i].length; j++) {
            let currentMax = arr[i][j];
            if(currentMax > tempMax) {
                tempMax = currentMax;
             }
        }
        maxes.push(tempMax);
    }
    return maxes;
}

console.log(largestOfFour([[1,5,9,4], [0,6,2,177], [23,12,4,45], [1,32,23,7]]));

// II way
function largestOfFour(arr) {

    let maxes = [0, 0, 0, 0]

    for (let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr.length; j++) {
            let currentMax = arr[i][j];
            if(currentMax > maxes[i]) {
                maxes[i] = currentMax;
            }
        }
    }
    return maxes;
}

console.log(largestOfFour([[1,5,9,4], [0,6,2,177], [23,12,4,45], [1,32,23,7]]));

// III way
function max(arr) {
    
    let maxNum = 0;

    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > maxNum){
            maxNum = arr[i];
        }
    }
    return maxNum;
}


console.log(max([1,5,9,14,3]));

function largestOfFour(arr) {

    let maxes = [];

    for (let i = 0; i < arr.length; i++) {
         let innerMax = max(arr[i]);
            maxes.push(innerMax);
        }
        return maxes;
}

console.log(largestOfFour([[1,5,9,4],[0,6,2,177],[23,12,4,45],[1,32,23,7]]));