import express, {Request, Response} from 'express';
const app = express();

const port: number = 3333;

app.get('/', (req: Request, res: Response) => {
    res.send(`Meu primeiro servidor em typescript!`)
});

app.listen(port, () =>{ 
    console.log(`Servidor typescrip rodando em http://localhost:${port}`);
})