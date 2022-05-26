var usuarioModel = require("../models/usuarioModel");

var sessoes = [];

function testar(req, res) {
    console.log("ENTRAMOS NA usuarioController");
    res.json("ESTAMOS FUNCIONANDO!");
}

function listar(req, res) {
    usuarioModel.listar()
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function entrar(req, res) {
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está indefinida!");
    } else {

        usuarioModel.entrar(email, senha)
            .then(
                function (resultado) {
                    console.log(`\nResultados encontrados: ${resultado.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultado)}`); // transforma JSON em String

                    if (resultado.length == 1) {
                        console.log(resultado);
                        res.json(resultado[0]);
                    } else if (resultado.length == 0) {
                        res.status(403).send("Email e/ou senha inválido(s)");
                    } else {
                        res.status(403).send("Mais de um usuário com o mesmo login e senha!");
                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

}

function cadastrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var nome = req.body.nomeServer;
    var email = req.body.emailServer;
    var plataforma = req.body.plataformaServer;
    var senha = req.body.senhaServer;
    // var validarEmail = usuarioModel.validarEmail(email)
    // console.log(validarEmail);

    // Faça as validações dos valores
    if (nome == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (plataforma == undefined) {
        res.status(400).send("Seu plataforma está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está undefined!");
    } else {

        //criar um if conde vaila do email e um else se o email nao repetir no banco finalizar o processo de cadastra
        usuarioModel.validarEmail(email).then(
            function (resultado) {
                console.log('resultado')
                console.log(resultado);

                if (resultado.length > 0) {
                    res.status(400).json({ "mensagem": "Email já cadastrado" })
                } else {

                    usuarioModel.cadastrar(nome, email, plataforma, senha)
                        .then(
                            function (resultado) {
                                res.json(resultado);
                            }
                        ).catch(
                            function (erro) {
                                console.log(erro);
                                console.log(
                                    "\nHouve um erro ao realizar o cadastro! Erro: ",
                                    erro.sqlMessage
                                );
                                res.status(500).json(erro.sqlMessage);
                            }
                        );
                }
            }
        )

        // )
        // // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
    }
}

module.exports = {
    entrar,
    cadastrar,
    listar,
    testar
}




// usuarioModel.validarEmail(email).then(
//     function (resultado) {
//         console.log('resultado')
//         console.log(resultado);

//         if (resultado.length > 0) {
//             res.status(400).json({ "mensagem": "Email já cadastrado" })
//         } else {

//             usuarioModel.cadastrar(nome, email, plataforma, senha)
//                 .then(
//                     function (resultado) {
//                         res.json(resultado);
//                     }
//                 ).catch(
//                     function (erro) {
//                         console.log(erro);
//                         console.log(
//                             "\nHouve um erro ao realizar o cadastro! Erro: ",
//                             erro.sqlMessage
//                         );
//                         res.status(500).json(erro.sqlMessage);
//                     }
//                 );
//         }
//     }
// ) ESSA FUNÇÃO ESTA TRASENDO OS DADOS DO BACK END ATRAVES DA FUNCTION VALIDAREMAIL E FAZENDO UMA PROMESA ONDE SE A FUNCTION RESULTADO VAI TRAZER A RESPOSTA E E O IF VAI COMPARAR SE EXITEIR ELA VAI SER MAIOR QUE ZERO SENDO MAIOR QUE ZERO ELA EXISTE E PORTANTO ELA VAI ENCAMINHA A MESSAGEM PARA O FRONT ATRAVES DO JSON ONDE O FRONT VAI TER QUE TRATAR ESSA INFORMAÇAO PARA SER EXIBIDO. SE N ENTRAR NO ISSO ELE SAGUE O CAMINHO NORMAL E CADASTRA










// else {

    //criar um if conde vaila do email e um else se o email nao repetir no banco finalizar o processo de cadastra
//    usuarioModel.validarEmail(email)
//    .then(
//        function (resultado){
//            const tamanho = resultado.affectrows;

//            if(tamanho == 0){
//                 usuarioModel.cadastrar(nome, email, plataforma, senha)
//                 .then(
//                     function (resultado) {
//                         res.json(resultado);
//                     }
//                 ).catch(
//                     function (erro) {
//                         console.log(erro);
//                         console.log(
//                             "\nHouve um erro ao realizar o cadastro! Erro: ",
//                             erro.sqlMessage
//                         );
//                         res.status(500).json(erro.sqlMessage);
//                     }
//                 );
//            }else {
//                return res.json({
//                    mensagem: "email_cadastrado"
//                })
//            }
//        }
//    )