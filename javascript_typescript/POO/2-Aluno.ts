// Crie uma classe Aluno que herda da classe Pessoa 
// e tenha um atributo adicional matricula.

import { Pessoa } from "./1-Pessoa";

class Aluno extends Pessoa {
    private _matricula: number;

    constructor (nome: string, idade: number, email: string, matricula: number) {
        super (nome, idade, email);
        this._matricula = matricula;
    }

    get getMatricula (): number {
        return this._matricula;
    }
}

export {Aluno};