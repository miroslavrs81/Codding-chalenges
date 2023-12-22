var moveZeroes = function(nums) {
  
let counter = 0;

for(let i = 0; i < nums.length; i++) {
    if(nums[i] === 0) {
        counter++;
    } else {
        [nums[i - counter], nums[i]] =[nums[i], nums[i - counter]]
    }
}
return nums;    
};

console.log(moveZeroes([0,1,0,3,12]));
