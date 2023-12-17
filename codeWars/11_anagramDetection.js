// write the function isAnagram
var isAnagram = function(test, original) {

    let testSmall = test.toLowerCase().split('').sort().join('');
    let originalSmall = original.toLowerCase().split('').sort().join('');

    if (testSmall === originalSmall) return true;
      return false;
};

console.log(isAnagram('Buckethead', 'DeathCubeKa'));