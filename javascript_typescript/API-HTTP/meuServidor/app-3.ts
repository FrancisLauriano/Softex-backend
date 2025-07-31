import express, {Request, Response} from 'express';
import bodyParser from 'body-parser';
const app = express();

const porta: number = 3333;

app.use(bodyParser.json());

const livros = [
    { id: 1, titulo: "Aprendendo TypeScript", autor: "John Doe" },
  { id: 2, titulo: "Node.js para Iniciantes", autor: "Jane Smith" }
];


// Buscar todos os livros numa rota
app.get('/livros', (req: Request, res: Response) => {
    res.send(livros)
});



// Buscar por Id numa rota
app.get("/livros/:id", (req: Request, res: Response) => {
    const livro = livros.find((book) => book.id === parseInt(req.params.id));

    if(!livro) {
        return res.status(404).json({mensagem: "Livro não encontrado!"});
    }

    res.send(livro);
});




// Adicionar livro numa rota
app.post("/livros", (req: Request, res: Response) => {
    const novoLivro = {
        id: livros.length +1,
        titulo: req.body.titulo,
        autor: req.body.autor
    };

    livros.push(novoLivro);

    res.status(201).json(novoLivro);

});


//atualizar livro numa rota
app.put("/livros/:id", (req: Request, res: Response) => {
    const livroIndex = livros.findIndex((book) => book.id === parseInt(req.params.id));

    if(livroIndex === -1) {
        return res.status(404).json({mensagem: "Livro não encontrado!"});
    }

    livros[livroIndex] = {
        id: livros[livroIndex].id,
        titulo: req.body.titulo,
        autor: req.body.autor
    }

    res.status(201).json(livros[livroIndex]);

    
});


//deletar livro por numa rota
app.delete("/livros/:id", (req: Request, res: Response) => {
    const deletarLivroIndex = livros.findIndex((book) => book.id === parseInt(req.params.id));

    if(deletarLivroIndex === -1) {
        return res.status(404).json({mensagem: "Livro não encontrado!"});
    } else {

    livros.splice(deletarLivroIndex, 1);

    res.json({mensagem: "Livro removido com sucesso!"})
    }
    
})



// Ligar o servidor
app.listen(porta, () => {
    console.log(`Servidor typescrip rodando em http://localhost:${porta}/livros`);
})



// Buscar por Id numa  rora usando foro 
// app.get("/livros/:id", (req: Request, res: Response) => {
//     let livro;
//     for(let i = 0; i < livros.length; i++)

//     if(!livro) {
//         return res.status(404).json({mensagem: "Livro não encontrado!"});
//     }

//     res.send(livro);
// });