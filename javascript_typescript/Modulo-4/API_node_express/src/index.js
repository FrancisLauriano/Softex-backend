const express = require('express');
const { uuid } = require('uuidv4');

const app = express();

app.use(express.json());

const users = [];

app.get('/users', (request, response) => {

    const { nome } = request.query;

    const results = nome ? users.filter(user => user.nome.includes(nome)) : users;

    return response.json(results);

});

app.post('/users', (request, response) => {

    const { nome, idade } = request.body;

    const user = { id: uuid(), nome, idade }

    users.push(user);

    return response.json(user);
});

app.put('/users/:id', (request, response) => {

    const { id } = request.params;

    const { nome, idade } = request.body

    const userIndex = users.findIndex(user => user.id === id);

    if(userIndex < 0){

        return response.status(400).json({ error: 'User not found'});
    }


    const user = {
        id,
        nome,
        idade,
    };

    users[userIndex] = user;

    return response.json(user);
});

app.delete('/users/:id', (request, response) => {

    const { id } = request.params;

    const userIndex = users.findIndex(user => user.id === id);

    if(userIndex < 0){

        return response.status(400).json({ error: 'User not found'});
    }

    users.splice(userIndex, 1);

    return response.status(204).send();
});

app.listen(3333);
