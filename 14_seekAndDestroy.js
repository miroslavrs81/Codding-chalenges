// I way
function destroyer(arr) {

    let args = Array.from(arguments);
    let targets = args.slice(1);
    let result = [];

    for (let num of arr) {
        if (targets.indexOf(num) === -1){
            result.push(num);
    }
  }
  return result; 
}
 
console.log(destroyer([1,3,2,4,3,5,2], 2, 3 ));

// II way
function destroyer(arr){

    let args = Array.from(arguments);
    args.splice(0, 1);
    let targets = args; 
    let result = [];

    for (let num of arr){
        if (targets.indexOf( num ) === -1 ){
            result.push( num );
    }    
  }
  return result;  
}
 
console.log(destroyer([1,3,2,4,3,5,2], 2, 3 ));


// III way
function destroyer(arr) {

    let args = Array.from(arguments);
    args.splice(0, 1);
    let targets = args;
    
       return arr.filter(function(num) {
        return targets.indexOf(num) === -1;
       });
 }
 
console.log(destroyer ([1,3,2,4,3,5,2], 2, 3 ));