// 1. Faça um programa que leia o nome do aluno,
// três notas e mostre o nome e a média(aritmética) do aluno.


function mediaTresNotas() {

	const readline1 = require("readline-sync");
	let nomeAluno = readline1.question(console.log(`Informe seu nome:`));
	let nota1 = readline1.questionFloat(console.log(`Informe a 1º Nota:`));
	let nota2 = readline1.questionFloat(console.log(`Informe a 2º Nota:`));
	let nota3 = readline1.questionFloat(console.log(`Informe a 3º Nota:`));


		if(isNaN(nota1) || isNaN(nota2) || isNaN(nota3)){
			console.log("[ERRO]\nAs notas devem ser em números!");
			return;
		}else if(!isNaN(nomeAluno)){
			console.log("[ERRO]\nNome do aluno deve ter apenas letras!");
			return;
		}else{
			let media1 = (nota1 + nota2 + nota3) / 3;
			console.log(`${nomeAluno} sua média é ${media1.toFixed(2)}`);
		}
}
mediaTresNotas();

// 2. Faça um programa com Javascript para verificar se um determinado ano,
// fornecido pelo usuário, é bissexto. Um ano é bissexto se for divisível
// por 400 ou se for divisível por 4 e não for divisível por 100.
// Exemplos: 1988, 1992, 1996, 2000. Repare que 1900 não é bissexto.

function verificaAno(){

	const readline2 = require('readline-sync');
	let ano = readline2.questionFloat(console.log(`Informe o ano que deseja verificar se é bissexto:`));

	let verificaNumeroInt = Number.isInteger(ano)? true : false;


		if(verificaNumeroInt === false){
			console.log(`[ERRO]\nO ano deve ser número inteiro!`);
			return;
		}else{
			if(ano >= 1582){
				if((ano % 400 === 0) || ((ano % 4 === 0) && (ano % 100 !== 0))){
					console.log(`De acordo com calendário gregoriano, o ${ano} é BISSEXTO`);
				}else{
					console.log(`De acordo com Calendário Gregoriano, o ${ano} é NÃO BISSEXTO`);
				}
			}else{
				if(ano % 4 === 0){
					console.log(`De acordo com Calendário Juliano, o ${ano} é BISSEXTO`);
				}else {
					console.log(`De acordo com Calendário Juliano, o ${ano} é NÃO BISSEXTO`);
				}
			}
		}
}
verificaAno();

// 3. Uma determinada empresa vende seus produtos em quatro diferentes estados.
// Cada estado possui uma taxação de imposto diferente sobre o produto
// (MG: 7%; SP: 12%; RJ: 15%; MS: 8%). Faça um programa em Javascript,
// que o usuário entre com o valor e o estado destino do produto e o programa
// retorne o preço final do produto acrescido do imposto correspondente ao estado
// onde será vendido. O programa deve mostrar uma mensagem de erro caso o estado.

function impostoProduto(){

	const readline3 = require('readline-sync');
	let valor = readline3.questionFloat(console.log(`Informe o valor do produto:`));
	let estado  = readline3.questionFloat(console.log(`Informe o número que corresponde ao estado de destino do produto:\n1.MG\t2.SP\t3.RJ\t4.MS`));
	let valorComImposto = undefined;

		if(isNaN(valor) ){
			console.log(`[ERRO]\nValor do produto deverá ser números`);
			return;
		}else if(!Number.isInteger(estado)){
			console.log(`[ERRO]\nDeverá ser informado um número inteiro correspondente ao estado de destino!`);
			return;
		}else{
			switch (estado) {
					case 1:
							valorComImposto = valor + (valor*0.07);
							console.log(`O valor final do seu produto acrescido de impostos é: ${(valorComImposto).toLocaleString('pt-BR',{style: 'currency', currency: 'BRL'})}`);
							break;
					case 2:
							valorComImposto = valor + (valor*0.12);
							console.log(`O valor final do seu produto acrescido de impostos é: ${(valorComImposto).toLocaleString('pt-BR',{style: 'currency', currency: 'BRL'})}`);
							break;
					case 3:
							valorComImposto = valor + (valor*0.15);
							console.log(`O valor final do seu produto acrescido de impostos é: ${(valorComImposto).toLocaleString('pt-BR',{style: 'currency', currency: 'BRL'})}`);
							break;
					case 4:
							valorComImposto = valor + (valor*0.08);
							console.log(`O valor final do seu produto acrescido de impostos é: ${(valorComImposto).toLocaleString('pt-BR',{style: 'currency', currency: 'BRL'})}`);
							break;
					default:
							console.log(`Estado informado inválido!`);
							break;
			}
		}
}
impostoProduto();

