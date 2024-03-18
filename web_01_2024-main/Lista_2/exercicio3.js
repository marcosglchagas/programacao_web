var Produto = /** @class */ (function () {
    function Produto(nome, preco, quantidadeEmEstoque) {
        this._nome = nome;
        this._preco = preco;
        this._quantidadeEmEstoque = quantidadeEmEstoque;
    }
    Object.defineProperty(Produto.prototype, "nome", {
        get: function () {
            return this._nome;
        },
        set: function (nome) {
            this._nome = nome;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Produto.prototype, "preco", {
        get: function () {
            return this._preco;
        },
        set: function (preco) {
            this._preco = preco;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Produto.prototype, "quantidadeEmEstoque", {
        get: function () {
            return this._quantidadeEmEstoque;
        },
        set: function (quantidade) {
            this._quantidadeEmEstoque = quantidade;
        },
        enumerable: false,
        configurable: true
    });
    Produto.prototype.calcularValorTotalEmEstoque = function () {
        return this._preco * this._quantidadeEmEstoque;
    };
    Produto.prototype.reporEstoque = function (quantidade) {
        this._quantidadeEmEstoque += quantidade;
    };
    Produto.prototype.vender = function (quantidade) {
        if (quantidade > this._quantidadeEmEstoque) {
            throw new Error("Não há estoque suficiente para essa quantidade.");
        }
        this._quantidadeEmEstoque -= quantidade;
    };
    return Produto;
}());
var produto = new Produto("Camiseta", 59.99, 70);
console.log("Valor total em estoque:", produto.calcularValorTotalEmEstoque());
produto.reporEstoque(30);
console.log("Quantidade em estoque após reposição:", produto.quantidadeEmEstoque);
try {
    produto.vender(90);
}
catch (error) {
    console.error(error.message);
}
console.log("Quantidade em estoque após tentativa de venda:", produto.quantidadeEmEstoque);
