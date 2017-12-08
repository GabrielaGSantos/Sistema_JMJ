// Conexão com Banco de Dados
var database = require("./database")
//database.obterConexao()

// Configuração do Servidor
var express = require("express")
var app = express()
var routes = require('./routes')

app.set('view engine', 'pug')

// Inicializar rotas
routes.main(app)
routes.jmj(app)
routes.grupo(app)
routes.peregrino(app)
routes.outros(app)
routes.pagamentos(app)

// Inicializar Servidor
var config = require('./config.json')
app.listen(config.server.port,function(erro){
    if(erro){
        console.log("Erro ao inicializar o servidor: "+erro)
        process.exit(1)
    }
    else
        console.log("Servidor na Porta: "+config.server.port)
})
var path = require('path')

app.get('*',function(req,res){
    res.sendFile(path.join(__dirname, './public/'+req.params[0]))
})