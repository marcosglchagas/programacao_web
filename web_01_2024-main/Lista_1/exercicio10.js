"use strict";
function fatorial(numero) {
    if (numero === 0 || numero === 1) {
        return 1;
    }
    else {
        let resultado = 1;
        for (let i = 2; i <= numero; i++) {
            resultado *= i;
        }
        return resultado;
    }
}
console.log(fatorial(5));
console.log(fatorial(0));
console.log(fatorial(3));
