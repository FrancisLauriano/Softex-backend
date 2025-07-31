const express = require('express');
const repository = require('./repository');
const app = express ();
const port = 3000;

// Middleware para fazer o parse do corpo JSON
app.use(express.json());


	app.get('/jogos', (req, res) => {
		res.send(repository.getJogos())
	})


	app.post('/jogos', (req, res) => {
		res.send(repository.createJogo(req.body))
	})


	app.put('/jogos', (req, res) => {
		const id = req.query.id;
		const jogo = req.body;
		res.send(repository.updateJogos(id, jogo))
	})


	app.delete('/jogos', (req, res) => {
		const id = req.query.id;
		res.send(repository.deleteJogos(id))
	})


	app.get('/', (req, res) => {
		res.send('Hello Word!')
	})

	app.listen(port, () => {
		console.log(`Exemplo de um aplicativo escutando a porta ${port}`);
	})

