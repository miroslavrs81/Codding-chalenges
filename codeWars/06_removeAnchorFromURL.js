function removeUrlAnchor(url) {
    
    let justUrl = url.split('#');
    return justUrl[0];
}

console.log(removeUrlAnchor("www.codewars.com#about"));