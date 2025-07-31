const express = require('express');
const app = express();

const porta = 3333;

app.get('/', (req, res) => {
	res.send(`Bem vindo ao meu servidor!`)
});

app.listen(porta, () => {
	console.log(`Servidor rodando em http://localhost:${porta}`);
})

