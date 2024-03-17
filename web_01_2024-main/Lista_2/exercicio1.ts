class Carro {
    private _marca: string;
    private _modelo: string;
    private _anoFabricacao: number;

    constructor(marca: string, modelo: string, anoFabricacao: number) {
        this._marca = marca;
        this._modelo = modelo;
        this._anoFabricacao = anoFabricacao;
    }

    // Getters
    get marca(): string {
        return this._marca;
    }

    get modelo(): string {
        return this._modelo;
    }

    get anoFabricacao(): number {
        return this._anoFabricacao;
    }

    // Setters
    set marca(marca: string) {
        this._marca = marca;
    }

    set modelo(modelo: string) {
        this._modelo = modelo;
    }

    set anoFabricacao(anoFabricacao: number) {
        this._anoFabricacao = anoFabricacao;
    }

    // Método para calcular a idade do carro com base no ano atual
    calcularIdade(): number {
        const anoAtual: number = new Date().getFullYear();
        return anoAtual - this._anoFabricacao;
    }
}

// Criando uma instância de Carro
const meuCarro = new Carro("Toyota", "Corolla", 2018);

// Exibindo informações do carro
console.log("Marca:", meuCarro.marca);
console.log("Modelo:", meuCarro.modelo);
console.log("Ano de fabricação:", meuCarro.anoFabricacao);

// Calculando e exibindo a idade do carro
console.log("Idade do carro:", meuCarro.calcularIdade(), "anos");