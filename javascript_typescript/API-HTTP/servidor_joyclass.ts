import express, {Request, Response} from 'express';
const app = express();

const porta: number = 3000;

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
    res.send('Bem-Vindo ao meu web service!'); 
});


app.use((req: Request, res: Response) => {
    res.status(404).json({ error: 'Rota não encontrada' });
});


app.listen(porta, () => {
    console.log(`Executando servidor HTTP local em http://localhost:${porta}/`);   
});


