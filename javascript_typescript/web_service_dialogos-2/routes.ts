import express, {Request, Response} from 'express';
import bodyParser from 'body-parser';


const app = express();

const port: number = 3333;

app.use(bodyParser.json());


const usuarios = [
    {nome: 'Francis Lauriano', id: 1},
    {nome: 'José Cruz', id: 2}
]


// buscar todos os usuarios
app.get('/usuarios',(req: Request, res: Response) => {
    try {
        res.send(usuarios)
    } catch (error: any) {
        res.status(404).json({mensagem: 'Lista de usuários não encontro!'})
    }
});


// buscar usuario especifico por id
app.get('/usuarios/:id', (req: Request, res: Response) => {
    const usuario = usuarios.find((idPessoa) => idPessoa.id === parseInt(req.params.id));

    if (usuario) {
        res.send(usuario)
        
    } else {
        res.status(404).json({mensagem: 'Usuário não encontrado!'})
    }
});


// adicionar usuario a lista
app.post('/usuarios', (req: Request, res: Response) => {

    try {
        const novoUsuario = {
            nome: req.body.nome,
            id: usuarios.length +1
        }

        usuarios.push(novoUsuario);
        res.status(201).json(novoUsuario);
        
    } catch (error: any) {
        res.status(400).json({mensagem: 'Falha ao adicionar novo usuário!'})   
    }
});


// atualizar dado do usuario
app.put('/usuarios/:id', (req: Request, res: Response) => {

    const usuarioIndex = usuarios.findIndex((idPessoa) => idPessoa.id === parseInt(req.params.id));

    if (usuarioIndex === -1) {
        res.status(404).json({mensagem: 'Erro!'})
    } else {
        usuarios[usuarioIndex] = {
            nome: req.body.nome,
            id: usuarios[usuarioIndex].id
        }
        res.status(201).json(usuarios[usuarioIndex])
    }
});


// deletar usuario
app.delete('/usuarios/:id', (req: Request, res: Response) => {

    const usuarioIndex = usuarios.findIndex((idPessoa) => idPessoa.id === parseInt(req.params.id));

    if (usuarioIndex === -1) {
        res.status(404).json({mensagem: 'Erro!'})
    } else {
        usuarios.splice(usuarioIndex, 1);

        res.json({mensagem: "Usuário removido com sucesso!"})
    }
})



app.listen(port, () => {
    console.log(`Executando servidor HTTP local em http://localhost:${port}`);
});

