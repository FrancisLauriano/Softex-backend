//src/utils/jwt.js:
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

// dotenv para carregar variáveis de ambiente de um arquivo
dotenv.config();

// armazena o SECRET_JWT que é usado para assinar e verificar tokens. Ele é obtido a partir das variáveis de ambiente do arquivo .env
const SECRET_JWT = process.env.SECRET_JWT;

// gera um token JWT com as informações do usuário:
// o jwt.sign: cria um novo token JWT
// o payload: é passado os dados do usuário incluídos no token
// o expiresIn: configura o tempo para expirar o token
const generateToken = (user) => {
	return jwt.sign({id: user.id, email: user.email}, SECRET_JWT, {expiresIn: '1h'});
};

// verifica a validade de um token JWT:
// o jwt.verify: verifica se o token é válido
const verifyToken = (token) => {
	try {
		return jwt.verify(token, SECRET_JWT);
	} catch (error) {
		throw new Error('Token inválido!')
	};
};

// exporta as funções generateToken e verifyToken para serem usadas em outros módulos do projeto
export {generateToken, verifyToken};

// OBS:
// generateToken(user): Quando um usuário faz login ou se registra, gera um token JWT com as informações do usuário. Esse token pode ser enviado ao cliente e armazenado para autenticação futura
// verifyToken(token): Quando uma solicitação é recebida, pode ser usada para verificar se o token JWT fornecido é válido e não expirou, garantindo que a solicitação foi feita por um usuário autenticado
