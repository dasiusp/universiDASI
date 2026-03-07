import ProdutosModel from "../models/produtos.model.js";// aqui puxamos o ProdutosModel do model

async function cadastrar(req, res) {
    const corpo = req.body;

    if(!corpo) return res.status(400).json({error: "Corpo vazio!"});

    const error = [];
    
    if(!corpo.nome) error.push("Nome do produto não preenchido!");

    if(!corpo.descricao) error.push("Descrição do produto não preenchido!");

    if(!corpo.preco) error.push("Preço do produto não preenchido!");

    if(error.length) return res.status(400).json({error});

    const response = await ProdutosModel.cadastrar(corpo);

    return res.status(201).json(response);
}

async function todosProdutos(req, res) {
    const response = await ProdutosModel.todosProdutos();

    return res.status(200).json(response);
}

async function produtoId(req, res){
    const id = req.params.id;

    if(!id && id != 0) return res.status(400).json({error: "Id não informado!"});

    const produto = await ProdutosModel.produtoId(id);

    if(produto?.error) return res.status(404).json({message: "Produto não encontrado!"});

    return res.status(200).json(produto);
}

async function deletarProduto(req, res) {
    const id = req.params.id;

    if(!id && id != 0) return res.status(400).json({error: "Id não informado!"});

    const response = await ProdutosModel.deletarProduto(id);

    if(!response) return res.status(500).json({error: "Erro inesperado!"});

    return res.status(200).json(response);
}

async function atualizar(req, res) {
    const id = req.params.id;

    const corpo = req.body;
    const dados = {};

    if(!corpo) return res.status(400).json({error: "Corpo vazio!"});
    if(!id && id != 0) return res.status(400).json({error: "Id não informado!"});

    if(corpo.nome) dados.nome = corpo.nome;

    if(corpo.descricao) dados.descricao = corpo.descricao;

    if(corpo.preco) dados.preco = corpo.preco;

    const response = await ProdutosModel.atualizar({id, ...dados});

    if(!response) return res.status(500).json({error: "Erro inesperado!"});

    return res.status(200).json(response);


}

const ProdutoController = { cadastrar, todosProdutos, produtoId, deletarProduto, atualizar };

export default ProdutoController;