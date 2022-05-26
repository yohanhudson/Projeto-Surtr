const express = require("express");
const router = express.Router();

const usuarioController = require("../controllers/usuarioController");

router.post("/creating", usuarioController.cadastrar);

router.post("/autenticar", usuarioController.entrar);

module.exports = router;
