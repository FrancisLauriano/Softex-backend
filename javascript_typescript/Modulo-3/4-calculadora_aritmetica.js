function calculadoraAritmetica(operacao, num1, num2){

    const readline = require('readline-sync');
 
    num1 = readline.questionFloat(console.log(`Digite o 1º número:`));
    num2 = readline.questionFloat(console.log(`Digite o 2º número:`));
    operacao = readline.question(console.log(`Informe o simbolo aritmético da operação que deseja realizar:\n(+)Soma\t(-)Subtração\t(*)Multiplicação\t(/)Divisão `));
 
    
     if(operacao === "+"){
         let soma = num1+num2;
         console.log(`Resultado: ${soma}`);
     }else if(operacao === "-"){
         let subtracao = num1-num2;
         console.log(`Resultado: ${subtracao}`);
     }else if(operacao === "*"){
         let multi = num1*num2;
         console.log(`Resultado: ${multi}`);
     }else if(operacao === "/"){
         let divisao = num1/num2;
         let restoDivisao = num1%num2;
         console.log(`Resultado: ${Math.trunc(divisao)}\nResto da Divisão: ${restoDivisao}`);
     }else{
         console.log(`Opção inválida!`);
     };
 
 }
 
 calculadoraAritmetica();