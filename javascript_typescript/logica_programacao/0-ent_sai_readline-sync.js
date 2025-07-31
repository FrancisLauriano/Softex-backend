// IMPORTAÇÕES

// ==> OPÇÃO 1
// Digitar no terminal o comando: npm install readline-sync
const readline = require('readline-sync');
readline.questionInt();

// Entrada de dados
console.log("Digite o primeiro valor: ");
var valor1 = readline.questionInt();
var valor2 = readline.questionInt();

// Processamento
var soma = valor1 + valor2;

// Saída
console.log("Resultado: ", soma);

//  ==> OPÇÃO 2
//  Digitar no terminal o comando: npm i prompt-sync
