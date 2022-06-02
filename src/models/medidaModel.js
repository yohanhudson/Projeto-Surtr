var database = require("../database/config");

function buscarUltimasMedidas(idAquario, limite_linhas) {
    
    instrucaoSql = ''
    
    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `select top ${limite_linhas}
                        temperatura, 
                        umidade, 
                        momento,
                        CONVERT(varchar, momento, 108) as momento_grafico
                    from medida
                    where fk_aquario = ${idAquario}
                    order by id desc`;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `select plataforma.nome, count(usuario.id) as quantidade from usuario join plataforma on usuario.FK_plataforma = plataforma.id group by plataforma.nome;`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }
    
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoReal(idAquario) {
    
    instrucaoSql = ''
    
    if (process.env.AMBIENTE_PROCESSO == "producao") {       
        instrucaoSql = `select top 1
                        temperatura, 
                        umidade, CONVERT(varchar, momento, 108) as momento_grafico, 
                        fk_aquario 
                        from medida where fk_aquario = ${idAquario} 
                    order by id desc`;
        
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `select plataforma.nome, count(usuario.id) as quantidade 
        from usuario join plataforma 
        on usuario.FK_plataforma = plataforma.id group by plataforma.nome;`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


function BuscarNumeroCurtida(idUser){
    const query = `select * 
    from usuario join Curtida on Curtida.fk_usuario = usuario.id
    where fk_usuario = ${idUser}`

    return database.executar(query);
}

function InserirDados(idUser, idMod){
    const query = `INSERT INTO Curtida (fk_usuario, fk_mods, Curtidas) VALUES (${idUser}, ${idMod}, 1)`

    return database.executar(query)
}

function DeletarDados(idUser, idMod){
    const query = `dele`
}


module.exports = {
    buscarUltimasMedidas,
    buscarMedidasEmTempoReal,
    BuscarNumeroCurtida,
    InserirDados,
}
