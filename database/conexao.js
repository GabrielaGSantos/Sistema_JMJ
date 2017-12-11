var mysql = require("mysql")
var config = require("../config.json")

var conexao = mysql.createConnection(config.database)

function doQuery(query, callback) {

    console.log("Conetado ao Banco de Dados")
    conexao.query(query, (error, results) => {
        conexao.end()
        if (error) {
            console.log(error)
            callback(error, null)
        }
        else {
            conexao = mysql.createConnection(config.database)            
            callback(null, results)
        }
    })

}

module.exports = doQuery


