function lovefunc(flower1, flower2) {
   if (flower1 % 2 === 0 && flower2 % 2 !== 0) {
    return true;
    } else  if (flower1 % 2 !== 0 && flower2 % 2 === 0) {
        return true;
    }
    return false;
  }

  console.log(lovefunc(1,1));
