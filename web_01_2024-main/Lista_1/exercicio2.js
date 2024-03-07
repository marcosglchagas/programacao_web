"use strict";
function Par(numero) {
    return numero % 2 === 0;
}
if (Par(5)) {
    console.log("É par");
}
else
    console.log("É impar");
