// I way
function abbrevName(name){
   let initials = '';
   let words = name.toUpperCase().split(' ');
   for(let word of words) {
   initials += word.slice(0,1) + ' ';
   }
   return initials.replace(' ','.');
}
console.log(abbrevName("Evan Cole"));

//  II way

function abbrevName(name) {
    let words = name.split(" ");
    return (words[0][0] + "." + words[1][0]).toUpperCase();
 }
 console.log(abbrevName("Evan Cole"));
