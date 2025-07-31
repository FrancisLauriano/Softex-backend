import express, { Request, Response } from 'express';
import axios from 'axios';
const app = express();

const porta: number = 3333;

// Adicione um middleware para fazer o parse do corpo da requisição como JSON
app.use(express.json());

app.post('/', async (req: Request, res: Response) => {
    try {
        // Extraia o texto do corpo da requisição
        const text = req.body.text;

        // Certifique-se de que o texto está presente antes de fazer a solicitação
        if (!text) {
            return res.status(400).json({ error: 'Texto não fornecido na requisição.' });
        }

        // Faça a solicitação POST para a API de tradução do Yoda
        const response = await axios.post('https://api.funtranslations.com/translate/yoda', { text });

        // Retorne os dados traduzidos
        res.json(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao processar a tradução.' });
    }
});

app.listen(porta, () => {
    console.log(`Servidor rodando em http://localhost:${porta}`);
});

module.exports = app;
