//**** LISTA DE EXERCICIOS - 1 *******

// 1-Dado o array abaixo, acesse o segundo elemento e 
// armazene-o em uma variável chamada "segundoElemento". 

// const meuArray = [10, 20, 30, 40, 50];
// console.log(meuArray[1]);
// let segundoElemento = meuArray[1];
// console.log(segundoElemento);

// 2-Calcule e exiba o tamanho do seguinte array: 

// const frutas = ['maçã', 'banana', 'laranja', 'uva', 'manga'];
// let tamanhoFrutas = frutas.length;
// console.log(tamanhoFrutas);

// 3-Adicione o elemento "pera" ao final do array de frutas do exercício anterior.

// const frutas = ['maçã', 'banana', 'laranja', 'uva', 'manga'];
// frutas.push("pera");
// console.log(frutas);

//4-Remova o primeiro elemento do array de frutas do exercício anterior.

// const frutas = ['maçã', 'banana', 'laranja', 'uva', 'manga'];
// let remover1 = frutas.shift();
// console.log(frutas);


//5-Dado o array abaixo, verifique se o número 25 
// está presente e exiba uma mensagem indicando se ele foi encontrado ou não. 

// const numeros = [10, 20, 30, 40, 50];
// if(numeros.indexOf(25)>=0){
//     console.log("Valor encontrado!");
// }else{
//     console.log("Infelizmente o valor não foi encontrado!");
// }

//####### LISTA DE EXERCICIOS - 2 #######

//1- Crie dois arrays com números de 1 a 5 cada e, em seguida, concatene-os 
// em um novo array.

// let minhaArray2 = [1, 2, 3, 4, 5];
// let minhaArray3 = [1, 2, 3, 4, 5];
// let concatenar2 = minhaArray2.concat(minhaArray3);
// console.log(concatenar2);

//2- Dado o array de números abaixo, crie um novo array contendo 
// apenas os números pares.

// const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let pares = numeros.filter((numerosPares) => numerosPares%2===0);
// console.log(pares);

//3-Ordene o seguinte array de números em ordem crescente. 

// const numeros2 = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];

// numeros2.sort((a,b) => a-b);
//     console.log(numeros2);

// numeros2.sort(function crescente(a,b) {
//     return b-a});
//     console.log(numeros2);

//4- Dado o array de frutas abaixo, encontre o índice em que a 
//fruta "laranja" está localizada.

// const frutas = ['maçã', 'banana', 'laranja', 'uva', 'manga'];
// let localizar1 = frutas.indexOf("laranja");
// console.log(`Laranja está localizada no índice ${localizar1}`);

//5- Crie uma função que receba um parâmetro e verifique se é 
// um array ou não. A função deve retornar true se for um array e 
// false caso contrário.

// const frutas = ['maçã', 'banana', 'laranja', 'uva', 'manga'];

// function minhaArray4(frutas){
//     console.log(Array.isArray(frutas));
// }

// minhaArray4(['maçã', 'banana', 'laranja', 'uva', 'manga']);


// function minhaArray4(){
//     let frutas = 'maçã';
//     console.log(Array.isArray(frutas));
// }
// minhaArray4();