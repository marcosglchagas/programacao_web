"use strict";
function somaNumerosPares(array) {
    let soma = 0;
    for (let num of array) {
        if (num % 2 === 0) {
            soma += num;
        }
    }
    return soma;
}
console.log(somaNumerosPares([1, 2, 3, 4, 5, 6]));
console.log(somaNumerosPares([2, 4, 6, 8, 10]));
console.log(somaNumerosPares([1, 3, 5, 7, 9]));
