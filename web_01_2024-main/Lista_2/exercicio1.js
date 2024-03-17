var Carro = /** @class */ (function () {
    function Carro(marca, modelo, anoFabricacao) {
        this._marca = marca;
        this._modelo = modelo;
        this._anoFabricacao = anoFabricacao;
    }
    Object.defineProperty(Carro.prototype, "marca", {
        // Getters
        get: function () {
            return this._marca;
        },
        // Setters
        set: function (marca) {
            this._marca = marca;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Carro.prototype, "modelo", {
        get: function () {
            return this._modelo;
        },
        set: function (modelo) {
            this._modelo = modelo;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Carro.prototype, "anoFabricacao", {
        get: function () {
            return this._anoFabricacao;
        },
        set: function (anoFabricacao) {
            this._anoFabricacao = anoFabricacao;
        },
        enumerable: false,
        configurable: true
    });
    // Método para calcular a idade do carro com base no ano atual
    Carro.prototype.calcularIdade = function () {
        var anoAtual = new Date().getFullYear();
        return anoAtual - this._anoFabricacao;
    };
    return Carro;
}());
// Criando uma instância de Carro
var meuCarro = new Carro("Toyota", "Corolla", 2018);
// Exibindo informações do carro
console.log("Marca:", meuCarro.marca);
console.log("Modelo:", meuCarro.modelo);
console.log("Ano de fabricação:", meuCarro.anoFabricacao);
// Calculando e exibindo a idade do carro
console.log("Idade do carro:", meuCarro.calcularIdade(), "anos");
