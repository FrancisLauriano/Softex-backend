const express = require('express'); //importa o módulo express dentro da constante express

// O express será executado na constante app.
// app será um objeto de servidor que será usado para fazer várias coisas como
// por exemplo ligar o servidor.
const app = express();


// O primeiro parâmetro que o método get recebe é o endereço,
// neste caso '/' que é a mesma coisa que localhost:3333
// O segundo parâmetro é uma função que recebe dois parâmetros:
// request -> requisição
// response -> devolve uma resposta para o front-end (todo retorno de uma rota precisa utilizar o response)
// método json -> permite retornar os dados seguindo uma estrutura de JSON
app.get('/', (request, response) => {
	return response.json({message: 'Hello World'});
})


// liga o servidor
app.listen(3333); // ouve a porta 3333


// Importa a função uuid que vai criar um id único universal
const { uuid } = require('uuidv4');

// Constante que vai armazenar os usuários.
// Desta maneira, toda vez que o servidor reiniciar,
// este array voltará a ser uma lista vazia
const users = [];


// Na nossa aplicação, quando a rota: http://localhost:3333/users
// for acessada no Browser, esta rota deverá listar todos os usuários
// cadastrados no array de usuários.
// users → pode ser chamado de recurso ou rota
// Vamos inserir no método get a rota '/users', que será o endereço
// a ser observado aqui
app.get('/users', (request, response) => {
	return response.json(users); //retorna os usuários cadastrados no array users
})


// const app = express(); //cria a aplicação

// use é utilizado para adicionar algum tipo de função na qual
// todas as rotas deverão passar por ela
// Neste caso a função é express.json()
// Ela deve vir antes das rotas, logo depois de definir a variável app
app.use(express.json());


app.post('/users', (request, response) => {
	// Vamos utilizar aqui o Request Body,
	// pois o cliente enviará estas informações por meio de um formulário, por exemplo.
	const { name, age } = request.body;

	// Criamos uma const user que será um objeto contendo as propriedades:
	// id (que terá seu valor gerado automaticamente)
	// name -> nome do usuário
	// age -> idade do usuário
	const user = { id: uuid(), name, age }

	// Insere este objeto no array users
	users.push(user);

	return response.json(user); // Retorna o usuário recém criado
});


app.put('/users/:id', (request, response) => {
    // route params (pega o id passado como parâmetro)
    const { id } = request.params;

    // utiliza o request body para receber os dados atualizados do cliente
    const { name, age } = request.body

    // percorre o array de usuários e procura a posição(índice) de um
    // usuário que contenha o id igual ao id recebido como parâmetro da rota
    const userIndex = users.findIndex(user => user.id === id);

    //se não encontrar o índice, o retorno de userIndex será -1 (menor que 0)
    //neste caso, retorna uma mensagem de erro
    if(userIndex < 0){
        // Configura o status para 400, que é um código genérico para
        // erros que podem ocorrer no backend.
        // Se isso não for feito, será retornado status 200, que
        // significa que a requisição foi bem sucedida.
        return response.status(400).json({ error: 'User not found'});
    }

    // Se econtrar o índice
    // Pega os dados do usuário atualizado de dentro do body
    const user = {
        id,
        name,
        age,
    };

    //substitui o valor armazenado na posição userIndex pelo valor do objeto user
    users[userIndex] = user;

    // retorna o usuário atualizado
    return response.json(user);
});


app.delete('/users/:id', (request, response) => {
    // route params (pega o id passado como parâmetro),
    // assim como feito na rota PUT
    const { id } = request.params;

    // percorre o array de usuários e procura a posição(índice) de um
    // usuário que contenha  o id igual ao id recebido como parâmetro da rota
    const userIndex = users.findIndex(user => user.id === id);

    if(userIndex < 0){
        // Configura o status para 400, que é um código genérico para
        // erros que podem ocorrer no backend.
        // Se isso não for feito, será retornado status 200, que
        // significa que a requisição foi bem sucedida.
        return response.status(400).json({ error: 'User not found'});
    }

    // splice é um método para retirar alguma informação de dentro de um array.
    // Ele recebe como parâmetro o índice que se deseja remover e quantas posições
    // serão removidas a partir deste índice.
    // No caso, será removida apenas a informação contida no índice userIndex (1)
    users.splice(userIndex, 1);

    // Retorna apenas uma resposta em branco, pois está fazendo uma remoção.
    // Por ser uma resposta vazia, é recomendado enviá-la com o código de status 204
    return response.status(204).send();
});


app.get('/users', (request, response) => {

    // o parâmetro name será passado no endereço da rota e
    // request.query vai pegar o valor passado nele
    const { name } = request.query;

    // Se o name for informado na rota, a constante results será
    // preenchida com o filtro de usuários, em que para cada usuário
    // será verificado se no nome dele existe a palavra que está dentro de name.
    // O método includes retorna um true ou false.
    // Se o name for vazio, results aramzenará todos os usuários.
    const results = name ? users.filter(user => user.name.includes(name)) : users;

    // retorna o results
    return response.json(results);

});



