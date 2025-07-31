// 1 - Crie um programa que recebe do teclado um número e
// tenta dividir por zero dentro de um bloco try...catch.
// Capture o erro e o exiba "Erro: Divisão por zero" no console

const readline1 = require('readline-sync');
let divisor = readline1.questionInt(console.log(`Digite um número`));
let dividendo = 100;
let divisao = dividendo / divisor;
try {
  if(divisor ===0){
    throw "Divisor não pode ser zero"
  }
} catch (error) {
  console.log(`[Erro] \nDivisor não pode ser zero`);
  console.log(error.message);
}
if (divisor !== 0){
  console.log(`Resultado: ${divisao}`);
}


// 2 - Crie um programa que recebe do teclado uma string não numérica
// em um número utilizando parseInt dentro de um bloco try...catch.
// Capture o erro e o exiba "Erro: Conversão inválida" no console.

const readline2 = require('readline-sync');
let recebe = readline2.question(console.log(`Digite:`));
let converte = parseInt(recebe);
try {
  if(isNaN(converte)){
    throw "Erro: conversão para number falhou"
  }
} catch (error) {
  console.log(`[Erro]\nConversão Inválida`);
  console.log(error.message);
}
if(!isNaN(converte)){
  console.log(`Conversão válida`);
}


// 3- Crie um programa que recebe do teclado um objeto e tente acessar
// uma propriedade inexistente desse objeto dentro de um bloco try...catch.
// Capture o erro e o exiba "Erro: Propriedade não encontrada" no console.

function verificarObjeto(){
    const readline3 = require('readline-sync');
    let objeto2 = new Object();
    objeto2.nome = null;
    objeto2.idade = undefined;

    let acessar = readline3.question(console.log("Digite a propriedade que deseja acessar:"));
    let verificar = objeto2.hasOwnProperty(acessar);

        try {
            if(verificar === false){
                throw "Propriedade não existe"
            }
        } catch (error) {
            console.log(`[Erro] Propriedade não encontrada\n${error.messsage}`);
        }

        if(verificar === true){
            console.log(`Propriedade encontrada`);
        }

}
verificarObjeto();
