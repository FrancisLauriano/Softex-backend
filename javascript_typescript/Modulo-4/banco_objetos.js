// banco : numero conta, agencia, tipo de conta, saldo, saque deposito

function Banco(agencia, conta, tipoConta, deposito, dataDeposito, saque, dataSaque, saldo){

		this.agencia = agencia;
		this.conta = conta;
		this.tipoConta = tipoConta;
		this.deposito = deposito;
		this.dataDeposito = dataDeposito
		this.saque = saque;
		this.dataSaque = dataSaque
		this.saldo = saldo;

		this.mostrarConta = function () {
			return console.log(`Número da sua conta: ${this.conta}`);
		}

		this.mostrarDeposito = function () {
			return console.log(`Valor do Depósito: ${(this.deposito).toLocaleString('pt-BR',{style: 'currency', currency: 'BRL'})} - Data do Depósito: ${this.dataDeposito}`);
		}

		this.mostrarSaque = function () {
			return console.log(`Valor do Saque: ${(this.saque).toLocaleString('pt-BR',{style: 'currency', currency: 'BRL'})} - Data do Saque: ${this.dataSaque}`);
		}

		this.mostrarSaldo = function () {
			this.saldo = (this.deposito) - (this.saque);
			return console.log(`Saldo atual da conta: ${(this.saldo).toLocaleString('pt-BR',{style: 'currency', currency: 'BRL'})}`);
		}

}

let banco = new Banco();
banco.conta = "123456-00";
banco.deposito = 10000;
banco.dataDeposito = "01/08/2023";
banco.saque = 3000;
banco.dataSaque = "10/08/2023"
banco.mostrarConta();
banco.mostrarDeposito();
banco.mostrarSaque();
banco.mostrarSaldo();




