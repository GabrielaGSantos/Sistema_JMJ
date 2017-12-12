// Rotas principais
function inicializarRotas(app) {
    var localStrategy = require('../login')

    app.get('/peregrinos', localStrategy.isAuthenticated, function (req, res) {
        res.render('peregrinos/peregrinos', {
            usuario: req.user.nome.split(' ')[0]
        })
    })

    app.get('/peregrinos/cadastrar', localStrategy.isAuthenticated, function (req, res) {
        res.render('peregrinos/cadastrar', {
            usuario: req.user.nome.split(' ')[0]
        })
    })
}

module.exports = inicializarRotas