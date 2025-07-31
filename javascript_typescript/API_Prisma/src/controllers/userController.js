//src/controllers/userController.js:
import userService from '../services/userService.js'

// chama o serviço allUsers para obter todos os usuários
// retorna os usuários com status 200 (OK) em caso de sucesso
// retorna uma mensagem de erro com status 500 (Internal Server Error) em caso de falha
const allUsers = async (req, res) => {
	try {
		const users = await userService.allUsers();
		res.status(200).json(users);
	} catch (error) {
		res.status(500).json({error: error.message});
	};
};

// Chama o serviço byIdUser para obter um usuário pelo ID
// se o usuário não for encontrado, retorna status 404 (Not Found)
// retorna uma versão pública do usuário (sem informações sensíveis) com status 200 (OK) em caso de sucesso
// retorna uma mensagem de erro com status 500 (Internal Server Error) em caso de falha.
const byIdUser = async (req, res) => {
	try {
		const user = await userService.byIdUser(req.params.id);
		if(!user) {
			res.status(404).json({error: 'Usuário não encontrado'})
		}
		const publicUser = {
			id: user.id,
			nome: user.nome,
			email: user.email
		};

		res.status(200).json(publicUser);
	} catch (error) {
		res.status(500).json({error: error.message});
	};
};

// chama o serviço createUser para criar um novo usuário com os dados fornecidos no corpo da requisição
// retorna o usuário criado com status 201 (Created) em caso de sucesso
// retorna uma mensagem de erro com status 500 (Internal Server Error) em caso de falha
const createUser = async (req, res) => {
	try {
		const user = await userService.createUser(req.body);
		res.status(201).json(user);
	} catch (error) {
		res.status(500).json({error: error.message});
	};
};

// chama o serviço updateUser para atualizar os dados do usuário com o ID fornecido
// retorna o usuário atualizado com status 200 (OK) em caso de sucesso
// retorna uma mensagem de erro com status 500 (Internal Server Error) em caso de falha
const updateUser = async (req, res) => {
	try {
		const user = await userService.updateUser(req.params.id, req.body);
		res.status(200).json(user);
	} catch (error) {
		res.status(500).json({error: error.message});
	};
};

// chama o serviço deleteUser para excluir o usuário com o ID fornecido
// retorna status 204 (No Content) em caso de sucesso (sem conteúdo de resposta)
// retorna uma mensagem de erro com status 500 (Internal Server Error) em caso de falha
const deleteUser = async (req, res) => {
	try {
		await userService.deleteUser(req.params.id);
		res.status(204).send();
	} catch (error) {
		res.status(500).json({error: error.message});
	};
};

// chama o serviço login para autenticar o usuário com email e senha fornecidos
// retorna o usuário autenticado e o token JWT com status 200 (OK) em caso de sucesso
// retorna uma mensagem de erro com status 500 (Internal Server Error) em caso de falha
const login = async (req, res) => {
	try {
		const {email, senha} = req.body;
		const {user, token} = await userService.login(email, senha);
		res.status(200).json({user, token});
	} catch (error) {
		res.status(500).json({error: error.message});
	};
};

// chama o serviço byIdUser para obter o perfil do usuário autenticado (usando req.user.id)
// retorna o perfil do usuário com status 200 (OK) em caso de sucesso
// retorna status 404 (Not Found) se o usuário não for encontrado
// retorna uma mensagem de erro com status 500 (Internal Server Error) em caso de falha
const userProfile = async (req, res) => {
	try {
		const user = await userService.byIdUser(req.user.id);
		if(user) {
			res.status(200).json(user);
		}else {
			res.status(404).json({error: 'Usuário não encontrado!'})
		}
	} catch (error) {
		res.status(500).json({error: error.message});
	};
};

// exporta todas as funções do controlador para serem usadas em outras partes da aplicação, como nas rotas
const userController = {
	allUsers,
  byIdUser,
  createUser,
  updateUser,
  deleteUser,
	login,
	userProfile,
}

export default userController;
