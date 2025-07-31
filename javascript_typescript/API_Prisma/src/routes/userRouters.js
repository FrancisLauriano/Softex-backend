//src/routes/ userRouters.js:
import express from 'express';
import userController from '../controllers/userController.js';
import authMiddleware from '../middleware/authMiddleware.js';

// cria uma instância do Router do Express para definir as rotas relacionadas aos usuários.
const routerUsers = express.Router();

// GET / --> chama o método allUsers do userController para obter todos os usuários
routerUsers.get('/', userController.allUsers);

// GET /:id -->  chama o método byIdUser do userController para obter um usuário específico pelo ID
// usa authMiddleware para garantir que apenas usuários autenticados possam acessar essa rota
routerUsers.get('/:id', authMiddleware, userController.byIdUser);

// POST / --> chama o método createUser do userController para criar um novo usuário
routerUsers.post('/', userController.createUser);

// PUT /:id -->  chama o método updateUser do userController para atualizar um usuário específico pelo ID
// usa authMiddleware para garantir que apenas usuários autenticados possam acessar essa rota
routerUsers.put('/:id', authMiddleware, userController.updateUser);

// DELETE /:id -->  chama o método deleteUser do userController para deletar um usuário específico pelo ID
// usa authMiddleware para garantir que apenas usuários autenticados possam acessar essa rota
routerUsers.delete('/:id', authMiddleware, userController.deleteUser);

// POST /login -->  chama o método login do userController para autenticar um usuário e gerar um token JWT
routerUsers.post('/login', userController.login);

// GET /profile -->  Chama o método userProfile do userController para obter os dados do perfil do usuário autenticado
// usa authMiddleware para garantir que apenas usuários autenticados possam acessar essa rota
routerUsers.route('/profile').get(authMiddleware, userController.userProfile);

// exporta routerUsers para que possa ser usado em outras partes da aplicação
export default routerUsers;


