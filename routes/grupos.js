// Rotas principais
function inicializarRotas(app) {
    var localStrategy = require('../login')

    app.get('/grupos', localStrategy.isAuthenticated, function (req, res) {
        res.render('grupos/grupos', {
            usuario: req.user.nome.split(' ')[0]
        })
    })

    app.get('/grupos/cadastrar', localStrategy.isAuthenticated, function (req, res) {
        res.render('grupos/cadastrar', {
            usuario: req.user.nome.split(' ')[0]
        })
    })
}

module.exports = inicializarRotas