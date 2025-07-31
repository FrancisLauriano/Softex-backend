// Crie uma classe ContaBancaria com os atributos saldo e numeroConta e 
// métodos para depositar, sacar e verificar o saldo.

class ContaBancaria {
    private _saldo: number;
    private _numeroConta: string;

    constructor (saldo: number, numeroConta: string) {
        this._saldo = saldo;
        this._numeroConta = numeroConta
    }

    get getSaldo (): number {
        return this._saldo
    }

    get getNumeroConta (): string {
        return this._numeroConta
    }

    depositar (valorDeposito: number): void {
        if ( valorDeposito > 0) {
            this._saldo += valorDeposito;
            console.log(`Depósito no valor de R$ ${valorDeposito.toFixed(2)} foi realizado com sucesso!`);
            
        }else {
            console.log(`Valor de depósito inválido!`);
            
        }
    }

    sacar (valorSaque: number): void {
        if (valorSaque > 0 && valorSaque <= this._saldo) {
            this._saldo -= valorSaque;
            console.log(`Saque no valor de R$ ${valorSaque.toFixed(2)} foi realizado com sucesso!`);
        }else if (valorSaque > this._saldo) {
            console.log(`Saldo insuficiente para realizar o saque!`);
            
        }else {
            console.log(`Valor de saque inválido!`);
        }
    }

    verificarSaldo() {
        return this._saldo;
    }
}

//uso da classe ContaBancaria
const minhaConta = new ContaBancaria(1000.0, "12345");

console.log(`Saldo atual: R$${minhaConta.verificarSaldo().toFixed(2)}`);

minhaConta.depositar(500.0);
console.log(`Saldo atual após depósito: R$${minhaConta.verificarSaldo().toFixed(2)}`);

minhaConta.sacar(200.0);
console.log(`Saldo atual após saque: R$${minhaConta.verificarSaldo().toFixed(2)}`);

minhaConta.sacar(2000.0);
console.log(`Saldo atual após tentativa de saque inválido: R$${minhaConta.verificarSaldo().toFixed(2)}`);