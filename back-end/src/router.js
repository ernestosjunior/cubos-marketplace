const express = require("express");

const auth = require("./middlewares/auth"); //Middleware de autenticação

const cadastro = require("./controllers/cadastro");
const login = require("./controllers/login");
const perfil = require("./controllers/perfil");
const produtos = require("./controllers/produtos");

const router = express();

router.post("/cadastro", cadastro.cadastrarUsuario);

router.post("/login", login.login);

router.get("/perfil", auth, perfil.obterPerfil);

router.put("/perfil", auth, perfil.atualizarPerfil);

router.get("/produtos", auth, produtos.listarProdutos);

router.get("/produtos/:id", auth, produtos.obterProduto);

router.post("/produtos", auth, produtos.cadastrarProduto);

router.put("/produtos/:id", auth, produtos.atualizarProduto);

router.delete("/produtos/:id", auth, produtos.excluirProduto);

module.exports = router;
