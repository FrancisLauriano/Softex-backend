/* Você deve criar três listas em JavaScript:
1. para guardar os nomes de dez pessoas;
2. para guardar as suas idades;
3. para guardar as suas cores favoritas.
Em seguida, imprima essas listas.*/

let nomes = ["João", "Maria", "Pedro", "Francisco", "Paulo","Helena", "Valentina","Gabriel", "Ana", "Angela"];
let idades = [10, 12, 8, 25, 13, 60, 33, 6, 41, 53];
let cores = ["verde", "amarelo", "vermelho", "rosa", "preto", "azul", "roxo", "violeta", "branco", "marrom" ];

console.log("Lista de nomes:",[nomes]);
console.log("Lista de idades:",[idades]);
console.log("Lista de cores:",[cores]);

/*Depois, faça algumas modificações, alterando uma cor e uma idade. 
Ao terminar, imprima novamente todas as informações das três listas.*/

idades.splice(3,1,23);
cores.splice(3,1,"rosa bebê");

console.log("Lista de nomes:",[nomes]);
console.log("Lista de idades:",[idades]);
console.log("Lista de cores:",[cores]);