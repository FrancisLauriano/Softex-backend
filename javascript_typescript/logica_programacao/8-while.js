// EXERCICIOS - ESTRUTURA REPETIÇÃO - WHILE 

/* Sintaxe WHILE:
var x = y;
   while (expressao) {
    instrucao;
   }
-instrucao: bloco de código executado dentro do while.
-expressao: condição avaliada para a execução do bloco.
--> Exemplo:
let contador = 0;
while (contador < 50) {
  console.log("repetição nº " + contador);
  contador++;
}
*/

// ===== EXERCICIOS =====
// 1. Imprima os números de 1 a 10.

let contagem = 1;
while(contagem<=10){
  console.log(contagem++);
};


// 2. Calcule a soma dos números de 1 a 100.

let iSoma=1;
soma=0;
while(iSoma<=100){
  console.log(soma=soma+iSoma++); //  console.log(soma+=iSoma++);
}

// 3. Conte e imprima a quantidade de números pares de 1 a 50.
// Inicializa o contador e a variável para armazenar a quantidade de números pares

let contagem2=1;
let qtdPares=0;
while(contagem2<=50){
  if (contagem2%2===0) {
    qtdPares++;
  }
contagem2++;
}
console.log(qtdPares)


// 4. Multiplique um número por 2 até que o resultado seja maior que 1000.

let num1=3;
while (num1<=1000){
  num1*=2; //num1=num1*2
}
console.log(num1);


// 5. Verifique se um número é primo.

let numPrimo=0;
let contador=1;
while(contador<=100){
  if(contador==contador && contador%2!==0 && contador%1==0){
numPrimo++;
  }
contador++;
} 
console.log("Quantos numeros primso de 1 a 100:", numPrimo);

//6. Faça o usuário digitar sua senha até que seja digitada a senha correta.

const readline = require('readline-sync');
let senha = console.log("Digite senha com apenas numeros: ");
readline.questionInt();
while (senha === isNaN) {
  console.log("Senha incorreta!\nTente novamente!");
}

// 7. Imprima os múltiplos de 3 de 1 a 30.

mult3=1;
while(mult3<=30){
  console.log(mult3*=3)
}

// 8. Calcule a média de uma lista de números.

let listaNum=[10,8,9,7,3,4,5,2];
let soma2=0;
let contador3=0;

while(contador3 < listaNum.length){
  soma2=soma2+listaNum[contador3]
  contador3++
}
let media2= soma2/listaNum.length
console.log("A média é:", media2);

// 9. Calcule o fatorial de um número.

let fatorial=1;
let contador4=1
let num3=8;
while (contador4<=num3) {
  console.log(fatorial*=contador4++); // fatorial=fatorial*contador++
}


// 10. Imprima os números de 10 a 1 em ordem decrescente.

contador2=10;
while(contador2>=1){
  console.log(contador2--)
}