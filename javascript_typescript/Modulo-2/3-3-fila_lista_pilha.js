// 1 - FILA: 
let fila = [3, 7, 9, 1, 0];
fila.shift();
console.log(fila);
/*Na fila o primeiro elemento a entrar, é primeiro a sair e como o primeiro elemento 
a ser inserido foi o 3, e em seguida o 7 e assim por diante. Dessa forma, os elementos
serão removidos do índice 0 ate o índice 4 do array, como na demostração abaixo:
[3, 7, 9, 1, 0]
[7, 9, 1, 0]
[9, 1, 0]
[1, 0]
[0]
[]
*/

// 2 - PILHA:
let pilha = [3, 7, 9, 1, 0];
pilha.pop();
console.log(pilha);
/* Na pilha o último item adicionado é o primeiro a ser removido e como primeiro a ser 
inserido foi o 3, depois o 7 e assim por diante. Assim, a sequencia de remoção 
de elementos começará do índice 4 ate o índice 0, como demostrado abaixo:
[3, 7, 9, 1, 0]
[3, 7, 9, 1]
[3, 7, 9]
[3, 7]
[3]
[]
*/

// 3 - LISTA:
// Enquanto nas filas e pilhas tem um ordem específica para remover um elemento
// de acordo com a ordem que este elemento foi inserido, nas listas isso não acontece.
// As Listas não tem ordem específica para remover um elemento. Devido a natureza 
// versátil das listas, as mesmas permitem, inserir, remover e acessar os elementos 
// por meio dos seus índices. Dessa forma, pode-se remover os elementos em qualquer 
// índice ate o completo esvaziamento do array em questão. Usando método splice(),
// podemos remover os elementos por meio dos índices até o array ficar vazio, ou seja,
// até retornar []:
let lista = [3, 7, 9, 1, 0];
lista.splice();





