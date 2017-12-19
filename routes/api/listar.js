// Rotas principais
function inicializarRotas(app) {
    var localStrategy = require('../../login')

    app.get('/api/listar/jmj', function (req, res) {
        var database = require('../../database')
        database.doQuery('SELECT * FROM jmj ORDER BY ano DESC', (error, results) => {
            res.send(results)
        })
    })

    app.get('/api/listar/grupo_peregrino', function (req, res) {
        var database = require('../../database')
        database.doQuery(`SELECT grupo_jmj.id_grupo_jmj FROM grupo_jmj, grupo_peregrino 
                          WHERE grupo_jmj.id_grupo_jmj = grupo_peregrino.id_grupo_jmj 
                          AND grupo_peregrino.id_peregrino = ${req.user.id} 
                          GROUP BY grupo_peregrino.id_grupo_jmj`, (error, results) => {
            res.send(results)
        })
    })

    app.get('/api/listar/grupo', function (req, res) {
        var database = require('../../database')
        database.doQuery(`SELECT * FROM grupo_jmj WHERE id_grupo_jmj=${req.query.grupo}`, (error, grupo) => {
            database.doQuery(`SELECT * FROM grupo_peregrino WHERE id_peregrino=${req.user.id}`, (error, grupo_peregrinos) => {
                grupo_peregrinos.forEach(grupo_peregrino => {
                    if (grupo_peregrino.id_grupo_jmj = grupos.id_grupo_jmj)
                        res.send(grupo[0])
                });
            })
        })
    })


}

module.exports = inicializarRotas