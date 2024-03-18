class Produto {
    private _nome: string;
    private _preco: number;
    private _quantidadeEmEstoque: number;

    constructor(nome: string, preco: number, quantidadeEmEstoque: number) {
        this._nome = nome;
        this._preco = preco;
        this._quantidadeEmEstoque = quantidadeEmEstoque;
    }

    get nome(): string {
        return this._nome;
    }

    set nome(nome: string) {
        this._nome = nome;
    }

    get preco(): number {
        return this._preco;
    }

    set preco(preco: number) {
        this._preco = preco;
    }

    get quantidadeEmEstoque(): number {
        return this._quantidadeEmEstoque;
    }

    set quantidadeEmEstoque(quantidade: number) {
        this._quantidadeEmEstoque = quantidade;
    }

    calcularValorTotalEmEstoque(): number {
        return this._preco * this._quantidadeEmEstoque;
    }

    reporEstoque(quantidade: number): void {
        this._quantidadeEmEstoque += quantidade;
    }

    vender(quantidade: number): void | string {
        if (quantidade > this._quantidadeEmEstoque) {
            throw new Error("Não há estoque suficiente para essa quantidade.");
        }
        this._quantidadeEmEstoque -= quantidade;
    }
}

const produto = new Produto("Camiseta", 59.99, 70);
console.log("Valor total em estoque:", produto.calcularValorTotalEmEstoque());

produto.reporEstoque(30);
console.log("Quantidade em estoque após reposição:", produto.quantidadeEmEstoque);

try {
    produto.vender(90);
} catch (error) {
    console.error(error.message);
}

console.log("Quantidade em estoque após tentativa de venda:", produto.quantidadeEmEstoque);