// 4. Faça um programa que calcule e mostre a soma dos 50 primeiros números pares.
// Faça três versões desse programa, cada uma usando uma estrutura de repetição
// diferente (for, while, do-while). Qual das três estruturas é a mais adequada para este programa?
// Por que?

// FOR:
const readline13 = require('readline-sync');
let num1 = readline13.questionInt(console.log(`Informe um número:`));

let somaPares1 = 0;
let paresEncontrados1 = 0;
for(num1; paresEncontrados1 < 50; num1++){
    if(num1 % 2 === 0){
        paresEncontrados1++;
        somaPares1 += num1;
    }
}
console.log(`A soma dos 50 primeiros números pares é: ${somaPares1}`);


// WHILE:
const readline14 = require('readline-sync');
let num2 = readline14.questionInt(console.log(`Informe um número:`));
let somaPares2 = 0;
let paresEncontrados2 = 0;
while(paresEncontrados2 < 50){
    if(num2 % 2 === 0){
       paresEncontrados2++;
       somaPares2 += num2;
    }
    num2++
}
console.log(`A soma dos 50 primeiros números pares é: ${somaPares2}`);


// DO WHILE:
const readline15 = require('readline-sync');
let num3 = readline15.questionInt(console.log(`Informe um número:`));

let somaPares3 = 0;
let paresEncontrados3 = 0;
do {
    if(num3 % 2 === 0){
        paresEncontrados3++;
        somaPares3 += num3;
    }
    num3++;
} while (paresEncontrados3 < 50);
console.log(`A soma dos 50 primeiros números pares é: ${somaPares3}`);

// 5. Faça um programa em Javascript que receba do usuário um número N e
// depois imprima os N primeiros números naturais ímpares.

function numImparNatural(){
	const readline4 = require('readline-sync');
	let numeroRecebido = readline4.questionFloat(console.log(`Digite um número:`));
	let qtdNumerosImpares = 0;

		if(!Number.isInteger(numeroRecebido)){
			console.log(`[ERRO]\nDeverá ser informado um número inteiro!`);
			return;
		}else{
			for(numeroRecebido; qtdNumerosImpares <= 10; numeroRecebido++){
					if(numeroRecebido % 2 !== 0){
							qtdNumerosImpares++;
							console.log(numeroRecebido);
					}
			}
		}
}
numImparNatural();

// 6. Uma empresa contrata um encanador a R$ 30,00 por dia. Crie um programa que solicite o número
// de dias trabalhados pelo encanador e imprima a quantia líquida que deverá ser paga, sabendo-se que são
// descontados 8% para pagamento de impostos e taxas devidas.

function salarioDiasTrabalhados(){

	const readline5 = require('readline-sync');
	let diasTrabalho = readline5.questionFloat(console.log(`Digite a quantidade de dias trabalhados:`));
		if(!Number.isInteger(diasTrabalho)){
			console.log(`[ERRO]\nDeverá ser informado um número inteiro!`);
			return;
		}else{
			let salarioBruto = 30 * diasTrabalho;
			let salarioLiquido = salarioBruto - (salarioBruto * 0.08);
			console.log(`O salário líquido do funcionário em ${diasTrabalho} dias trabalhados é: ${(salarioLiquido).toLocaleString('pt-BR',{style: 'currency', currency: 'BRL'})}`);
		}
}
salarioDiasTrabalhados();

// 7. Faça um programa para ler um horário (hora:minuto:segundo) de início e a duração,
// em segundos, de uma experiência biológica. O programa deve informar o
// horário (hora:minuto:segundo) de término da mesma.

