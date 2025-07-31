/* 1 - Programa recebe três notas, calcula a média e informa se o aluno foi 
aprovado ou reprovado */

function mediaAluno(nota1, nota2, nota3, media){
    const readline = require('readline-sync');
    nota1 = readline.questionFloat(console.log(`Insira sua 1º nota: `));
    nota2 = readline.questionFloat(console.log(`Insira sua 2º nota: `));
    nota3 = readline.questionFloat(console.log(`Insira sua 3º nota: `));

    media = (nota1+nota2+nota3)/3;

    let resultado = (media >= 7) ? true : false;

    if(resultado === true){
        console.log(`Aluno aprovado!\nMédia: ${media.toFixed(2)}`);
    }else{
        console.log(`Aluno reprovado!\nMédia: ${media.toFixed(2)}`);
    }
}

mediaAluno();


/* 2 - Programa recebe duas notas e informa qual deverá ser a nota minima da terceira
prova para o aluno ser aprovado por média */

function nota3Aluno(not1, not2, not3){
    const readline2 = require('readline-sync');
    not1 = readline2.questionFloat(console.log(`Insira sua 1º nota: `));
    not2 = readline2.questionFloat(console.log(`Insira sua 2º nota: `));
    
    not3 = 21 - (not1 + not2);

    if((not1+not2)<11){
        console.log(`Você já está reprovado!`);
    }else{
        console.log(`Você devará tirar no mínimo ${not3.toFixed(2)} na 3ª prova para passar por média!`);
        console.log(`ATENÇÃO: A média para aprovação é 7.00`);
    };   
}

nota3Aluno();