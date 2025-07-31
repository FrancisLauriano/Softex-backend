const express = require('express');
const bodyParser = require('body-parser');
const app = express ();
const port = 3333;

const routes = require('./routes/index');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


// usando rotas
routes(app);

const server = app.listen(port, () => {
	console.log(`Exemplo de um aplicativo escutando a porta ${server.address().port}`);
})
