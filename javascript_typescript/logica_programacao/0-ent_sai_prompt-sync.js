// IMPORTAÇÕES

//  ==> OPÇÃO 2
//  Digitar no terminal o comando: npm i prompt-sync
const prompt = require('prompt-sync')();

 // Entrada de dados
console.log("Digite o primeiro valor: ");
console.log("Digite o segundo valor: ");
var valor1 = prompt();
var valor2 = prompt();

// Processamento
var v1 = parseInt(valor1);
var v2 = parseInt(valor2);
var soma = v1 + v2;

// Saída
console.log("Resultado: ", soma);