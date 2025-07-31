// Crie uma classe Círculo com o atributo raio e 
// métodos para calcular a área e a circunferência.

class Circulo {
    private _raio: number;

    constructor (raio: number) {
        this._raio = raio;
    }

    get getRaio (): number {
        return this._raio
    }

    area (area: number) {
       return area = 3.14 * (this._raio * this._raio)
    }

    circuferencia (circuferencia: number) {
        return circuferencia = 3.14 * (this._raio * 2)
    }

}