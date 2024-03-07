"use strict";
function Primo(numero) {
    if (numero <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            return false;
        }
    }
    return true;
}
console.log(Primo(7));
console.log(Primo(11));
console.log(Primo(15));
console.log(Primo(20));
