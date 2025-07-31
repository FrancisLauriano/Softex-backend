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

// let contador = 1;
// while(contador<=10){
//   console.log(contador++);
// }


// 2. Calcule a soma dos números de 1 a 100.

// let contador2 = 1;
// let somaC=0;
// while(contador2<=100){
//   contador2++;
//   somaC=somaC+contador2;
//   console.log(somaC);
// }


// 3. Conte e imprima a quantidade de números pares de 1 a 50.
// Inicializa o contador e a variável para armazenar a quantidade de números pares

// let contador3 = 0;
// while(contador3<=50){
//   if (contador3%2===0){
//     console.log(contador3);
//   }
//   contador3++;
// }


// 4. Multiplique um número por 2 até que o resultado seja maior que 1000.

// let contador4=6;
// while(contador4<=1001){
//   console.log(contador4*=2);
// }


// 5. Verifique se um número é primo.

/* let num1=1; // primeiro numero de entrada do intevalo para verificar qtd de primos
let num2=100; // ultimo numero de entrada do intevalo para verificar qtd de primos
let qtdPrimos=0; // quantidade de números primos no intervalor antes de iniciar a contagem
let cont = num1; // contador inicial de incremento inicia em num1
cont=2; // o primeiro numero primo a partir de 0 é o número 2. O contador deverá iniciar a contagem a partir do números 2;
while(cont<=num2){
  let primo=true;
  let iDivisores=2;
  let qtdDivisores=0;
  while(iDivisores<cont){
    if(cont%iDivisores===0){
      primo=false;
      break;
    } 
  iDivisores++;
  }
  if(primo){
    qtdPrimos++; 
  }
cont++;
}
console.log(`Entre ${num1} e ${num2} tem ${qtdPrimos} números primos!`); */


//6. Faça o usuário digitar sua senha até que seja digitada a senha correta.

// const readline = require('readline-sync');

// while(true){
//   console.log(`Digite uma senha com seis números inteiros`);
//   let senha = readline.questionInt();

//   if(Number.isInteger(senha) & senha <= 000001){
//     console.log(`Cadastro realizado com sucesso!`);
//     break;
//   } else{
//     console.log(`Cadastro não realizado!\nTente novamente!`);
//     continue;
//   }
// }



// 7. Imprima os múltiplos de 3 de 1 a 30.

// let contador5=1;
// while(contador5 <= 30){
//   if(contador5%3===0){
//     console.log(contador5);
//   }
// contador5++;
// }


//==> 8. Calcule a média de uma lista de números.



// 9. Calcule o fatorial de um número.
// n!=n⋅(n−1)⋅(n−2)...

// let numF=8;
// let contador6=1;
// let fatorial=1;
// while(contador6<=numF){
//   fatorial *= contador6++;
//   console.log(fatorial);
// }



// 10. Imprima os números de 10 a 1 em ordem decrescente.

// let contador7=10;
// while(contador7>=1){
//   console.log(contador7--);
// }