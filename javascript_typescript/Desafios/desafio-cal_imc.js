const readline = require('readline-sync');
console.log("Peso:"); 
let peso = readline.questionFloat(); 
console.log("altura:"); 
let altura = readline.questionFloat(); 

function cal_imc(peso, altura){
return peso/(altura*altura)}

if(cal_imc(peso,altura)<18.5) {
    console.log("Seu IMC:", cal_imc(peso,altura), "\nCLASSIFICAÇÃO: Abaixo do peso")
} else if(cal_imc(peso,altura)>=18.5 && cal_imc(peso,altura)<=24.9) {
    console.log("Seu IMC:", cal_imc(peso,altura), "\nCLASSIFICAÇÃO: Peso normal")
} else if(cal_imc(peso,altura)>=25 && cal_imc(peso,altura)<=29.9) {
    console.log("Seu IMC:", cal_imc(peso,altura), "\nCLASSIFICAÇÃO: Sobrepeso")
} else {
    console.log("Seu IMC:", cal_imc(peso,altura), "\nCLASSIFICAÇÃO: Obesidade")
}


