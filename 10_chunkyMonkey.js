// I way
function chunkArrayInGroups(arr, size) {

    let groups = [];

    while(arr.length > 0) {
        groups.push(arr.slice(0, size));
        arr = arr.slice(size);
    }
    return groups;
}

console.log(chunkArrayInGroups(['a', 'b', 'c', 'd', 'e'], 2));

// II way
function chunkArrayInGroups(arr, size) {

    let groups = [];

    while(arr.length > 0) {
        groups.push(arr.splice(0, size));
    }
    return groups;
}

console.log(chunkArrayInGroups(['a', 'b', 'c', 'd', 'e'], 2));