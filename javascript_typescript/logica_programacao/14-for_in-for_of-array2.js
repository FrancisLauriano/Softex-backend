// const usuarios = [
//   {nome: "Robinson", idade: 18},
//   {nome: "William", idade: 28},
// ];

// ==> FOR IN
// for (let item in usuarios) {
//   console.log(usuarios[item].nome);
//   console.log(usuarios[item].idade);
// }

// ==> FOR OF
// for (let item of usuarios) {
//   console.log(item.nome);
//   console.log(item.idade);
// }

// 1- Dado um array de números [3, 7, 2, 9, 5], crie um loop
// "for" que itere pelo array e exiba cada elemento no console

let array1 = [3, 7, 2, 9, 5];
for (let i in array1) {
  console.log(array1[i]);
}

for (let i1 of array1) {
  console.log(i1);
}

// 2- Suponha que você tenha um objeto com valores
// numéricos: {a: 10, b: 20, c: 30, d: 40}.
// Utilize um laço "for...in" para iterar pelas chaves do objeto e
// calcular a soma de todos os valores.

let num1 = [{ a: 10, b: 20, c: 30, d: 40 }];
let soma = 0;
for (let item of num1) {
  for (let valor in item) {
    soma += item[valor];
  }
}
console.log(soma);

// 3- Dado um array de números [12, 5, 8, 21, 16, 7], crie um loop "for"
// que itere pelo array, verificando se cada número é par. Se for par,
// adicione-o a um novo array. No final, exiba o novo array com os números pares.

let num2 = [12, 5, 8, 21, 16, 7];
let pares = [];

for (let item2 of num2) {
  if (item2 % 2 === 0) {
    pares.push(item2);
  }
}
console.log(pares);

// 1- Considere um objeto com informações de estudantes:
// const estudantes = { alice: 18, bob: 20, carol: 19, david: 21 };
// Utilize um loop "for...in" para verificar se há um estudante com
// a idade de 19 anos. Se sim, exiba "Nome do estudante: idade" no console.

const estudantes = [{ alice: 18, bob: 20, carol: 19, david: 21 }];
let resultado = null;

for (let nome1 of estudantes) {
  for (let idade1 in nome1) {
    if (nome1[idade1] === 19) {
      lista = { nome: idade1, idade: nome1[idade1] };
    }
  }
}
console.log(lista);

// 2- Imagine que você tem uma matriz bidimensional representando uma grade
// de pontos: const pontos = [ [2, 5, 8], [3, 9, 12], [4, 6, 10] ];
// Utilize dois loops "for" aninhados para calcular a soma de todos os elementos
// da matriz e exibir o resultado.
const pontos = [
  [2, 5, 8],
  [3, 9, 12],
  [4, 6, 10],
];

let soma3 = 0;
for(let item3 of pontos){
  for (let propriedade3 of item3){
    soma3 += propriedade3;
  }
}
console.log(soma3);