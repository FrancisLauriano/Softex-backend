let jogos = [
	{nome: 'Mario World', lancamento: '21 de novembro de 1990'},
	{nome: 'Sonic', lancamento: '23 de junho de 1991'},
	{nome: 'Doom', lancamento: '10 de dezembro de 1993'}
]


const getJogos = () => {
	return jogos;
}

const getJogoById = (id) => {
	return jogos[id];
}

const createJogo = (novoJogo) => {
	jogos.push(novoJogo);
	return jogos;
}

const updateJogos = (id, jogo) => {
	jogos[id] = jogo;
	return jogos[id];
}

const deleteJogos = (id) => {
	eleToRemove = jogos[id];
	jogos = jogos.filter(function (elemento) {
		return elemento.nome != eleToRemove.nome && elemento.lancamento != eleToRemove.lancamento;
	})
	return jogos;
}


module.exports = {
	getJogos,
	getJogoById,
	createJogo,
	updateJogos,
	deleteJogos,
}
