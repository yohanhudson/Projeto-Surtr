var medidaModel = require("../models/medidaModel");

function buscarUltimasMedidas(req, res) {

    const limite_linhas = 7;

    var idAquario = req.params.idAquario;

    console.log(`Recuperando as ultimas ${limite_linhas} medidas`);

    medidaModel.buscarUltimasMedidas(idAquario, limite_linhas).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}


function buscarMedidasEmTempoReal(req, res) {

    var idAquario = req.params.idAquario;

    console.log(`Recuperando medidas em tempo real`);

    medidaModel.buscarMedidasEmTempoReal(idAquario).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}


function BuscarNumeroCurtida(req, res) {
    const idUser = req.params.idUser;
    medidaModel.BuscarNumeroCurtida(idUser).then((response) => {
        res.json({ response })
    }).catch((erro) => {
        console.log(erro);
        console.log(
            "Houve um erro ao buscar numero de Curtidas do mods",
            erro.sqlMessage
        );
        res.status(500).json(erro.sqlMessage);
    })
}


function InserirDados(req, res) {
    const idUser = req.params.idUser;
    const idMod = req.params.idMod;
    medidaModel.InserirDados(idUser, idMod).then((response) => {
        res.json({response})
    }).catch((erro) => {
        console.log(erro);
        console.log("Houve um erro ao Inserir a Curtida do usuario", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    })
}


function ApagarDados(req, res) {
    const idUser = req.params.idUser;
    const idMod = req.params.idMod;

    medidaModel.ApagarDados(idUser, idMod).then((response) => {
        res.json({response})
    }).catch((erro) => {
        console.log(erro);
        console.çog("Houve um erro ao Deletar a Curtida do usuario");
        res.status(500).json(erro.sqlMessage);
    });
}

function QuantidadeCurtida(req, res) {
    
    medidaModel.QuantidadeCurtida().then((response) => {
        res.json({response})
    }).catch((erro) => {
        console.log(erro);
        console.çog("Houve um erro ao tentar achar quantidade de curtida");
        res.status(500).json(erro.sqlMessage);
    })
}


function TotalCurtidaGrafico(req, res){
    medidaModel.TotalCurtidaGrafico().then((response) => {
        res.json({response})
    }).catch((erro) => {
        console.log(erro);
        console.çog("Houve um erro ao tentar achar os dados de curtida");
        res.status(500).json(erro.sqlMessage);
    })
}


function AtualizarGratico(req, res){
    medidaModel.AtualizarGratico().then((response) => {
        res.json({response})
    }).catch((erro) => {
        console.log(erro);
        console.çog("Houve um erro ao tentar achar os ultimos dados de curtidas");
        res.status(500).json(erro.sqlMessage);
    })
}



module.exports = {
    ApagarDados,
    buscarUltimasMedidas,
    buscarMedidasEmTempoReal,
    BuscarNumeroCurtida,
    InserirDados,
    ApagarDados,
    QuantidadeCurtida,
    TotalCurtidaGrafico,
    AtualizarGratico,
}