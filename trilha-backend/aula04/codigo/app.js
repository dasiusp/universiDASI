import express from "express";
import session from "express-session";

import ProdutosRoutes from "./routers/produtos.router.js";
import UsuarioRoutes from "./routers/usuarios.router.js";

const app = express();

app.use(express.json());
app.use(session({
  secret: 'sua_chave_secreta_segura', // Chave para assinar o cookie, ela deva estar escondido
  resave: false, // Evita salvar a sessão se não houver modificações
  saveUninitialized: true, // Salva sessões não inicializadas
  cookie: { secure: false } // Use true se estiver em HTTPS
})); // aqui vai permitir salvar a session no backend

app.get("/", (req, res) => res.send("SERVIDOR RODANDO!"));
app.use(ProdutosRoutes);
app.use(UsuarioRoutes);

const PORT = 8000;

app.listen(PORT, () => {
    console.log("SERVIDOR OUVINDO NA PORTA ", 8000);
})

