import express, {Request, Response} from 'express';
import axios from 'axios';
const app = express();

const porta: number = 3333;

app.use(express.json());

app.post ('/', async (req: Request, res: Response) => {

    try {
        const text = req.body.text;
    const response = await axios.post('https://api.funtranslations.com/translate/yoda', {text});
    res.json(response.data);
        
    } catch (error) {
        console.error(error);
        res.status(500).json({error: 'Erro ao processar a tradução.'})    
    }
});



app.listen(porta,() => {
    console.log(`servidor rodando em https://localhost:${porta}`);

});

module.exports = app;