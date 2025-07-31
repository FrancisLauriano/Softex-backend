import express, {Request, Response} from "express";
import axios from "axios";
const app = express();

const porta: number = 3000;

app.get("/", async (req: Request, res: Response) => {
    try {
        const response = await axios.get("https://api.adviceslip.com/advice");
        res.json(response.data);  
        
        
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Erro ao obter dados da API." });
    }
})

app.listen(porta, () => {
    console.log(`servidor rodando em https://localhost:${porta}`);

});



