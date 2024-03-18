class Calculadora {
    private _valor1: number;
    private _valor2: number;

    constructor(valor1: number, valor2: number) {
        this._valor1 = valor1;
        this._valor2 = valor2;
    }

    get valor1(): number {
        return this._valor1;
    }

    set valor1(valor: number) {
        this._valor1 = valor;
    }

    get valor2(): number {
        return this._valor2;
    }

    set valor2(valor: number) {
        this._valor2 = valor;
    }

    soma(): number {
        return this._valor1 + this._valor2;
    }

    subtracao(): number {
        return this._valor1 - this._valor2;
    }

    multiplicacao(): number {
        return this._valor1 * this._valor2;
    }

    divisao(): number | string {
        if (this._valor2 === 0) {
            return "Erro: divisão por zero!";
        }
        return this._valor1 / this._valor2;
    }

    porcentagem(): number {
        return (this._valor1 / this._valor2) * 100;
    }
}

const calculadora = new Calculadora(25, 10);
console.log("Soma:", calculadora.soma());
console.log("Subtração:", calculadora.subtracao());
console.log("Multiplicação:", calculadora.multiplicacao());
console.log("Divisão:", calculadora.divisao());
console.log("Porcentagem:", calculadora.porcentagem());