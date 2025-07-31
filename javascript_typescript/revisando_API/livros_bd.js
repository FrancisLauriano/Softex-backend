const express = require('express');
const app = express();
const port = 8000;

app.use(express.json());

const {Pool} = require('pg');

const pool = new Pool({
	user: 'postgres',
	host: 'localhost',
	database: 'banco_livros',
	password: '1315',
	port: 5432
})
module.exports = pool;

app.get('/livros', async(req, res) => {
	const livros = await pool.query('select * from Livros' );
	try {
		res.status(200).json(livros.rows);

	} catch (error) {
		res.status(404).json({error:'Livros não encontrato'})
	}
})

app.get('/livros/:id', async(req, res) => {
	const livroId = parseInt(req.params.id);
	const livro = await pool.query('select * from Livros where id = $1', [livroId])
	try {
		res.status(200).json(livro.rows);
	} catch (error) {
		res.status(404).json({error: 'Livro não encontrado'})

	}
})

app.post('/livros', async(req, res) => {

	if (!req.body || !req.body.titulo || !req.body.autor){
		res.status(404).json({error: 'Não foi possivel cadastrar livro'})
	}
	const {titulo, autor} = req.body;

	try {
		const novoLivro = await pool.query('INSERT INTO Livros (titulo, autor) VALUES ($1, $2)', [titulo, autor]);
		res.status(201).json(novoLivro.rows);
	} catch (error) {
		res.status(500).json({error: 'Não foi possivel cadastrar livro'})
	}
})



app.get('/', (req, res) => {
	res.send('bem vindo ao meu servidor!')
})

app.listen(port, () => {
	console.log(`Servidor rodando na porta ${port}`)
})
