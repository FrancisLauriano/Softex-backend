import express, { Request, Response } from 'express';
import axios from 'axios';
const app = express();


const porta: number = 3000;

app.get("/", async (req: Request, res: Response) => {
    try {
        const response = await axios.get('https://servicodados.ibge.gov.br/api/v1/localidades/municipios/recife');
        res.json(response.data);  
    
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Erro ao obter dados da API." });
    }    
});


app.listen(porta, () => {
    console.log(`Servidor rodando em http://localhost:${porta}`);
});