function horarioTerminoExp(){

	const readline6= require('readline-sync');
	let segTotal = undefined;
	let minTotal = undefined;
	let horaTotal = undefined;
	let segCalculado = undefined;
	let minCalculado = undefined;

	let horario = readline6.question(console.log(`Informe o horário de inicio do experimento no formato hh:mm:ss: `));
	let segDuracao = readline6.questionInt(console.log(`Informe a duração em segundos do experimento: `));

	let separaString = horario.split(':');
	let horaInicial = Number(separaString[0]);
	let minInicial = Number(separaString[1]);
	let segInicial = Number(separaString[2]);


	if(segDuracao+segInicial<=59){
			segTotal = segDuracao + segInicial;
			segCalculado = segTotal;
			console.log(`O horário do término do experimento foi:  ${horaInicial}h : ${minInicial}min : ${segCalculado}seg`);
	}else if(segDuracao+segInicial>59){
			minTotal = ((segDuracao+segInicial)/60)+minInicial;
			if(minTotal<=59){
					minCalculado = minTotal;
					segCalculado = (segDuracao+segInicial)%60;
					console.log(`O horário do término do experimento foi:  ${horaInicial}h : ${Math.trunc(minCalculado)}min : ${segCalculado}seg`)
			}else if(minTotal>59){
					horaTotal = horaInicial + (minTotal/60);
					minCalculado = minTotal%60;
					segCalculado = (segDuracao+segInicial)%60;
					console.log(`O horário do término do experimento foi:  ${horaTotal}h : ${Math.trunc(minCalculado)}min : ${segCalculado}seg`)
			}
	}
}
horarioTerminoExp();

// 8. Uma empresa paga R$ 10,00 por hora normal trabalhada e R$ 15,00 por hora extra.
// Escreva um programa que leia o total de horas normais e o total de horas extras trabalhadas
// por um empregado em um ano e calcule o salário anual deste trabalhador.

function salarioTotalAnual(){

	const readline7= require('readline-sync');
	let horasNormais = readline7.questionFloat(console.log(`Infome o total de horas normais trabalhadas no ano: `));
	let horasExtras = readline7.questionFloat(console.log(`Infome o total de horas extras realizadas no ano: `));

		if(!Number.isInteger(horasNormais) || !Number.isInteger(horasExtras)){
			console.log(`[ERRO]\nAs horas normais e extras deveram ser números inteiros!`);
			return;
		}else{
			let salarioNormal = horasNormais*10;
			let salarioExtra = horasExtras*15;
			let salarioAnual = salarioNormal+salarioExtra;
			console.log(`O trabalhador recebeu salário anual total ${(salarioAnual).toLocaleString('pt-BR',{style: 'currency', currency: 'BRL'})}. Sendo:\nSalário total de horas normais: ${(salarioNormal).toLocaleString('pt-BR',{style: 'currency', currency: 'BRL'})}\nSalário total de horas extras: ${(salarioExtra).toLocaleString('pt-BR',{style: 'currency', currency: 'BRL'})}`);
		}
}
salarioTotalAnual();

// 9. Elabore um programa em JS para que leia três números e mostre-os em ordem crescente.

function ordemCrescente(){

	const readline8= require('readline-sync');
	let numero1 = readline8.questionFloat(console.log(`Digite o 1º número: `));
	let numero2 = readline8.questionFloat(console.log(`Digite o 2º número: `));
	let numero3 = readline8.questionFloat(console.log(`Digite o 3º número: `));


		if(isNaN(numero1) || isNaN(numero2 || isNaN(numero3))){
			console.log(`[ERRO]\nDeverá ser digitado números!!`);
			return;
		}else{
				if(numero1>numero2 & numero1>numero3 & numero2>numero3){
						console.log(`A ordem crescente dos números são: ${numero3} - ${numero2} - ${numero1}`);
				}else if (numero1>numero2 & numero1>numero3 & numero3>numero2){
						console.log(`A ordem crescente dos números são: ${numero2} - ${numero3} - ${numero1}`);
				}else if (numero2>numero1 & numero2>numero3 & numero1>numero3){
						console.log(`A ordem crescente dos números são: ${numero3} - ${numero1} - ${numero2}`);
				}else if (numero2>numero1 & numero2>numero3 & numero3>numero1){
						console.log(`A ordem crescente dos números são: ${numero1} - ${numero3} - ${numero2}`);
				}else if (numero3>numero1 & numero3>numero2 & numero1>numero2){
						console.log(`A ordem decrescente dos números são: ${numero2} - ${numero1} - ${numero3}`);
				}else if (numero3>numero1 & numero3>numero2 & numero2>numero1){
						console.log(`A ordem crescente dos números são: ${numero1} - ${numero2} - ${numero3}`);
				}
		}
}
ordemCrescente();

