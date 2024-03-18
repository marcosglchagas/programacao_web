var Carro = /** @class */ (function () {
    function Carro(marca, modelo, anoFabricacao) {
        this._marca = marca;
        this._modelo = modelo;
        this._anoFabricacao = anoFabricacao;
    }
    Object.defineProperty(Carro.prototype, "marca", {
        get: function () {
            return this._marca;
        },
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
    Carro.prototype.calcularIdade = function () {
        var anoAtual = new Date().getFullYear();
        return anoAtual - this._anoFabricacao;
    };
    return Carro;
}());
var meuCarro = new Carro("Volkswagem", "Saveiro", 2020);
console.log("Marca:", meuCarro.marca);
console.log("Modelo:", meuCarro.modelo);
console.log("Ano de fabricação:", meuCarro.anoFabricacao);
console.log("Idade do carro:", meuCarro.calcularIdade(), "anos");
