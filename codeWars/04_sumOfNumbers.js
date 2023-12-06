function getSum(a, b) { 
  
    let sum = 0;
  
      if (a === b) {
          return a;
      } 
      
      if (a < b) {
          while (a <= b) {
              sum += a;
              a = a + 1;
          }  
      } 
      
      else if (a > b) {
          while (b <= a) {
          sum += b;
          b = b + 1;
         }
     }
    return sum;
  }
console.log(getSum(4, 3))