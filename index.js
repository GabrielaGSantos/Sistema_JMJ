// Conexão com Banco de Dados
var database = require("./database")
//database.obterConexao()

// Configuração do Servidor
var express = require("express")
var app = express()
var routes = require('./routes')
var path = require('path')

app.set('view engine', 'pug')

//login
var passport = require('passport')
app.use(passport.initialize())
app.use(passport.session())

var bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

// Inicializar rotas
app.use(express.static(path.join(__dirname,"/public")))
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


