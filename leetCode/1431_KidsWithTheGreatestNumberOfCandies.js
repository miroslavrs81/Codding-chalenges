var kidsWithCandies = function(candies, extraCandies) {
    
    let result = [];
    let maxCandies = Math.max(...candies);

    for(let i = 0; i < candies.length; i++) {
        if (candies[i] + extraCandies >= maxCandies) {
        result.push(true);
    } else if (candies[i] + extraCandies < maxCandies){
            result.push(false);
        }
    }
  return result;
}



console.log(kidsWithCandies([2,3,5,1,3], 3))
