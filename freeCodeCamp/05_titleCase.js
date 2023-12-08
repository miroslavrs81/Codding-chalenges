// I way
function titleCase(str) { 

    let words = str.split(" ");
 
    for(let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].slice(1);
    }
    return words.join(" ");
 }
 
 console.log(titleCase("Just for a test"));
 
 // II way
 function titleCase2(str) {
 
  let words = str.toLowerCase().split(" ").map(function(elem) {
     return elem[0].toUpperCase() + elem.slice(1);
 })
     return words.join(" ");
 }
 
 console.log(titleCase2("Just for a test"));