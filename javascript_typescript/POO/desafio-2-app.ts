// Escreva um aplicativo de teste que demonstra as capacidades da classe. 
// Crie duas instâncias da classe e exiba o salário anual de cada instância. 
// Então dê a cada empregado um aumento de 10% e exiba novamente o salário anual de cada empregado.

import { Empregado } from "./desafio-2";
// import readline from 'readline-sync';

const funcionario1 = new Empregado ('João', 'Silva', 2000.00);
const funcionario2 = new Empregado ('Jóse', 'Cruz', 3000.00);

console.log(`*** FUNCIONÁRIO 1 ***`);
console.log(`Nome / Sobrenome: ${funcionario1.getNome()} ${funcionario1.getSobrenome()}`);
console.log(`Salário anual: R$ ${funcionario1.salarioAnual().toFixed(2)}\n`);

console.log(`*** FUNCIONÁRIO 2 ***`);
console.log(`Nome / Sobrenome: ${funcionario2.getNome()} ${funcionario2.getSobrenome()}`);
console.log(`Salário anual: R$ ${funcionario2.salarioAnual().toFixed(2)}\n`);

funcionario1.aumentoSalario(10);
funcionario2.aumentoSalario(10);

console.log(`*** FUNCIONÁRIO 1 ***`);
console.log(`Nome / Sobrenome: ${funcionario1.getNome()} ${funcionario1.getSobrenome()}`);
console.log(`Salário anual após aumento: R$ ${funcionario1.salarioAnual().toFixed(2)}\n`);

console.log(`*** FUNCIONÁRIO 2 ***`);
console.log(`Nome / Sobrenome: ${funcionario2.getNome()} ${funcionario2.getSobrenome()}`);
console.log(`Salário anual após aumento: R$ ${funcionario2.salarioAnual().toFixed(2)}\n`);







