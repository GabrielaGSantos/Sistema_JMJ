// Rotas principais
function inicializarRotas(app) {
    var localStrategy = require('../login')

    app.get('/outros', localStrategy.isAuthenticated, function (req, res) {
        res.render('outros/outros', {
            usuario: req.user.nome.split(' ')[0]
        })
    })

    app.get('/outros/paroquias/cadastrar', localStrategy.isAuthenticated, function (req, res) {
        res.render('outros/paroquias/cadastrar', {
            usuario: req.user.nome.split(' ')[0]
        })
    })

    app.get('/outros/funcoes/cadastrar', localStrategy.isAuthenticated, function (req, res) {
        res.render('outros/funcoes/cadastrar', {
            usuario: req.user.nome.split(' ')[0]
        })
    })

    app.get('/outros/agencia/cadastrar', localStrategy.isAuthenticated, function (req, res) {
        res.render('outros/agencia/cadastrar', {
            usuario: req.user.nome.split(' ')[0]
        })
    })

    app.get('/outros/custos/cadastrar', localStrategy.isAuthenticated, function (req, res) {
        res.render('outros/custos/cadastrar', {
            usuario: req.user.nome.split(' ')[0]
        })
    })
}

module.exports = inicializarRotas