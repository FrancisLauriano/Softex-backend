// EXERCICIOS - ESTRUTURA REPETIÇÃO - DO WHILE 

/* Sintaxe DO WHILE:
var x = y;
do {
    instrucao
} while (expressao)

--> Exemplo:
const quantidadeDeVoltas = 5;
let voltaAtual = 6;

do {
  console.log(voltaAtual);

  voltaAtual++;
} while (voltaAtual <= quantidadeDeVoltas);
*/

// ===== EXERCICIOS =====
// 1. Imprima os números de 1 a 10.

// let contador5=1;
// do {
//   console.log(contador5++);
// } while (contador5<=10);


// 2. Calcule a soma dos números de 1 a 100.

// let contador6=1;
// let soma3=0;
// do {
//   console.log(soma3=soma3+contador6++);
// } while (contador6<=100);

// 3. Conte e imprima a quantidade de números pares de 1 a 50.


// let contagem3=1;
// let qtdPares3=0;
// while(contagem3<=50){
//   if (contagem2%3===0) {
//     qtdPares3++;
//   }
// contagem3++;
// }
// console.log(qtdPares3);

let contagem3=1;
let qtdPares3=0;
do {
  contagem3%2===0;
  qtdPares3++;
  console.log(qtdPares3);
  break;
} while (contagem3<=50){
contagem3++;
};



// 4. Multiplique um número por 2 até que o resultado seja maior que 1000.

// 5. Verifique se um número é primo.

// 6. Faça o usuário digitar sua senha até que seja digitada a senha correta.

// 7. Imprima os múltiplos de 3 de 1 a 30.

// 8. Calcule a média de uma lista de números.

// 9. Calcule o fatorial de um número.

// 10. Imprima os números de 10 a 1 em ordem decrescente.
