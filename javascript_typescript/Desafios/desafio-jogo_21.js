const readline = require('readline-sync');
let somaSua = 0;
let somaBan = 0;

do {
    console.log("***** É sua vez de jogar! *****","\nJogue uma carta: "); 
    let cartaSua = readline.questionInt(); 
    somaSua +=  cartaSua;   // somaSua = somaSua + cartaSua; 
    console.log("***** Agora é a vez da banca jogar! *****", "\nInforme a carta da Banca: "); 
    let cartaBan = readline.questionInt(); 
    somaBan +=  cartaBan;   // somaBan = somaBan + cartaBan; 

} while(somaSua<=21 && somaBan<21) { 
    if(somaSua>somaBan && somaSua<=21) {
        console.log("Você ganhou!", "\nTotal de seus pontos: ", somaSua,"\nPontos da Banca: ", somaBan);
    } else if(somaSua<somaBan && somaBan>21) {
        console.log("Você ganhou!", "\nTotal de seus pontos: ", somaSua,"\nPontos da Banca: ", somaBan); 
    } else {
        console.log("A banca venceu!", "\nTotal de pontos da banca: ", somaBan,"\nSeus pontos: ", somaSua);
    }
}   