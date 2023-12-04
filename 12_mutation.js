// I way
function mutation(arr){
    let firstWord = arr[0].toLowerCase();
    let secondWord = arr[1].toLowerCase();
    
    for (let i = 0; i < secondWord.length; i++){
        if (firstWord.indexOf(secondWord[i]) === -1) return false;
    }
    return true;
}
    
console.log(mutation(['hello', 'hey']));

// II way
function mutation(arr){
    let firstWord = arr[0].toLowerCase();
    let secondWord = arr[1].toLowerCase();
    
    for (letter of secondWord){
        if (firstWord.indexOf(letter) === -1) return false;
    }
    return true;
}
    
console.log(mutation(['hello', 'he']));

// III way
function mutation(arr){
    let firstWord = arr[0].toLowerCase();
    let secondWord = arr[1].toLowerCase();
    
    for (letter of secondWord){
        if (!firstWord.includes(letter))  return false;
    }
    return true;
}
    
console.log(mutation(['hello', 'hew']));

    