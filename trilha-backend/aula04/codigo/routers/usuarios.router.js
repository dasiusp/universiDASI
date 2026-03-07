import UsuarioController from "../controllers/usuario.controller.js";
import UsuarioMiddleware from "../middleware/usuario.middleware.js";
import { Router } from "express";

const UsuarioRouter = Router();

UsuarioRouter.post("/cadastrar/", 
    UsuarioController.cadastrar
);
UsuarioRouter.post("/entrar/",
    UsuarioController.entrar
);
UsuarioRouter.patch("/atualizar-apelido/",
    UsuarioMiddleware.autenticacao,
    UsuarioController.atualizarApelido
);
UsuarioRouter.delete("/deletar-usuario/", 
    UsuarioMiddleware.autenticacao,
    UsuarioController.deletarUsuario
);

export default UsuarioRouter;