// Rotas principais
function inicializarRotas(app) {
    var database = require('../database')
    var localStrategy = require('../login')

    app.get('/jmj', localStrategy.isAuthenticated, function (req, res) {
        res.render('jmj/jmj', {
            usuario: req.user.nome.split(' ')[0]
        })
    })

    app.get('/jmj/cadastrar', localStrategy.isAuthenticated, function (req, res) {
        res.render('jmj/cadastrar', {
            usuario: req.user.nome.split(' ')[0]
        })
    })

    app.post('/jmj/cadastrar', function (req, res) {
        if (!req.body.pais)
            res.send({ error: `É necessário preencher o país` })
        else if (!req.body.ano)
            res.send({ error: `É necessário preencher o ano` })
        else if (!req.body.lema)
            res.send({ error: `É necessário preencher o lema` })
        else {
            database.doQuery(`INSERT INTO jmj SET ?`, (error, results) => {
                if (error)
                    res.send({ error: `ERRO AO CADASTRAR JMJ: \n ${error}` })
                else
                    res.send({ message: "JMJ Cadastrada com Sucesso" })
            }, req.body)
        }
    })

    app.get('/jmj/visualizar', localStrategy.isAuthenticated, function (req, res) {
        database.doQuery(`SELECT * FROM jmj WHERE id_jmj=${req.query.id_jmj}`, (error, results) => {
            res.render('jmj/visualizar', {
                pais: results[0].pais, cidade: results[0].cidade, ano: results[0].ano, periodo: results[0].periodo, lema: results[0].lema,
                usuario: req.user.nome.split(' ')[0]
            })
        })
    })

    app.get('/jmj/editar', localStrategy.isAuthenticated, function (req, res) {
        res.render('jmj/editar', {
            usuario: req.user.nome.split(' ')[0]
        })
    })

    app.get('/jmj/excluir', localStrategy.isAuthenticated, function (req, res) {
        database.doQuery(`SELECT * FROM jmj WHERE id_jmj=${req.query.id_jmj}`, (error, results) => {
            res.render('jmj/excluir', {
                pais: results[0].pais, cidade: results[0].cidade, ano: results[0].ano, periodo: results[0].periodo, lema: results[0].lema,
                usuario: req.user.nome.split(' ')[0]
            })
        })
    })
}

module.exports = inicializarRotas