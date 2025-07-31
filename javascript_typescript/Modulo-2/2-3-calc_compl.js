const readline = require('readline-sync');
const prompt = require('prompt-sync')();

function calculadora(){
    function entradaDados(){
        console.log("=== Calculadora ===");
        console.log("Informe 1º número: "); 
        let num1 = readline.questionFloat(); 
        console.log("Informe 2º número: "); 
        let num2 = readline.questionFloat(); 
        console.log("Digite o número referente a operação que deseja realizar:"); 
        console.log(" 1.Soma\n 2.Subtração\n 3.Multiplicação\n 4.Divisão"); 
        let operacao = readline.questionInt();

        return {num1, num2, operacao};
    }

    function tipOperacao(num1, num2, operacao){
        switch (operacao) {
            case 1:
                return num1+num2;
            case 2:
                return num1-num2;
            case 3:
                return num1*num3;
            case 4:
                return num1/num2;
            default:
                return 0;
        }
    } 
let {num1, num2, operacao} = entradaDados ();
let resultado = tipOperacao (num1, num2, operacao);   
console.log("==> Resultado: ", resultado);
}

calculadora();
