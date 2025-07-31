/* Temos o array [15, 8, 10, 25, 12, 30, 5, 20, 18, 7] e 
precisamos criar um código em JavaScript para encontrar o valor 20.

Para isso, temos que escolher entre realizar uma busca linear ou 
binária de acordo com a que for mais adequada para essa situação.
Codifique a solução mais eficiente para buscar o número 20 no array.
*/

// No problema em questão a busca mais adequada será por busca linear,
// visto que o array dado na questão não é grande (poucos elementos) e 
// não apresenta os elementos ordenados.
function linearSearch(array, searchedElement){
    for(let i = 0; i < array.length; i++){
        if(array[i] === searchedElement){
            return i;
        }
    }
    return -1;
}

const listNum = [15, 8, 10, 25, 12, 30, 5, 20, 18, 7];
const elementFound = 20; 
const indexFound = linearSearch (listNum, elementFound);

if(indexFound !== -1){
    console.log(`O número ${elementFound} foi encontrado no índice ${indexFound}`);
}else{
    console.log(`O número ${elementFound} não foi encontrado`);
}