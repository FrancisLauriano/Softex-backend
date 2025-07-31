const readline = require('readline-sync');

const cadastroAlunos = [];

// MENU INICIAL
while (true) {
	console.log('\n********** BANCO DE DADOS ESCOLAR **********');
	console.log('\nOPÇÃO:');
	console.log('1. Cadastrar notas dos alunos');
	console.log('2. Exibir lista de alunos');
	console.log('3. Buscar um aluno');
	console.log('4. Alterar cadastro do aluno');
	console.log('5. Excluir registro do aluno');
	console.log('0. Sair');
	console.log('*******************************************');
	const opcao = readline.questionInt('Escolha uma opção: ');

	switch (opcao) {
		case 1:
			adicionarAluno();
			break;
		case 2:
			exibirNotas();;
			break;
		case 3:
			localizar();
			break;
		case 4:
			alterar();
			break;
		case 5:
			remover();
			break;
		case 0:
			console.log('\nEncerrando o programa.');
			break;
		default:
			console.log('\nOpção inválida. Por favor, escolha uma opção válida.');
			break;
	}
};


// VALIDAR NOTAS E MEDIAS
function validarNota (nota){
	return !isNaN(nota) & nota >= 0 & nota <= 10;
};


// VALIDAR NOMES
function validarNome (nome) {
	return  nome.trim() !== '' & isNaN(nome);

};


// VALIDAR MATRICULAR
function validarmatricula (matricula){
	return Number.isInteger(matricula)
};


// VALIDAR MEDIA
function validarMedia(media){
	return !isNaN(media) & media >= 0 & media <= 10;

};

function adicionarAluno() {
// 1- APLICAÇÃO PARA ADICIONAR DADOS - CREATE

	try {
			const nome = readline.question('\nDigite o nome do aluno: ');
			const nota1 = parseFloat(readline.question('Digite a primeira nota: '));
			const nota2 = parseFloat(readline.question('Digite a segunda nota: '));
			const nota3 = parseFloat(readline.question('Digite a terceira nota: '));
			if (!validarNome(nome) || !validarNota(nota1) || !validarNota(nota2) || !validarNota(nota3)) {


				throw new Error ('\nDados inválidos. Verifique os valores inseridos.')
			}
			const aluno = {
				nome: nome,
				notas: [nota1, nota2, nota3],
				media: (nota1 + nota2 +nota3 ) / 3,
				matricula: cadastroAlunos.length + 1,
			}


			cadastroAlunos.push(aluno);
			console.log('\nNotas cadatradas!')

	}catch(error) {
		console.log('\nErro ao adicionar aluno:', error.message);
	}
}



// 2- PARA LISTAR / EXIBIR AS NOTAS DE TODOS OS ALUNOS E RETORNAR RESULTADO NA TELA - 1º READ
function exibirNotas() {
	for (let i = 0; i < cadastroAlunos.length; i++) {
		const aluno = cadastroAlunos[i];
		console.log(`\nMatrícula: ${aluno.matricula}`);
		console.log(`Nome: ${aluno.nome}`);

		// Verificar se as notas do aluno estão definidas antes de exibi-las
		if (aluno.notas && aluno.notas.length === 3) {
			console.log(`Nota 1: ${aluno.notas[0].toFixed(2)}`);
			console.log(`Nota 2: ${aluno.notas[1].toFixed(2)}`);
			console.log(`Nota 3: ${aluno.notas[2].toFixed(2)}`);
		} else {
			console.log(`Notas não encontradas para este aluno.`);
		}
		console.log(`Média Final: ${aluno.media.toFixed(2)}`);
	}
};


// 3- LOCALIZAR DADOS PARA REALIZAR APLICAÇÕES DE ACORDO COM CRÍTERIOS (FILTROS) DE NOME OU MATRÍCULA - 2º READ
function existeAluno(localizaPorNome, localizaPorMatricula) {
	console.log(`\nPesquisar por:`);
	console.log(`1. Nome\t\t2. Matrícula`);
	let opcaoLocalizacao = readline.questionInt(`Escolha uma opção: `);

	if (opcaoLocalizacao === 1) {
		localizaPorNome = readline.question(`\nInfome o nome do aluno: `);

		let alunoEncontrado = cadastroAlunos.find(function (aluno) {
			return aluno.nome === localizaPorNome;
		});

		return alunoEncontrado;
	} else if(opcaoLocalizacao === 2) {
		localizaPorMatricula= readline.questionInt(`\nInfome a matrícula do aluno: `);

		let matriculaEncontrada = cadastroAlunos.find(function(aluno){
			return aluno.matricula === localizaPorMatricula;
		});

		return matriculaEncontrada;
	}
};


// 4- PARA LISTAR / LOCALIZAR DADOS DE ACORDO COM CRÍTERIOS (FILTROS) DE NOME OU MATRÍCULA E RETORNAR RESULTADO NA TELA - 3º READ
function localizar() {
	const alunoEncontrado = existeAluno();

	if (alunoEncontrado) {
		console.log(`\nRESULTADO DA PESQUISA:`);
		console.log(`Matrícula: ${alunoEncontrado.matricula}`);
		console.log(`Nome: ${alunoEncontrado.nome}`);
		console.log(`Nota 1: ${alunoEncontrado.notas[0].toFixed(2)}`);
		console.log(`Nota 2: ${alunoEncontrado.notas[1].toFixed(2)}`);
		console.log(`Nota 3: ${alunoEncontrado.notas[2].toFixed(2)}`);
		console.log(`Média Final: ${alunoEncontrado.media.toFixed(2)}`);
	} else{
		console.log(`\nAluno não localizado!`);
	}
};


