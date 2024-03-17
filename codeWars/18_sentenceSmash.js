function smash (words) {
    return words.join(',').replaceAll(',', ' ');
 };

 console.log(smash(['hello', 'world', 'this', 'is', 'great']));