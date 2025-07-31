// src/ middleware/ authMiddleware.js:
import { verifyToken } from '../utils/jwt.js';
import prisma from '../config/prismaClient.js';

const authMiddleware = async (req, res, next) => {
	// obter o token JWT do cabeçalho Authorization da requisição
	const token = req.header('Authorization')?.replace('Bearer ', '');

	if(!token) {
		return res.status(401).json({error: 'Acesso negado. Token não fornecido!'});
	};

	try {
		// verifica se o token é válido e retorna os dados decodificados (incluindo o id do usuário)
		const decoded = verifyToken(token);
		req.user = await prisma.usuarios.findUnique({
			where: {id: decoded.id},
			select: {id: true, nome: true, email: true},
		});
		next();
	} catch (error) {
		res.status(401).json({error: 'Token inválido.'});
	};
};

export default authMiddleware;


