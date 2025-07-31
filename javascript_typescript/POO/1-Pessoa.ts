// Crie uma classe Pessoa com os atributos nome, idade e email.

export class Pessoa {
   private _nome: string;
   private _idade: number;
   private _email: string;

   constructor (nome: string, idade: number, email: string) {
    this._nome = nome;
    this._idade = idade;
    this._email = email
   }

   get getNome (): string {
    return this._nome;
   }

   get getIdade (): number {
    return this._idade
   }

   get getEmail (): string {
    return this._email
   }

}