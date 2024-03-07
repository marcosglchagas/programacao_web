"use strict";
function acrescentaPorcentagem(valor, porcentagem) {
    const acrescimo = (valor * porcentagem) / 100;
    return valor + acrescimo;
}
console.log(acrescentaPorcentagem(100, 10));
console.log(acrescentaPorcentagem(50, 20));
console.log(acrescentaPorcentagem(200, 5));
