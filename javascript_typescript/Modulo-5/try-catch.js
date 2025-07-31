const readline = require('readline-sync');

function cadastro() {
    const nome = readline.question('Digite seu nome completo: ');
    const idade = parseInt(readline.question('Digite sua idade: '));

    try {
        if (nome.trim() !== '' && idade.trim() !== '' && !isNaN(idade) && Number.isInteger(idade)) {
            console.log('Cadastro realizado com sucesso!');
        } else {
            console.log('Dados inválidos. Certifique-se de inserir um nome não vazio e uma idade válida.');
        }
    } catch (error) {
        console.error('\nErro ao cadastrar:', error);
    } finally {
        console.log('Finalizando o cadastro.');
    }
}

cadastro();










