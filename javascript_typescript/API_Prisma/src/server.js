//src/server.js:
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import userRouters from './routes/userRouters.js';

// dotenv para carregar variáveis de ambiente de um arquivo
dotenv.config();

// cria uma instância express
const app = express();

// carrega a variável de ambiente do arquivo .env para process.env
// define a porta em que o servidor vai escutar. Se a variável de ambiente PORT não estiver definida, usa a porta 8000 por padrão
const PORT = process.env.PORT || 8000;

// módulo CORS para permitir ou restringir requisições de diferentes domínios

// habilita o cors para permitir requisições de outros domínios
app.use(cors());

// habilita o middleware de parsing de JSON para que o servidor possa interpretar requisições em JSON
app.use(express.json());

// define que todas as rotas relacionadas aos usuários estarão no caminho /users e serão tratadas pelas rotas definidas em userRouters
app.use('/users', userRouters);

// app.use('/exchanges', exchangesRouters); // NÃO IMPLEMENTADO AS ROTAS DE ANUNCIOS
// app.use('/messages', messagesRouters); // NÃO IMPLEMENTADO AS ROTAS DE MENSAGENS
// app.use('/reviews', reviewsRouters); // NÃO IMPLEMENTADO AS ROTAS DE AVALIAÇÕES


// inicia o servidor para escutar na porta definida
app.listen(PORT, () => {
	console.log(`Servidor rodando na porta ${PORT}`)
})
