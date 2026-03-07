import UsuarioModel from "../models/usuario.model.js";

async function cadastrar(req, res) {
    const corpo = req.body;

    if(!corpo) return res.status(400).json({error: "Corpo vazio!"});

    const error = [];
    
    if(!corpo.nome) error.push("Nome do usuário não preenchido!");

    if(!corpo.apelido) error.push("Apelido do usuário não preenchido!");

    if(!corpo.email) error.push("Email do usuário não preenchido!");

    if(!corpo.senha) error.push("Senha não preenchido!");

    if(error.length) return res.status(400).json({error});

    const response = await UsuarioModel.cadastrar(corpo);

    return res.status(201).json(response);
}

async function atualizarApelido(req, res) {
    const corpo = req.body;
    const id = req.usuario.id;
    
    if(!id && id != 0) return res.status(400).json({error: "Id não passado"});
    if(!corpo) return res.status(400).json({error: "Corpo vazio!"});
    if(!corpo.apelido) return res.status(400).json({error: "Apelido vazio!"});

    const response = await UsuarioModel.atualizarApelido(id, corpo.apelido);

    if(!response) return res.status(500).json({error: "Erro inesperado!"});

    req.usuario.apelido = corpo.apelido;

    req.session.usuario = req.usuario;

    return res.status(200).json(response);
}

async function entrar(req, res) {
    const corpo = req.body;

    if(!corpo) return res.status(400).json({error: "Corpo vazio!"});
    if(!corpo.email) return res.status(400).json({error: "Email vazio!"});
    if(!corpo.senha) return res.status(400).json({error: "Senha vazio!"});

    const response = await UsuarioModel.entrar(corpo);

    if(!response) return res.status(400).json({error: "Erro inesperado!"});
    if(response?.error) return res.status(400).json(response);

    // Aqui vai ser salvo o usuário no session (a biblioteca vai ser chamada no app.js)
    req.session.usuario = response;

    return res.status(200).json(response);
}

async function deletarUsuario(req, res) {
    const id = req.usuario.id;

    if(!id && id != 0) return res.status(400).json({error: "Id não passado!"});

    const response = await UsuarioModel.deletarUsuario(id);

    if(!response) return res.status(500).json({error: "Erro inesperado!"});
    if(response?.error) return res.status(400).json(response);

    req.session.destroy();

    req.usuario = {};

    return res.status(200).json(response);
}

const UsuarioController = { cadastrar, atualizarApelido, entrar, deletarUsuario };

export default UsuarioController;