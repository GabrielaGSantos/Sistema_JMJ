var mysql = require("mysql")
var config = require("../config.json")

var conexao = mysql.createConnection(config.database)

function doQuery(query, callback, arguments) {

    console.log("Conetado ao Banco de Dados")
    if (!arguments) {
        conexao.query(query, (error, results) => {
            if (error) {
                callback(error, null)
            }
            else {
                conexao = mysql.createConnection(config.database)            
                callback(null, results)
            }
        })
    } else {
        conexao.query(query, arguments, (error, results) => {
            if (error) {
                callback(error, null)
            }
            else {
                conexao = mysql.createConnection(config.database)            
                callback(null, results)
            }
        })
    }
}

module.exports = doQuery


