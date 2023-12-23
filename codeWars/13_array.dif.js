function arrayDiff(a, b) {
    return a.filter(function(num) {
        return b.indexOf(num) === -1;
    });
    }

console.log(arrayDiff([1,3,2,4,3,5,2], [2, 3 ]));