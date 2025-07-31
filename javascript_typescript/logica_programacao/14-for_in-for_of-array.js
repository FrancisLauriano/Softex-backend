// 1- Dado um array de números [3, 7, 2, 9, 5], crie um loop 
// "for" que itere pelo array e exiba cada elemento no console

// let num1 = [3, 7, 2, 9, 5];
// for (let i of num1){
//     console.log(i);
// }

// 2- Suponha que você tenha um objeto com valores 
// numéricos: {a: 10, b: 20, c: 30, d: 40}. 
// Utilize um laço "for...in" para iterar pelas chaves do objeto e 
// calcular a soma de todos os valores.

// let numericos = [{a: 10, b: 20, c: 30, d: 40}];

// function somaNumeros (numeros){
//     let soma =0;
//     for(let item of numeros){
//         for(let proriedade in item){
//             soma += item[proriedade];
//         }
//     }
//     return soma;
// }
// console.log(somaNumeros(numericos));

// 3- Dado um array de números [12, 5, 8, 21, 16, 7], crie um loop "for" 
// que itere pelo array, verificando se cada número é par. Se for par, 
// adicione-o a um novo array. No final, exiba o novo array com os números pares.


// let numeros = [12, 5, 8, 21, 16, 7];
// let pares= [];
// for(let i of numeros){
//     if(i%2===0){
//        pares.push(i);
//     }
// }
// console.log(pares);

// 1- Considere um objeto com informações de estudantes: 
// const estudantes = { alice: 18, bob: 20, carol: 19, david: 21 }; 
// Utilize um loop "for...in" para verificar se há um estudante com 
// a idade de 19 anos. Se sim, exiba "Nome do estudante: idade" no console.

// let estudantes = [{ alice: 18, bob: 20, carol: 19, david: 21 }];  
// function verificaIdade (estudantes){
//     let lista = null;
//     for(let listaNomes of estudantes){
//         for(let idade in listaNomes){
//             if (listaNomes[idade] === 19){
//                 lista = [{nome: idade, idade: listaNomes[idade]}];
//                 break;
//             }   
//         }
//     }
//     return lista;   
// }
// let resultado = verificaIdade(estudantes);
// console.log(resultado);


// 2- Imagine que você tem uma matriz bidimensional representando uma grade 
// de pontos: const pontos = [ [2, 5, 8], [3, 9, 12], [4, 6, 10] ]; 
// Utilize dois loops "for" aninhados para calcular a soma de todos os elementos 
// da matriz e exibir o resultado.

// const pontos = [ [2, 5, 8], [3, 9, 12], [4, 6, 10] ]; 

// function soma2 (num2){
//     let soma2=0;
//     for(let item3 of num2){
//         for (let proriedade3 in item3){
//             soma2 += item3[proriedade3];
//         }
//     }
//     return soma2;
// }
// console.log(soma2(pontos));

