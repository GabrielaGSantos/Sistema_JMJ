var mysql = require("mysql")
var config = require("../config.json")

var conexao = mysql.createConnection(config.database)

function obterConexao(){
    conexao.connect(function(erro){
        if(erro){
            console.log("Erro ao se conectar ao Banco de Dados: "+erro)
            process.exit(1)
        }
        else{
            console.log("Conetado ao Banco de Dados")
            return conexao
        }
    })
}

module.exports = obterConexao