// I way
function solution(str, ending){
    
    if(ending === '') return true;
    
    let test = str.slice(-ending.length);
      if(test === ending) return true;
      return false;
  }

  console.log(solution('abc', 'bc'));

// II way
  function solution(str, ending){
     return str.endsWith(ending);
  }

  console.log(solution('abc', 'bc'));