// 5- APLICAÇÃO PARA ATUALIZAR / ALTERAR DADOS - UPDATE
function alterar (){
	const alunoEncontrado = existeAluno();

	if (alunoEncontrado !== "Aluno não localizado!") {
        console.log(`\nRESULTADO DA PESQUISA:`);
        console.log(`Matrícula: ${alunoEncontrado.matricula}`);
        console.log(`Nome: ${alunoEncontrado.nome}`);
        console.log(`Nota 1: ${alunoEncontrado.notas[0].toFixed(2)}`);
        console.log(`Nota 2: ${alunoEncontrado.notas[1].toFixed(2)}`);
        console.log(`Nota 3: ${alunoEncontrado.notas[2].toFixed(2)}`);
        console.log(`Média Final: ${alunoEncontrado.media.toFixed(2)}`);

        const novosDadosAluno = {
            matricula: undefined,
            nome: undefined,
            notas: [undefined, undefined, undefined],
            media: undefined,
        };

        console.log(`\nQual dado deseja alterar:`);
        console.log(`1. Nome`);
        console.log(`2. 1º Nota`);
        console.log(`3. 2º Nota`);
        console.log(`4. 3º Nota`);
        console.log(`5. Todos os dados`);
        console.log(`0. Não desejo alterar`);
        let atualiza = readline.questionInt(`Escolha uma opção: `);

        switch (atualiza) {
            case 1:
                novosDadosAluno.nome = readline.question("\nInforme o nome atualizado: ");
                break;
            case 2:
                novosDadosAluno.notas[0] = readline.questionFloat("\nInforme a primeira nota atualizada: ");
                break;
            case 3:
                novosDadosAluno.notas[1] = readline.questionFloat("\nInforme a segunda nota atualizada: ");
                break;
            case 4:
                novosDadosAluno.notas[2] = readline.questionFloat("\nInforme a terceira nota atualizada: ");
                break;
            case 5:
                novosDadosAluno.nome = readline.question("Informe o nome atualizado: ");
                novosDadosAluno.notas[0] = readline.questionFloat("Informe a primeira nota atualizada: ");
                novosDadosAluno.notas[1] = readline.questionFloat("Informe a segunda nota atualizada: ");
                novosDadosAluno.notas[2] = readline.questionFloat("Informe a terceira nota atualizada: ");
                break;
            case 0:
                console.log("\nNão será alterado!");
                break;
            default:
                console.log("\nOpção inválida.");
                break;
        }

        console.log(`\nDeseja confirmar as alterações?\n1. Sim\t\t2. Não`);
        let confirmaAlteracao = readline.questionInt("Escolha uma opção: ");

        if (confirmaAlteracao === 1) {
					switch(atualiza){
						case 1:
								alunoEncontrado.nome = novosDadosAluno.nome;
                break;
            case 2:
								alunoEncontrado.notas[0] = novosDadosAluno.notas[0];
                break;
            case 3:
								alunoEncontrado.notas[1] = novosDadosAluno.notas[1];
                break;
            case 4:
								alunoEncontrado.notas[2] = novosDadosAluno.notas[2];
                break;
            case 5:
								alunoEncontrado.nome = novosDadosAluno.nome;
								alunoEncontrado.notas[0] = novosDadosAluno.notas[0];
								alunoEncontrado.notas[1] = novosDadosAluno.notas[1];
								alunoEncontrado.notas[2] = novosDadosAluno.notas[2];
                break;
					}

            console.log(`\nATUALIZAÇÃO REALIZADA COM SUCESSO!`);
        } else {
            console.log(`\nAlterações canceladas.`);
        }
    } else {
        console.log("\nO registro do aluno não pode ser atualizado! Não Localizado!");
    }
};


// 6-APLICAÇÃO PARA REMOVER / DELETAR DADOS - DELETE
function remover() {
	const alunoEncontrado = existeAluno();
	if (alunoEncontrado) {
			console.log(`\nRESULTADO DA PESQUISA:`);
			console.log(`Matrícula: ${alunoEncontrado.matricula}`);
			console.log(`Nome: ${alunoEncontrado.nome}`);
			console.log(`Nota 1: ${alunoEncontrado.notas[0].toFixed(2)}`);
			console.log(`Nota 2: ${alunoEncontrado.notas[1].toFixed(2)}`);
			console.log(`Nota 3: ${alunoEncontrado.notas[2].toFixed(2)}`);
			console.log(`Média Final: ${alunoEncontrado.media.toFixed(2)}`);

			console.log(`\nDeseja excluir os dados do aluno?`);
			console.log(`1. Sim\t\t2. Não`);
			let remove = readline.questionInt(`Escolha uma opção: `);

			if (remove === 1) {
					const index = cadastroAlunos.indexOf(alunoEncontrado);
					if (index !== -1) {
							cadastroAlunos.splice(index, 1);
							console.log(`\nDADO REMOVIDO COM SUCESSO!`);
					} else {
							console.log("\nErro ao remover aluno.");
					}
			} else if (remove === 2) {
					console.log("\nNão será removido!");
			} else {
					console.log("\nOpção inválida. Nenhum dado foi removido.");
			}
	} else {
			console.log("\nO registro do aluno não foi encontrado e não pode ser removido!");
	}
};
