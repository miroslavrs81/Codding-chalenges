// I way
function bouncer(arr) {
  
    return arr.filter(function(item) {
         return item;
    });
 }
    
 console.log(bouncer([7, 'bouncer', false, '', 9]))
 
 // II way
 function bouncer(arr) {
   
     let truthies = [];
     
         for(let elem of arr) {
             if(elem) truthies.push(elem);
            }
             return truthies;
 }
     
console.log(bouncer([7, 'bouncer', false, '', 9]))