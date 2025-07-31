// const readline = require('readline-sync');
// const prompt = require('prompt-sync')();

//**** LISTA DE EXERCICIOS - 1 *******

// 1. Dado o array abaixo, acesse o segundo elemento e armazene-o em uma variável chamada"segundoElemento". 
// PARA ATRIBUIR VALOR A UM ELEMENTO DA ARRAY: nomeDaArray[posicaoDoElemento] = "atribuição"
const meuArray = [10, 20, 30, 40, 50];
meuArray[1]="segundoElemento";
console.log("1. Questão:", meuArray[1]);

// 2. Calcule e exiba o tamanho do seguinte array: 
// PARA EXIBIR TODOS ELEMENTOS ARRAY: console.log(nomeDaArray);
// PARA EXIBIR O TAMANHO ARRAY - USAR FUNÇÃO length: console.log(nomeDaArray.length);
const frutas = ['maçã', 'banana', 'laranja', 'uva', 'manga'];
console.log("2. Questão:",frutas.length);

// 3. Adicione o elemento "pera" ao final do array de frutas do exercício anterior.
//PARA ADICIONAR UM ELEMENTO A UMA ARRAY - USAR FUNÇÃO push: (nomeDaArray.push("nomeDoElemento"));
const frutas_1 = ["maçã", "banana", "laranja", "uva", "manga"];
frutas_1.push("pera")
console.log("3. Questão:",frutas_1);

// 4. Remova o primeiro elemento do array de frutas do exercício anterior.
//PARA REMOVER ELEMENTOS A UMA ARRAY - USAR FUNÇÃO splice:(nomeDaArray.splice(posicaooDoElemento,qtdDeElementosRemover));
let frutas_2 = ["maçã", "banana", "laranja", "uva", "manga"]; 
frutas_2.splice(0,1);
console.log("4. Questão:", frutas_2);


// 5. Dado o array abaixo, verifique se o número 25 está presente e exiba uma mensagem indicando se ele foi encontrado ou não. 
// PARA VERIFICAR SE UM ELEMENTRO FAZ PARTE DA ARRAY -  USAR FUNÇÃO includes: includesTwenty = nomeDaArray.includes(nomeOuValorDoElemento)
const numeros = [10, 20, 30, 40, 50];
console.log("5. Questão: Existe o número 25?", includesTwenty = numeros.includes(25))


//####### LISTA DE EXERCICIOS - 2 #######

//1. Criar array com numero de 1 a 5, e concatenar novo array
// PARA CONCATENAR ARRAY - USAR FUNÇÃO concat
const num1 = [1,2,3,4,5];
const num2 = [1,2,3,4,5]; 
console.log("1. Questão-2.Lista", num1.concat(num2)); 

//2. Dado o array de números abaixo, crie um novo array contendo apenas os números pares.
// PARA RETORNAR NÚMEROS PARES, IMPARES, NEGATIVOS, POSITIVOS, TIPOS NUMBER, STRING ETC - USAR FUNÇÃO filter:
// nomeDaArray.filter (elementoDaArrayQueDesejaFiltrar) ==> 
const numeros2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const par = x => x%2===0;
console.log("2. Questão-2.Lista", numeros2.filter(par));


//3. Ordene o seguinte array de números em ordem crescente.  
//PARA ORDENAR ELEMENTOS DA ARRAY EM ORDEM CRESCENTE - USAR FUNÇÃO sort
const numeros3 = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
function ordCrescente (a, b) {
    return a - b;
}

function ordDecrescente (a, b) {
    return b - a;
}
console.log("3. Questão-2.Lista (CRESCENTE)", numeros3.sort(ordCrescente));
console.log("3. Questão-2.Lista (DECRESCENTE)", numeros3.sort(ordDecrescente));


//4. Dado o array de frutas abaixo, encontre o índice em que a fruta "laranja" está localizada.
//PARA ENCONTRAR A LOCALIZAÇAO DO INDICE DE UM ELEMENTO NA ARRAY - USAR FUNÇÃO indexOf
const frutas_3 = ['maçã', 'banana', 'laranja', 'uva', 'manga'];
console.log("4. Questão-2.Lista", frutas.indexOf("laranja"));

// 5. Crie uma função que receba um parâmetro e verifique se é um array ou não. 
//A função deve retornar true se for um array e false caso contrário.
//PARA SABER SE É UMA ARRY OU NÃO - USAR FUNÇÃO Array.isArray()
const frutas_4 = ['maçã', 'banana', 'laranja', 'uva', 'manga'];
console.log("5. Questão-2.Lista:", Array.isArray(frutas_4));