// 10. Crie um programa de conversão entre as temperaturas Celsius, Farenheit e Kelvin usando funções para isso.
// O programa deve ler a opção escolhida pelo usuário, que escolhe uma determinada conversão entre escalas termométricas e,
// em seguida, o programa solicita a temperatura a ser convertida. As opções de conversão são as seguintes: utilize o switch case
// 1.	de Celsius para Fahrenheit
// 2.	de Celsius para Kelvin
// 3.	de Fahrenheit para Celsius
// 4.	de Fahrenheit para Kelvin
// 5.	de Kelvin para Celsius
// 6.	de Kelvin para Fahrenheit

function conversaoTemperatura(opcaoConversao) {
	const readline9= require('readline-sync');
	console.log(`Informe a opção a qual deseja realizar conversão entre escalas termométricas:  `);
	opcaoConversao = readline9.questionFloat(console.log(`1.	de Celsius para Fahrenheit\n2.	de Celsius para Kelvin\n3.	de Fahrenheit para Celsius\n4.	de Fahrenheit para Kelvin\n5.	de Kelvin para Celsius\n6.	de Kelvin para Fahrenheit`));
	temperatura = readline9.questionFloat(console.log(`Informe a temperatura para realizar a conversão: `));
	let fahrenheit = undefined;
	let celsius = undefined;
	let kelvin = undefined;

			switch (opcaoConversao) {
			case 1:
					fahrenheit = (1.8*temperatura)+32;
					console.log(`${temperatura}°C equivale a ${fahrenheit}°F`);
					break;
			case 2:
					kelvin = temperatura+273;
					console.log(`${temperatura}°C equivale a ${kelvin}°K`);
					break;
			case 3:
					celsius = (temperatura-32)/1.8;
					console.log(`${temperatura}°F equivale a ${celsius}°C`);
					break;
			case 4:
					kelvin = (temperatura-32) *(5/9)+273;
					console.log(`${temperatura}°F equivale a ${kelvin}°K`);
					break;
			case 5:
					celsius = temperatura-273;
					console.log(`${temperatura}°K equivale a ${celsius}°C`);
					break;
			case 6:
					fahrenheit = ((temperatura-273)*1.8) +32;
					console.log(`${temperatura}°K equivale a ${fahrenheit}°F`);
					break;
			default:
					console.log(`Opção informada de conversão de temperatura inválida!`);
					break;
			}

}
conversaoTemperatura();

// 11. Fazer uma função que recebe um mês e um ano como parâmetros e retorna o número de dias
// daquele mês daquele ano. Dica: um ano é bissexto quando é múltiplo de 4 e não múltiplo de 100,
// ou também quando é múltiplo de 400.

function diasMes (mes, ano){
	const readline10 = require('readline-sync');
	ano = readline10.questionFloat(console.log(`Informe o ano:`));
	console.log(`Informe o número correspondente ao mês que deseja verificar:`);
	mes = readline10.questionFloat(console.log(`1.JANEIRO\n2.FEVEREIRO\n3.MARÇO\n4.ABRIL\n5.MAIO\n6.JUNHO\n7.JULHO\n8.AGOSTO\n9.SETEMBRO\n10.OUTUBRO\n11.NOVEMBRO\n12.DEZEMBRO`));

				if(!Number.isInteger(ano)){
					console.log(`[ERRO]\nAno deverá ser número inteiro!`);
				}else if(!Number.isInteger(mes) || (mes < 1 || mes > 12)){
						console.log(`[ERRO]\nOpção de mês selecionado inválido!`);
				}else{
					if((ano%400 === 0 || (ano%4 === 0 & ano%100 !== 0)) & mes === 2){
							console.log(`O mês de ${mes} do ano ${ano} possui 29 dias!\nOBS: O ano ${ano} é bissexto pelo caledário gregoriano.`);
					}else if((ano%400 !== 0 || (ano%4 !== 0 & ano%100 === 0)) & mes === 2){
							console.log(`O mês de ${mes} do ano ${ano} possui 28 dias!`);
					}else if( mes === 4 || mes === 6 || mes === 9 || mes === 11){
							console.log(`O mês de ${mes} do ano ${ano} possui 30 dias!`);
					}else{
							console.log(`O mês de ${mes} do ano ${ano} possui 31 dias!`);
					}
				}
	}
