// EXERCICIOS - ESTRUTURA CONDICIONAL (DE DECISÃO) - IF

/* Sintaxe IF:
 if (condicao) {
   bloco de código <-- se a condição for verdade, irá rodar instrução desse bloco de código.
    }
 --> Exemplo:
 if (CONDICAO) {
    console.log("xxxx"); 
 } 
 */

// 1. Verifique se um numero é positivo
let num1 = 10;
if(num1 >= 0) {
    console.log("É positivo: ", num1);
}

// 2. Verifique se um número é par.
let num2 = 20;
if(num2%2===0) {
    console.log("É par: ", num2);
}
 
// 3. Verifique se uma string é vazia.
let nome = "";
if(!nome)  {
    console.log("É vazia!");   
}  
// Outras formas de verificar STRING VAZIA: OU if(nome === "") OU if(nome.length === 0)
// Se for verificar OBJETO VAZIO: if(!objeto) OU if(objeto === {}) OU if(objeto.length === 0)
// Se for verificar ARRAY VAZIO: if(!arr) OU if(arr === []) OU if(arr.length === 0)

// 4. Verifique se um numero é maior que 10.
let num3 = 15;
if(num3>10) {
    console.log("É maior que 10 o numero: ", num3);
}

// 5. Verifique se uma variavel é booleano.
let num4 = true;
if(typeof num4 === "boolean") {
    console.log("É Booleano!")
}
/* OBS: 
--> "boolean" é um tipo primitivo.Ele pode ser convertido implicitamente para um texto:
 ("false" ou "true") ou um número (0 ou 1), 
 pode ser usado para representar falso ou verdadeiro no tipo, onde for necessário 
 --> Boolean é uma classe que encapsula um boolean é um tipo por referência, 
 portanto o seu valor de fato é um ponteiro que aponta para um objeto cujo valor
 é o booleano. 
 O valor padrão dele null.
 Obviamente a classe deriva Object e tem todas características 
 de um objeto como outro qualquer*/