// Rotas principais
function inicializarRotas(app) {
    var localStrategy = require('../../login')

    app.get('/api/listar/jmj', localStrategy.isAuthenticated, function (req, res) {
        var database = require('../../database')
        database.doQuery('SELECT * FROM jmj', (error, results) => {
            res.send(results)
        })
    })
}

module.exports = inicializarRotas