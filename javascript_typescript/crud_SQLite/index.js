// index.js
// Sync do sequelize com banco de dados
(async () => {
	const database = require('./db');
	const Produto = require('./produto');

	// tratamento de exceções
	try {
			const resultado = await database.sync();
			console.log(resultado);

			// 1- CREATE
			const resultadoCreate = await Produto.create({
				nome: 'mouse',
				preco: 25,
				descricao: 'saída USB'
		})
		console.log(resultadoCreate);


		// 2- READ - LISTAR TODOS OS PRODUTOS
		const produtos = await Produto.findAll();
		console.log(produtos);


		// 3- READ - LISTAR UM PRODUTO ESPECÍFICO (PREÇO ESPECIFICO, DESCRIÇÃO ESPECIFICA ETC)
		const produtoEspecifico = await Produto.findAll({
		  where: {
				// preco:
				// OU
			  // descricao:
			 }
		});
		console.log(produtoEspecifico);


		// 4- READ - LISTAR UM PRODUTO ESPECÍFICO POR ID (CHAVE) - exemplo produto id 1
		const produtoPorId = await Produto.findByPk();
		console.log(produtoPorId);


		// 5- UPDATE
		const produto = await Produto.findByPk();
		produto.nome; // alterar nome
		produto.descricao; // alterar descrição
		const resultadoSave = await produto.save();
		console.log(resultadoSave > 0 ? 'Atualizado com sucesso!' : 'Produto não encontrado!',
		resultadoSave);


		// 6- DELETE
		const resultadoDestroy = await Produto.destroy({ where: {
			nome // deletar produto pesquisando por nome
			}
		});
		console.log(resultadoDestroy > 0 ? 'Removido com sucesso!' : 'Produto não encontrado!', resultadoDestroy);

		// tratamento de exceções
	} catch (error) {
			console.log('ERRO\n',error);

		//ao finalizar o script, finaliza a conexão com o banco de dados
	} finally {
		await Produto.database.close();
	}
})();
