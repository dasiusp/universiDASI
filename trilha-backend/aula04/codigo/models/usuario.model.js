const usuarios = [
    {
        id: "0",
        nome: "Administrador",
        apelido: "admin",
        email: "admin@admin.com",
        senha: "admin@123",
        hierarquia: "ADMINISTRADOR"
    },
];

let idx = 0;

async function cadastrar({nome, email, apelido, senha, hierarquia = "USUARIO"}) {
    const novoUsuario = {id: String(idx++), nome, email, apelido, senha};

    usuarios.push(novoUsuario);

    const response = { message: "Usuário criado com sucesso!", id : novoUsuario.id};

    return response;
}

async function atualizarApelido(id, apelido){
    const indexUsuario = usuarios.findIndex(usuario => usuario.id === id);

    if(usuarios[indexUsuario].apelido = apelido) return {message: "Atualizado com sucesso"};

    return {error: "Erro inesperado!"}
}

async function entrar({email, senha}){
    const encontrarEmail = usuarios.find(usuario => usuario.email === email);
    if(!encontrarEmail)
     return {error: "Email não encontrado!"};
    
    if(encontrarEmail.senha !== senha) return {error: "Senha inválida!"};

    return encontrarEmail;

}

async function deletarUsuario(id) {
    const usuarioEncontrado = usuarios.findIndex(usuario => usuario.id === id);
    if(!usuarioEncontrado && usuarioEncontrado != 0) return {error: "Usuário não encontrado"};

    for(let i = usuarioEncontrado; i < usuarios.length -1; i++)
        usuarios[i] = usuarios[i+1];

    usuarios.pop();

    return {message: "Usuário deletado!"};
}

const UsuarioModel = { cadastrar, atualizarApelido, entrar, deletarUsuario };

export default UsuarioModel;