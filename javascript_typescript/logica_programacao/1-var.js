// EXERCICIOS - VARIAVEIS

// 1. Declarar uma variavel chamada "minhaVar", sem valor
let minhaVar

// 2. Apos declarada, atribua o valor 10 à variavel "minhaVar"
minhaVar=10;

// 3. Declare uma nova variavel chamada "soma", e adicione uma instrução somando valores 15 e 8
let soma
soma=15+8;

// 4. Atribua à variavel "soma" todo o valor dela, somando 1, usando o operador de soma abreviado 
soma = soma +1; // OU soma += 1;
console.log(soma);

// 5. Atribua à variavel "soma" todo o valor dela, multiplicando por 3, usando o operador de multiplicação abreviado
soma = soma *3; // OU soma *= 3;

// 6. Qual valor de "soma" ate aqui?
console.log(soma);

// 7. Declare a variavel "fazSol, atribuindo à ela o valor booleano que representa verdadeiro
let fazSol = true;
console.log(fazSol);

// 8. Declare uma variavel chamada "comida" que receve um array com valores "arroz", "feijão" e "ovo"
let comida = ["arroz","feijão", "ovo"];

// 9. Digite a instrução que o valor de "feijão", que está na variavel "comida".
console.log(comida[1]);

// 10. Digite o código que verifica se a variavel "soma" é igual a variavel "minhaVar" (testando tb o tipo).
console.log(soma === minhaVar);

// 11. Digite o codigo que verifica se a variavel "minhaVar" é menor ou igual a variavel soma.
console.log(minhaVar <= soma); 

// 12. Crie a função chama "divisao" que recebe como parametro dois numeros, e retorne a divisão entre eles.
function divisao (num1, num2) {
    return num1/ num2
}

// 13. Invoque a função criada acima, passando os parametros 10 e 2.
console.log(divisao(10,2));