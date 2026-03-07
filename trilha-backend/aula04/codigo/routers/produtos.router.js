import UsuarioMiddleware from "../middleware/usuario.middleware.js";
import ProdutoController from "../controllers/produtos.controller.js";
import { Router } from "express";

const ProdutoRouter = Router(); // Usamos apenas o Router para não puxar toda a biblioteca do express.

// Aqui podemos apenas passar a assinatura das funções
ProdutoRouter.get("/produtos/", UsuarioMiddleware.autenticacao, ProdutoController.todosProdutos);
ProdutoRouter.get("/produtos/:id", UsuarioMiddleware.autenticacao, ProdutoController.produtoId);
ProdutoRouter.post("/produtos/cadastrar/",
    UsuarioMiddleware.autenticacao,
    UsuarioMiddleware.administrador,
    ProdutoController.cadastrar
);
ProdutoRouter.patch("/produtos/atualizar/:id", 
    UsuarioMiddleware.autenticacao,
    UsuarioMiddleware.administrador,
    ProdutoController.atualizar
);
ProdutoRouter.delete("/produtos/delete/:id",
    UsuarioMiddleware.autenticacao,
    UsuarioMiddleware.administrador,
    ProdutoController.deletarProduto
);

export default ProdutoRouter;