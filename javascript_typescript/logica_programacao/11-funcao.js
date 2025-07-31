// const readline = require('readline-sync');
// const prompt = require('prompt-sync')();

//==> saudação
// function exibirSaudacao(nome){
//     console.log("Helo,", nome);

// }
// exibirSaudacao("Francis");


//==> data 
// function exibirSaudacao(nome, dia, mes, ano){
//     let mensagem = `Hello, ${nome}!\nHoje é ${dia} de ${mes} de ${ano}`
//     console.log(mensagem);

// }
// exibirSaudacao("Francis", 8, "agosto", 2023);

//**** LISTA DE EXERCICIOS - 1 *******
// Exercícios Funções sem retorno

// 1- Crie uma função chamada saudacao que exiba a mensagem "Olá, 
// mundo!" no console quando for chamada.

// function saudacao(nome){
//     console.log(`Olá, ${nome}`);
// }
// saudacao("Francis");

// 2- Escreva uma função chamada dobro que aceite um parâmetro num 
// e exiba o dobro desse número no console.

// function dobro(num){
//     console.log(num*2);
// }
// dobro(4);

// 3- Crie uma função chamada mostrarNumeros que receba dois parâmetros, 
// inicio e fim. Essa função deve exibir todos os números inteiros no 
// intervalo de inicio a fim (inclusive) no console.

// function mostrarNumeros(inicio, fim){

//     for(let contador = inicio; contador<=fim; contador++){
//         if(Number.isInteger(contador)){
//             console.log(contador);
//         }
//     }
// }

// mostrarNumeros(1,9);

// const readline = require('readline-sync');
// function mostrarNumeros(inicio, fim){
//    inicio = readline.questionInt(console.log(`Digite o primeiro número:`));
//     fim = readline.questionInt(console.log(`Digite o segundo número:`));
//     for(let contador = inicio; contador<=fim; contador++){
//         if(Number.isInteger(contador)){
//             console.log(contador);
//         }
//     }
// }
// mostrarNumeros();


// 4- Escreva uma função chamada verificarPar que aceite um número como 
// entrada e exiba no console se o número é par ou não.

// const readline =  require('readline-sync');
// function verificarPar(num1){
//     num1 = readline.questionInt(console.log(`Digite um número para verificação:`));

//     if(num1%2===0){
//         console.log(`O número ${num1} é um número par`);
//     } else {
//         console.log(`O número ${num1} não é número par`);
//     }
// }

// verificarPar();

// 5- Crie uma função chamada imprimirLista que aceite um array como 
// parâmetro e exiba cada elemento desse array no console, um por um.

// function imprimirLista(listaCompras) {
//     let resultado;
//     listaCompras = ["arroz", "feijão", "macarrão", "açúcar", "farinha","queijo"];
//     for(let contador2 = 0; contador2 < listaCompras.length; contador2++){
//         console.log(`${listaCompras[contador2]}`);
//     } 
// }
// imprimirLista();


//####### LISTA DE EXERCICIOS - 2 #######

// 1- Escreva uma função chamada calcularMedia que receba um array de números 
// como parâmetro e calcule a média desses números. 
// Não é necessário exibir o resultado, apenas retorne o valor da média.

// function calcularMedia(numeros) {
//     numeros = [3, 4, 6, 7, 9, 10];
//     let somaNumeros=0;
//     let media=0;
//     for(let contador3 = 0; contador3 < numeros.length; contador3++){
//         somaNumeros+=numeros[contador3];
//     }  
//     console.log(`Média dos números:${media = somaNumeros / numeros.length}`);
// }
// calcularMedia();



// 2- Crie uma função chamada maiorNumero que receba um array de números 
// como parâmetro e exiba o maior número presente no array no console.

// function maiorNumero(numeros2) {
//     numeros2 = [2, 4, 1 , 0, 100, 400, 150, 125, 64, 23];
//    console.log(Math.max.apply(null,numeros2));
// }

// maiorNumero();

// function maiorNumero(numeros2) {
//     numeros2 = [2, 4, 1 , 0, 100, 400, 150, 125, 64, 23];
//     let maior=0;
//     for(let contador4 = 0;contador4 < numeros2.length; contador4++){
//         if(numeros2[contador4]>maior){
//             maior=numeros2[contador4];
//         }
//     }
//     console.log(maior); 
// }
// maiorNumero();


// 3- Escreva uma função chamada contarVogais que aceite uma string 
// como parâmetro e conte quantas vogais (a, e, i, o, u) ela contém. 
// Exiba o resultado no console.

// function contarVogais(letras) {
//     letras = ["a", "b", "c", "d", "e", "f", "g", "h", "i"];
//     let qtdVogais = 0;
//     for(let i = 0; i < letras.length; i++){
//         if (letras[i]== "a" || letras[i]== "A" ||
//         letras[i]== "e" || letras[i]== "E" ||
//         letras[i]== "i" || letras[i]== "I" ||
//         letras[i]== "o" || letras[i]== "O" ||
//         letras[i]== "u" || letras[i]== "U"){ 
//              qtdVogais++
//         }  
//     }
//     console.log(qtdVogais); 
// }
// contarVogais();

// function contarVogais(letras){
//     letras = ["a", "b", "c", "d", "e", "f", "g", "h", "i"];
//     let vogais = ["a", "e", "i", "o", "u", "A", "E", "I", "O","U"]
//     let qtdVogais = 0;
//     for(let l = 0; l < letras.length; l++){
//         for(let v = 0; v < vogais.length; v++){
//         if (letras[l] === vogais[v]){ 
//              qtdVogais++
//             }  
//         }
//     }
//     console.log(qtdVogais); 
// }
// contarVogais();

// 4- Crie uma função chamada imprimirTabuada que aceite um número 
// como entrada e exiba a tabuada desse número de 1 a 10 no console.

// function imprimirTabuada(num2) {
//     num2 = 5;
//     for(let contador6 = 0; contador6 <= 10; contador6++){
//         console.log(`${num2} X ${contador6} = ${num2*contador6}`);
//     }
// }
// imprimirTabuada();

// 5- Escreva uma função chamada verificarPrimo que receba um 
// número como parâmetro e exiba no console se o número é primo ou não.

// function verificarPar(num3) {
//    num3 = 1064;
//    let primo;
//     for(contador7=0; contador7<=num3; contador7++){
//         if(num3%contador7===0){
//             primo="não é um numero primo";
//             break;
//         }else{
//             primo="é um número primo";
//             break;
//         }

//     }

//   console.log(`O número ${num3} ${primo}`);  
// }
// verificarPar();

// ---- OU -----

// function numeroPrimo(num) {
//     for (var i = 2; i < num; i++) {
//       if(num % i === 0) {
//          return false;
//       }
//     }
//     return num !== 1;  
//   }
//   console.log( numeroPrimo(13) );