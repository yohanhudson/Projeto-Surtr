const express = require("express");
const router = express.Router();

const medidaController = require("../controllers/medidaController");

router.get("/ultimas/:idAquario", function (req, res) {
    medidaController.buscarUltimasMedidas(req, res);
});

router.get("/tempo-real/:idAquario", function (req, res) {
    medidaController.buscarMedidasEmTempoReal(req, res);
});

router.get("/numerocurtida/:idUser", medidaController.BuscarNumeroCurtida);

router.get("/curtimod/:idUser/:idMod", medidaController.InserirDados);

router.get("/descurtimod/:idUser/:idMod", medidaController.ApagarDados);

router.get("/quantidadecurtida", medidaController.QuantidadeCurtida);

router.get("/totalcurtidagrafico", medidaController.TotalCurtidaGrafico);

router.get("/atualizarcurtidagrafico", medidaController.AtualizarGratico);

module.exports = router;