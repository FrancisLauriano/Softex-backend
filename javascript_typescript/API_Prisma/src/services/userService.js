//src/services/userService.js:
import userModel from '../models/userModel.js';
import Joi from 'joi';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { generateToken } from '../utils/jwt.js';

// esquema de validação com Joi: valida os dados do endereço
const addressSchema = Joi.object({
  logradouro: Joi.string().required(),
  numero: Joi.string().required(),
  bairro: Joi.string().required(),
  complemento: Joi.string().allow(null, ''),
  cep: Joi.string().length(8).required(),
  municipio: Joi.string().required(),
  uf: Joi.string().length(2).required(),
});

// esquema de validação com Joi: valida os dados do telefone
const phoneSchema = Joi.object({
  contato: Joi.string().required(),
});

// esquema de validação com Joi: valida os dados do usuario, incluindo endereço e telefone
const userSchema = Joi.object({
  nome: Joi.string().required(),
  email: Joi.string().email().required(),
  senha: Joi.string().min(6).max(10).required(),
  enderecos: addressSchema,
  telefones: Joi.array().items(phoneSchema).min(1),
});

// busca um usuário pelo ID, validando a entrada e verificando se o usuário existe
const byIdUser = async (id) => {
  if (!id) throw new Error('ID é obrigatório.');

  const user = await userModel.byIdUser(id);
  if (!user) throw new Error('Usuário não encontrado.');

  return user;
};

// retorna todos os usuários do banco de dados
const allUsers = async () => {
  return await userModel.allUsers();
};

// valida os dados do usuário, verifica se o email já está em uso, criptografa a senha e cria um novo usuário no banco de dados
const createUser = async (dataUser) => {
  const { error } = userSchema.validate(dataUser);
  if (error) {
    throw new Error(error.details.map((detail) => detail.message).join(' '));
  }


	const existingUser = await userModel.byEmailUser(dataUser.email);
	if (existingUser) {
		throw new Error('E-mail já está em uso!');
	};

  const hashedPassword = await bcrypt.hash(dataUser.senha, 10);
  dataUser.senha = hashedPassword;

  return await userModel.createUser(dataUser);
};

// valida os dados do usuário, verifica se o email já está em uso por outro usuário,criptografa a senha
// e atualiza os dados do usuário no banco de dados
const updateUser = async (id, dataUser) => {
  if (!id) throw new Error('ID é obrigatório.');

  const { error } = userSchema.validate(dataUser);
  if (error) {
    throw new Error(error.details.map((detail) => detail.message).join(' '));
  };

  const user = await userModel.byIdUser(id);
  if (!user) throw new Error('Usuário não encontrado.');

	const existingUser = await userModel.byEmailUser(dataUser.email);
	if (existingUser && existingUser.id !== id) {
		throw new Error('E-mail já está em uso!');
	};

	if(dataUser.senha) {
		const hashedPassword = await bcrypt.hash(dataUser.senha, 10);
		dataUser.senha = hashedPassword;
	}

  return await userModel.updateUser(id, dataUser);
};

// valida o ID, verifica se o usuário existe, e deleta o usuário do banco de dados
const deleteUser = async (id) => {
  if (!id) throw new Error('ID é obrigatório.');

  const user = await userModel.byIdUser(id);
  if (!user) throw new Error('Usuário não encontrado.');

  return await userModel.deleteUser(id);
};

// valida as credenciais de login, verifica se o usuário existe e se a senha é válida, e gera um token JWT para autenticação
const login = async (email, senha) => {
  if (!email || !senha) {
    throw new Error('Email e senha são obrigatórios');
  }

  const user = await userModel.byEmailUser(email);
  if (!user) {
    throw new Error('Usuário não encontrado');
  }

  const isPasswordValid = await bcrypt.compare(senha, user.senha);
  if (!isPasswordValid) {
    throw new Error('Senha inválida');
  }

  const token = jwt.generateToken(user);
  return { user, token };
};

// agrupa todas as funções em um objeto userService e as exporta para serem usadas em outras partes da aplicação
const userService = {
  allUsers,
  byIdUser,
  createUser,
  updateUser,
  deleteUser,
	login,
};

export default userService;
