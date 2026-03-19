async function autenticacao(req, res, next) {
    const usuario = req.session.usuario;

    if(!usuario) return res.status(401).json({error: "Usuário não autenticado!"});
    req.usuario = usuario; // aqui é para ter um acesso mais fácil para o usuário

    next();
}

async function administrador(req, res, next) {
    const usuario = req.usuario;

    if(!usuario) return res.status(500).json({error: "Algum erro inesperado ocorreu!"});
    if(usuario.hierarquia !== "ADMINISTRADOR") return res.status(403).json({error: "Sem permissão para acessar a função!"});

    next();
}

const UsuarioMiddleware = { autenticacao, administrador };

export default UsuarioMiddleware;