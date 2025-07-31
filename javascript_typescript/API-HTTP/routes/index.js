const express = require('express');
const jogos = require('./jogosRoutes');


const routes = (app) => {
	app.route('/').get((req, res) => {
		res.status(200).send({titulo: "Bem Vindo ao servidor!"})
	})

	app.use(
		express.json(),
		jogos
	)
}

module.exports = routes;
