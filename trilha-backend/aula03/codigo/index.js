import express from "express";

// Lista de um mercado
const mercado = {
    frutas: ["Banana", "Maçã", "Abacaxi"],
    mistura: ["Ovo", "Carne moída"],
    basicos: ["Arroz", "Feijão"]
}

const app = express();
app.use(express.json()); // Aqui vai permitir enviar um objeto JSON como resposta ({objeto: "isto é um objeto"})

app.get("/pegar-informacao", (req, res) => {
    return res.json(mercado);
});

app.get("/pegar-informacao/:nome", (req, res) => {
    const campo = req.params.nome;
    return res.json(mercado[campo]);
});

app.get("/pegar-informacao2", (req, res) => {
    // mudamos o caminho para não dar conflito com o de 
    // cima
    console.log();
    const posicao = Number(req.query?.posicao);
    const nome = req.query?.nome;
    return res.json(mercado[nome][posicao]);
});

app.post("/colocar-item", (req, res) => {
    // Aqui pegamos todos os elementos do body
    const body = req.body;
    // O try vai tentar algo, se der erro, ele vai para o
    // catch e resolve lá
    try {
        const campo = body.campo;
        const values = body.novos;
        mercado[campo].push(...values);

        return res.status(200).json({response: "Adicionado com sucesso!"})
    } catch (err) {
        return res.status(500).json({error: err});
    }
});

app.patch("/atualizar-lista/:campo", (req, res) => {
    try{
        const campo = req.params.campo;
        const {item_antigo, item_novo} = req.body;
        const pos = mercado[campo].indexOf(item_antigo);

        
        if(pos === -1) return res.status(404).json({error: "Item não encontrado"});

        mercado[campo][pos] = item_novo;

        return res.status(200).json({message: "Atualizado!"});
    } catch (err) {
        console.error("ERROR: ",err);
        return res.status(500).json({message: "Erro inesperado"});
    } 
});

app.listen(8000);