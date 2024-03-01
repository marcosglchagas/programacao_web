function maiorNum(numeros:number[]):number{
        if    (numeros.length==0){
            return 0;
        }
        let maiorNumero = numeros[0];
        for(let i=1; i < numeros.length; i++){
            if (numeros[i]> maiorNumero) {
                maiorNumero = numeros[i];                 
            }
        }
        return maiorNumero;
}

const numeros:number[] = [1,2,10,4,5];
const maiorNumero = maiorNum(numeros);
console.log("maior Numero é", maiorNumero);