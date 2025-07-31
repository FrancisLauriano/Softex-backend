const { ok } = require('assert');
const { error } = require('console');
const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

var livros = [
	{id: 1, titulo: 'O Senhor Dos Anéis', autor: 'J.R.R Tolkien'},
	{id: 2, titulo: 'Harry Potter e a Pedra Filosofal', autor: 'J. K. Rowling'}
];

app.get('/livros', (req, res) => {
	res.send(livros)
});

app.get('/livros/:id', (req, res) => {
	const localizarLivro = livros.find((livro) => livro.id === parseInt(req.params.id));

		if(localizarLivro) {
			// res.send(localizarLivro)
			res.status(200).json(localizarLivro)
		}else{
			res.status(404).json({error: 'Livro não localizado!'})
		}
});

app.post('/livros', (req, res) => {
	novoLivro = {
		id: livros.length + 1,
		titulo: req.body.titulo,
		autor: req.body.autor
	};

	livros.push(novoLivro);
	res.status(201).json(novoLivro);
});

app.put('/livros/:id', (req, res) => {
	const livroIndex = livros.findIndex((livro) => livro.id === parseInt(req.params.id));

	if(livroIndex == -1) {
		res.status(404).json({error:'Livro não localizado!'})
	}else{
		livros[livroIndex] = {
			id: livros[livroIndex].id,
			titulo: req.body.titulo,
			autor: req.body.autor
		}
		res.status(200).json(livros[livroIndex])
	}
})

app.delete('/livros/:id', (req, res) => {
	const livroIndex = livros.findIndex((livro) => livro.id === parseInt(req.params.id));

	if(livroIndex == -1) {
		res.status(404).json({error: 'Livro não localizado!'});
	}else{
		livros.splice(livroIndex, 1);
		res.status(200).json({mensagem: 'Livro removido com sucesso!'})
	}
})


app.use('/', (req, res) => {
	res.status(200).json({ok:'Bem vindo ao meu servidor!'})
});

app.use((req, res) => {
	res.status(404).json({error: 'Rota não localizada!'})
});

app.listen(port, () => {
	console.log(`Servidor rodando na porta ${port}`)
})
