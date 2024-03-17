var Calculadora = /** @class */ (function () {
    function Calculadora(valor1, valor2) {
        this._valor1 = valor1;
        this._valor2 = valor2;
    }
    Object.defineProperty(Calculadora.prototype, "valor1", {
        // Getters e Setters
        get: function () {
            return this._valor1;
        },
        set: function (valor) {
            this._valor1 = valor;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Calculadora.prototype, "valor2", {
        get: function () {
            return this._valor2;
        },
        set: function (valor) {
            this._valor2 = valor;
        },
        enumerable: false,
        configurable: true
    });
    // Métodos de operações matemáticas
    Calculadora.prototype.soma = function () {
        return this._valor1 + this._valor2;
    };
    Calculadora.prototype.subtracao = function () {
        return this._valor1 - this._valor2;
    };
    Calculadora.prototype.multiplicacao = function () {
        return this._valor1 * this._valor2;
    };
    Calculadora.prototype.divisao = function () {
        if (this._valor2 === 0) {
            return "Erro: divisão por zero!";
        }
        return this._valor1 / this._valor2;
    };
    Calculadora.prototype.porcentagem = function () {
        return (this._valor1 / this._valor2) * 100;
    };
    return Calculadora;
}());
// Exemplo de uso da classe Calculadora
var calculadora = new Calculadora(10, 5);
console.log("Soma:", calculadora.soma());
console.log("Subtração:", calculadora.subtracao());
console.log("Multiplicação:", calculadora.multiplicacao());
console.log("Divisão:", calculadora.divisao());
console.log("Porcentagem:", calculadora.porcentagem());
