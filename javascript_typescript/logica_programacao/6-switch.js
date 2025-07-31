// EXERCICIOS - ESTRUTURA CONDICIONAL (DE DECISÃO) - SWITCH

/* Sintaxe SWITCH:
Var expressao 
switch(expressão){
 case n1:
    bloco de código 1
    break;

 case n2:
   bloco de código 2
   break;
 default:
   bloco de código 3
}

--> Exemplo:
var tipoUsuario;

switch (tipoUsuario) {
    case "Admin":
        console.log("Feliz Natal, chefe!");
        break;
    case "Gerente":
        console.log("Boas festas, meu amigo!");
        break;
     case "Analista":
        console.log("Boas festas, colega!");
        break;   
    default:
        console.log("Boas festas!");
}
 */

// 1. Verifique o dia da semana com base em um número de 1 a 7.
let diaSem = 7;

switch (diaSem) {
  case 1:
    console.log("Domingo");
    break;
  case 2:
    console.log("Segunda-feira");
    break;
  case 3:
    console.log("Terça-feira");
    break;
  case 4:
    console.log("Quarta-feira");
    break;
  case "5":
    console.log("Quinta-feira");
    break;
  case 6:
    console.log("Sexta-feira");
    break;
  case 7:
    console.log("Sábado-feira");
    break;
  default:
    console.log("Valor Inválido");
}

// 2. Converta um número de mês em seu nome correspondente.
let mes = 13;

switch (mes) {
  case 1:
    console.log("Janeiro");
    break;
  case 2:
    console.log("Fevereiro");
    break;
  case 3:
    console.log("Março");
    break;
  case 4:
    console.log("Abril");
    break;
  case 5:
    console.log("Maio");
    break;
  case 6:
    console.log("Junho");
    break;
  case 7:
    console.log("Julho");
    break;
  case 8:
    console.log("Agosto");
    break;
  case 9:
    console.log("Setembro");
    break;
  case 10:
    console.log("Outubro");
    break;
  case 11:
      console.log("Novembro");
      break;
  case 12:
        console.log("Dezembro");
        break;
  default:
    console.log("Valor Inválido");
}

/* 3. Exiba uma mensagem de acordo com o estado civil: 
"solteiro", "casado", "divorciado" ou "outro". */
let estCiv = "solteiro";

switch (estCiv) {
  case "solteiro":
    console.log("Solteiro: aproveita!");
    break;
  case "casado":
    console.log("Casado: Tá lascado!");
    break;
  case "divorciado":
    console.log("Divorciado: Tá lascado duas vezes!");
    break;
  default:
    console.log("Outros: Só Deus na causa!");
}

/* 4. Exiba uma mensagem dependendo do tipo de animal: 
"cachorro", "gato", "pássaro" ou "outro". */
let animal = "gato";

switch (animal) {
  case "gato":
    console.log("Bicho Independente!");
    break;
  case "cachorro":
    console.log("Quer brincar toda hora");
    break;
  case "pássaro":
    console.log("Todo dia uma sinfonia!");
    break;
  default:
    console.log("Outros: xau!");
}

/* 5. Calcule o valor de uma operação matemática com base 
em um operador: soma, subtração, multiplicação ou divisão. */
let operArit = "subtração";
let num1 = 10;
let num2 = 5;

switch (operArit) {
  case "soma":
    console.log("Soma: ", num1+num2);
    break;
  case "subtração":
      console.log("Subtração: ", num1-num2);
      break;
  case "multiplicação":
      console.log("Multiplicação: ", num1*num2);
      break;
  case "divisão":
        console.log("Divisão: ", num1/num2);
        break;
  default:
    console.log("Operação Inválida");
}

