// index.js
(async () => {

	const database = require('./db');
	const Produto = require('./produto');

	try {

		// Sync do Sequelize com banco de dados para maperar as tabelas corretamente
		await database.sync();
		const resultado = await database.sync();
		console.log(resultado);

		// 1- CREATE -  Criar um novo registro
		const produtoCreate = await Produto.create({
		  nome: 'Monitor LED',
		  preco: 800,
		  descricao: 'Preto'
		})
		console.log(produtoCreate);


		// 2- READ – Ler um registro, ou uma lista de registros
		// LER (LISTAR) TODOS OS PRODUTOS
		const produtos = await Produto.findAll();
		console.log(produtos);

		// LER (LISTAR) PRODUTOS POR CRITERIOS ESPECIFICOS (PREÇO ESPECIFICO, DESCRIÇÃO ESPECIFICA ETC)
		const produtosCriterios = await Produto.findAll({
		  where: {
				preco: 20
			 }
		});
		console.log(produtosCriterios);

		// LER (LISTAR) LISTAR PRODUTO ESPECIFICO POR ID - exemplo produto id 1
		const produtoEspecifico = await Produto.findByPk(1);
		console.log(produtoEspecifico);


		// 3- UPDATE – Atualizar um registro
		const produto = await Produto.findByPk(1);
		produto.preco = 38;
		const resultadoSave = await produto.save();
		console.log(resultadoSave > 0 ? 'Atualizado com sucesso!' : 'Produto não encontrado!',
			resultadoSave);


		// 4- DELETE – Excluir um registro
		// 1º forma para realizar delete:
		const produtoDelete = await Produto.findByPk(1);
		const resultadoDestroy1 = await produtoDelete.destroy();
		console.log(resultadoDestroy1 > 0 ? 'Removido com sucesso!' : 'Produto não encontrado!',
			resultadoDestroy1);

		// 2º forma para realizar delete:
		const resultadoDestroy2 = await Produto.destroy({ where: {
			nome: "Mouse UBS"
			}
		});
		console.log(resultadoDestroy2 > 0 ? 'Removido com sucesso!' : 'Produto não encontrado!',
			resultadoDestroy2);

} catch (error) {
	console.log('ERRO\n',error);
} finally {
  //ao finalizar o script, finaliza a conexão com o banco de dados
  await Produto.database.close();
}

})();
