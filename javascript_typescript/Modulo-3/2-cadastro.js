const cadastroPessoa = [];
const readline = require('readline-sync');

function adicionarPessoa(){
  
    console.log(`******** CADASTRO ********\n Informe os dados solicitados a seguir`);
    
    // varNome: variável string --> dado entrada: Fulando Beltrano da Silva
    let varNome = readline.question(console.log(`Informe seu nome:`)); 
    // varSalario: variável number float --> dado entrada: 3000.00
    let varSalario = readline.questionFloat(console.log(`Informe seu salário:`)); 
    // varIdade: variável number inteiro --> dado entrada: 25
    let varIdade = readline.questionInt(console.log(`Informe sua idade:`));
    // varDiploma: retorna um valor booleano (true ou false) --> dado entrada: 1
    let varDiploma = readline.questionInt(console.log(`Possui diploma de Nível Superior (Digite 1 para SIM ou 0 para NÃO):\n1.SIM\t\t0.NÃO`)) === 1 ? true : false; 

        if (typeof varNome === "string" && !isNaN(varSalario) && !isNaN(varIdade) && (varDiploma === true || varDiploma === false)){
            const pessoa = {
                    nome: varNome,
                    salario: varSalario,
                    idade: varIdade,
                    diploma: varDiploma,
                };
                cadastroPessoa.push(pessoa);
                console.log(`Cadastro realizado com sucesso!!!`);
            }else{
                console.log(`Dados inválidos. Verifique os valores inseridos!`);
            }

}
adicionarPessoa();

