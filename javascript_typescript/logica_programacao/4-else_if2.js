// EXERCICIOS - ESTRUTURA CONDICIONAL (DE DECISÃO) - ELSE-IF

/* Sintaxe IF-ELSE:
if (condicao 1) {
  bloco de código 1 <-- se a condição 1 for verdade, irá rodar instrução desse bloco de código 1.
} else if (condicao 2) {
   bloco de código 2 <--- se condição 2 for verdade, irá rodar instrução desse bloco de código 2.
} else {
   bloco de código 3 <--- se condição 1 e 2 não for verdade, 
   irá rodar instrução desse bloco de código 3.
}
--> Exemplo:
if(CONDICAO1) {
    console.log("xxxx");
} else if(CONDICAO2) {
    console.log("yyyy");
} else {
    console.log("zzzz");
}
 */

// 1. Classifique um número em três categorias: negativo, zero ou positivo.
let num1 = 4;
if(num1>0) {
    console.log("É um número positivo!");
} else if(num1<0) {
    console.log("É um número negativo!");   
} else {
    console.log("É nulo!");
}

// 2. Verifique se um número é divisível por 2, 3 ou 5.
let num2 = 4;
if(num2%2===0) {
    console.log("É divisível por 2!");
} else if(num2%3===0) {
    console.log("É divisível po 3!");  
} else if(num2%5===0) {
    console.log("É divisível po 5!");    
} else {
    console.log("Valor Inválido!");
}

// 3. Classifique uma variável em quatro categorias: booleana, numérica, string ou indefinida.
let num3 = 4;
if(typeof num3==="boolean") {
    console.log("É booleana!");
} else if(typeof num3==="number") {
    console.log("É numérica!");  
} else if(typeof num3===String) {
    console.log("É string!");    
} else {
    console.log("É indefinida!");
}

// 4. Classifique um número em cinco categorias: negativo, zero, positivo, par ou ímpar.
let num4 = -4;
if(num4>0) {
    console.log("É um número positivo!");
} else if(num4<0) {
    console.log("É um número negativo!");   
} else if(num4%2===0) {
    console.log("É par!"); 
} else if(num4%2!==0) {
    console.log("É ímpar!"); 
} else {
    console.log("É zero!");
}

// 5. Verifique se um número é divisível por 2, 3, 5 ou 7.
let num5 = 4;
if(num5%2===0) {
    console.log("É divisível por 2!");
} else if(num5%3===0) {
    console.log("É divisível po 3!");  
} else if(num5%5===0) {
    console.log("É divisível po 5!");  
} else if(num5%7===0) {
    console.log("É divisível po 7!");   
} else {
    console.log("Valor Inválido!");
}