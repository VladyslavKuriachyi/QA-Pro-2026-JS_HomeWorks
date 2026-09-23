function exponentiation(x, y) {
    let result = 1;
    for (let i = 1; i <= y; i++) {
        result = result * x;
    }
    if (y < 0) {
     for (let i = 1; i <= -y; i++) {
         result = result / x;
     }
    }
    return result;
}

console.log(exponentiation(2, 3));
console.log(exponentiation(2, 0));
console.log(exponentiation(2, -3));