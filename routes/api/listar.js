// Rotas principais
function inicializarRotas(app) {
    var localStrategy = require('../../login')

    app.get('/api/listar/jmj', function (req, res) {
        var database = require('../../database')
        database.doQuery('SELECT * FROM jmj ORDER BY ano DESC', (error, results) => {
            res.send(results)
        })
    })
}

module.exports = inicializarRotas