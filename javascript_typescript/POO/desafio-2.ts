// A fim de representar empregados em uma firma, 
// crie uma classe chamada Empregado que inclui as três informações a seguir como atributos:
// um primeiro nome, um sobrenome, e um salário mensal.
// Sua classe deve ter um construtor que inicializa os três atributos. 
// Forneça um método set e get para cada atributo. 
// Se o salário mensal não for positivo, configure-o como 0.0.


export class Empregado {
    private _nome: string;
    private _sobrenome: string;
    private _salarioMensal: number;

    constructor (nome: string, sobrenome: string, salarioMensal: number) {
        this._nome = nome;
        this._sobrenome = sobrenome;
        this._salarioMensal = salarioMensal > 0? salarioMensal : 0.0;
    }

    getNome (): string {
        return this._nome;
    }

    getSobrenome (): string {
        return this._sobrenome;
    }

    getSalario (): number {
        return this._salarioMensal;
    }

    setNome (nome: string): void {
        this._nome = nome;
    }

    setSobrenome (sobrenome: string): void {
        this._sobrenome = sobrenome;
    }

    setSalario (salarioMensal: number): void {
        this._salarioMensal = salarioMensal > 0 ? salarioMensal : 0.0;
    }

    salarioAnual ():number {
        const salarioAnual = this._salarioMensal * 12;
        return salarioAnual;
    }

    aumentoSalario (percentual: number): void{
       this._salarioMensal += (this._salarioMensal*percentual) / 100;
        
    }

}
 
