// Rotas principais
function inicializarRotas(app) {
    var localStrategy = require('../login')

    app.get('/pagamentos', localStrategy.isAuthenticated, function (req, res) {
        res.render('pagamentos/pagamentos', {
            usuario: req.user.nome.split(' ')[0]
        })
    })

    app.get('/pagamentos/parcelas', localStrategy.isAuthenticated, function (req, res) {
        res.render('pagamentos/parcelas', {
            usuario: req.user.nome.split(' ')[0]
        })
    })

    app.get('/pagamentos/caixa', localStrategy.isAuthenticated, function (req, res) {
        res.render('pagamentos/caixa', {
            usuario: req.user.nome.split(' ')[0]
        })
    })
}

module.exports = inicializarRotas