diasMes();

// 12. Faça uma função que recebe, por parâmetro, a hora de início e a hora de término de um jogo,
// ambas subdivididas em 2 valores distintos: horas e minutos. A função deve retornar, a duração do jogo em minutos,
// considerando que o tempo máximo de duração de um jogo é de 24 horas e que o jogo pode começar em um dia e terminar no outro.

function duracaoJogo(inicio, fim) {
	const readline11 = require('readsline-sync');


	inicio = readline11.question(console.log(`Informe o horário de inicio no jogo formato hh:mm: `));
	fim = readline11.question(console.log(`Informe o horário do término no jogo formato hh:mm: `));


	let stringInicio = inicio.split(':');
	let inicioHora = Number(stringInicio[0]);
	let inicioMinuto = Number(stringInicio[1]);
	let stringFim = fim.split(':');
	let fimHora = Number(stringFim[0]);
	let fimMinuto = Number(stringFim[1]);

	let minutoTotal = undefined;
	let horasParaMinutos = undefined;
	let minutoCalculado = undefined;

	//termina no outro dia
	if((inicioHora > fimHora) || (inicioHora === fimHora & inicioMinuto >= fimMinuto)){
			if(inicioMinuto <= fimMinuto){
					minutoTotal = fimMinuto - inicioMinuto;
					horasParaMinutos = ((24 - inicioHora) + fimHora)*60;
					minutoCalculado = minutoTotal + horasParaMinutos;
					console.log(`A duração do jogo em minutos foi de: ${minutoCalculado} minutos`);
			}else {
					minutoTotal = (60 - inicioMinuto) + fimMinuto
					horasParaMinutos = (((24 - inicioHora) + fimHora) - 1)*60;
					minutoCalculado = minutoTotal + horasParaMinutos;
					console.log(`A duração do jogo em minutos foi de: ${minutoCalculado} minutos`);
			}

	//termina no mesmo dia
	}else if((inicioHora < fimHora) || (inicioHora === fimHora &  inicioMinuto < fimMinuto)){
		 if(inicioMinuto <= fimMinuto){
			minutoTotal = fimMinuto - inicioMinuto;
			horasParaMinutos = (fimHora- inicioHora)*60;
			minutoCalculado = minutoTotal + horasParaMinutos;
			console.log(`A duração do jogo em minutos foi de: ${minutoCalculado} minutos`);
		 }else {
			minutoTotal = (60 - inicioMinuto) + fimMinuto;
			horasParaMinutos = ((fimHora - inicioHora) - 1)*60;
			minutoCalculado = minutoTotal + horasParaMinutos;
			console.log(`A duração do jogo em minutos foi de: ${minutoCalculado} minutos`);
		 }
	}
}
duracaoJogo();

// 13. Escreva a função para cálculo do N-ésimo termo da série de Fibonacci utilizando recursividade.
// Fibonacci --> an = an-1 + an-2

function fibonacci (numFibonacci) {

	if(numFibonacci === 0){
			return 0;
	}else if(numFibonacci === 1){
			return 1;
	}else{
			return fibonacci(numFibonacci-1) + fibonacci(numFibonacci-2);
	}
}
const readline12 = require('readline-sync');
let numeroFibonacci = readline12.questionInt(console.log(`Informe um número:`));

console.log(`O ${numeroFibonacci}-ésimo termo da série de Fibonacci é: ${fibonacci(numeroFibonacci)}`);





