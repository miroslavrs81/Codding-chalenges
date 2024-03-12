function solveHanoi(disc, src, aux, dest) {
    if (disc > 0) {
        solveHanoi(disc - 1, src, dest, aux);
        console.log(`Move disk ` + disc + ` from ` + src + ` to ` + dest);
        solveHanoi(disc - 1, aux, src, dest);
    }
}

solveHanoi(3, 'Src', 'Aux', 'Dst');
