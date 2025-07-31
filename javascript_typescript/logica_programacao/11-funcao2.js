// function exibirSaudacao(saudacao = "Hello", nome) {
//     console.log(`${saudacao}, ${nome}`);

// }
// exibirSaudacao();


//**** LISTA DE EXERCICIOS - 1 *******

// 1- Crie uma função chamada saudacao que aceita um parâmetro nome para uma pessoa e 
// exiba no console a saudação "Olá, [nome]!" utilizando um valor padrão para nome 
// caso nenhum seja fornecido.

// function saudacao(nome="Francis") {
//     console.log(`Ola, ${nome}`);

// }
// saudacao();

// 2- Escreva uma função chamada calculadora que receba dois números (num1 e num2) 
// e um operador matemático (operacao) como parâmetros. A função deve realizar a 
// operação matemática entre num1 e num2 (por exemplo, adição, subtração, multiplicação, divisão) 
// com um valor padrão de operação sendo "+".

// const readline = require('readline-sync');
// function calculadora(num1, num2, operacao = 1) { 
//     // num1= readline.questionInt(console.log(`Digite o primeiro numero`));
//     // num2= readline.questionInt(console.log(`Digite o segundo numero`));
//     // operacao= readline.questionInt(console.log(`Escolha a operação:\n1-Soma\t2-Subtração\t3-Divisão\t4-Multiplicação`));

//     switch(operacao) {
//         case 1:
//             console.log(num1+num2);
//             break;
//         case 2:
//             console.log(num1-num2);
//             break;
//         case 3:
//             console.log(num1*num2);
//         case 4:
//             console.log(num1/num2);
//         default:
//             console.log(`Operação incorreta`)
//             break;
//     }

// }
// calculadora(10, 20);



// 3- Crie uma função chamada contagemRegressiva que aceite um parâmetro inicio para 
// iniciar a contagem regressiva. A função deve exibir no console uma contagem regressiva 
// a partir do número fornecido até 1, utilizando um valor padrão de início igual a 10.

// function contagemRegressiva(inicio=10) {
//     for(let contador1=inicio; contador1>=1; contador1--){
//     console.log(`${contador1}`);
//     }
// }
// contagemRegressiva(8);

//##### LISTA DE EXERCICIOS - 1 #####

// 1- Escreva uma função chamada apresentacao que aceite três parâmetros: 
// nome, idade e profissao. A função deve exibir no console uma mensagem de apresentação 
// no formato "Olá, eu sou [nome], tenho [idade] anos e sou [profissao].", 
// utilizando valores padrão para os parâmetros caso nenhum seja fornecido.

// function apresentacao(nome="Francis", idade=30, profissao="Sanitarista") {
//     console.log(`Olá, eu sou ${nome}, tenho ${idade} anos e sou ${profissao}`);

// }
// apresentacao();


// 2- Crie uma função chamada mensagemPersonalizada que receba um parâmetro 
// texto para uma mensagem e um parâmetro estilo para o estilo da mensagem 
// (por exemplo, "normal", "negrito", "itálico"), com um valor padrão de estilo sendo "normal". 
// A função deve exibir no console o texto fornecido com o estilo especificado.

// console.log(`Francis`.bold());

// function mensagemPersonalizada(estilo = "normal") {
//     if(estilo === "normal"){
//         console.log(`Bom dia!!!\nHoje é dia 10/02/2023 (normal)`);
//     }else if (estilo === "negrito"){
//         console.log(`Bom dia!!!\nHoje é dia 10/02/2023 (negrito)`);
//     }else if (estilo === "itálico"){
//         console.log(`Bom dia!!!\nHoje é dia 10/02/2023 (iltálico)`);
//     }
// }
// mensagemPersonalizada();


// function criarMensagemDeSaudacao(nome="Francis") {
//     const mensagem = console.log(`Hello, ${nome}`);
//     return mensagem; 
// }
// criarMensagemDeSaudacao();


// 1- Crie uma função chamada somar que aceite dois números como parâmetros e 
// retorne a soma deles.

// function somar(num1, num2) {
//     let soma = console.log(num1 + num2);
//     return soma;
// }
// somar(2,8);

// 2- Escreva uma função chamada ehPar que aceite um número como parâmetro e 
// retorne true se o número for par e false caso contrário.

// function ehPar(num3) {
//     let par = (num3%2===0)? true : false;
//     return console.log(`O numero ${num3} é par? ${par}`);
// }
// ehPar(5);


// 3- Crie uma função chamada maiorNumero que receba três números como parâmetros e 
// retorne o maior deles.

// function maiorNumero(num1, num2, num3) {
//     let maior;
//     if(num1>num2 && num1>num3){
//         maior = console.log(`O número ${num1} é maior que os números ${num2} e ${num3}`);
//     }else if(num2>num1 && num2>num3){
//         maior = console.log(`O número ${num2} é maior que os números ${num1} e ${num3}`);
//     }else{
//         maior = console.log(`O número ${num3} é maior que os números ${num1} e ${num2}`);
//     }

//     return maior;
// }
// maiorNumero(8, 6, 3)

// 4- Escreva uma função chamada calcularIMC que receba o peso e a altura de uma pessoa 
// como parâmetros e retorne o índice de massa corporal (IMC) calculado.

// function calcularIMC(peso, altura) {
//     let imc = peso / (altura*altura);
//     return console.log(`Seu IMC é:${imc.toFixed(2)}`);
// }
// calcularIMC(50, 1.60);

// 1- Crie uma função chamada contarVogais que aceite uma string como parâmetro e
// retorne o número de vogais (a, e, i, o, u) presentes na string.

// function contarVogais(vogais) {
//     let qtdVogais = 0; 
//         for (let i = 0; i <= vogais.length; i++){
//             if (vogais[i]== "a" || vogais[i]== "A" ||
//             vogais[i]== "e" || vogais[i]== "E" ||
//             vogais[i]== "i" || vogais[i]== "I" ||
//             vogais[i]== "o" || vogais[i]== "O" ||
//             vogais[i]== "u" || vogais[i]== "U"){
//                 qtdVogais++;
//             }
//         }
// return console.log(qtdVogais);
// }

// contarVogais(["a", "b", "c"]);


// 2- Escreva uma função chamada celsiusParaFahrenheit que receba uma 
// temperatura em graus Celsius como parâmetro e retorne o valor equivalente em Fahrenheit.

// function celsiusParaFahrenheit(celsius1) {
//     let conversor = (celsius1*1.8) + 32;
//     return console.log(`${celsius1}°C equivale a ${conversor}°F`);
// }
// celsiusParaFahrenheit(25);

// 3- Crie uma função chamada gerarSenha que aceite um parâmetro tamanho (número inteiro) e 
// retorne uma senha aleatória com o tamanho especificado.

function gerarSenha(tamanho) {
    const colecaoCaracter = "abcdefghijlmnopqrstuvxzwy0123456789ABCDEFGHIJLMNOPQRSTUVXZWY@#$%&?!\/<>-()~[]}{+_^*";
    let senha = "";

    for(let i = 0; i < tamanho; i++){
        const random = Math.floor(Math.random() * colecaoCaracter.length);
        senha += colecaoCaracter.charAt(random);
    }
    return senha;
}
const readline = require('readline-sync');
const informarTamanho = readline.questionInt(console.log(`Informe a quantidade de caracter da senha:`));
const senhaConcluida = gerarSenha(informarTamanho);
console.log(`A sua senha é: ${senhaConcluida}`);