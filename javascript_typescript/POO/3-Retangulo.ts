// Crie uma classe Retangulo com os atributos largura e altura e 
// métodos para calcular a área e o perímetro.

class Retangulo {
    private _altura: number;
    private _largura: number;

    constructor (altura: number, largura: number) {
        this._altura = altura;
        this._largura = largura
    }

    get getAltura (): number {
        return this._altura
    }

    get getLargura (): number {
        return this._largura
    }

    area (area: number) {
        return area = this._altura * this._largura;
    }

    perimetro (perimetro: number) {
        return perimetro = 2 * (this._altura + this._largura)
    }
}