// I way
function confirmEnd(test, target) {

    if (test.endsWith(target)) {
        return true;
      }
       return false;
    }
    
    console.log(confirmEnd("Testing", 'ing'));
    
    // II way
    function confirmEnd(test, target) {
     
        let smallTest = test.slice(-target.length);
        if (smallTest === target) return true;
    }
    
    console.log(confirmEnd("Testing", 'ing'));
    
    // III way
    function confirmEnd(test, target) {
     
        return test.slice(-target.length) === target;
    }
    
    console.log(confirmEnd("Testing", 'ing'));
    
    // VI way
    
    function confirmEnd(test, target) {
     
        return test.substr(-target.length) === target;
    }
    
    console.log(confirmEnd("Testing", 'ing'));