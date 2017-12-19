
// Rotas principais
function inicializarRotas(app) {
    var localStrategy = require('../../login')

    app.get('/api/permissao', function (req, res) {
        var database = require('../../database')
        var config = require('../../config.json')
        var permissoes = 0
        var user_id = req.user.id_peregrino

        console.log(1)
    
        config.permissions.master_users.forEach(id => {
            if (user_id == id)
                permissoes = 1
        });
    
        if (permissoes != 1) {
            database.doQuery(`SELECT * FROM grupo_peregrino WHERE id_peregrino=${user_id}`, (error, results) => { 
                results.forEach(grupo_peregrino => {
                    if (req.query.grupo == grupo_peregrino.id_grupo_jmj) {
                        permissoes = grupo_peregrino.perfil_peregrino;
                        res.send({
                            permissao: grupo_peregrino.perfil_peregrino
                        })
                    }
                });
                if (permissoes == 0) {
                    res.send({
                        permissao: permissoes
                    })
                }
            })
        }
        else 
            res.send({
                permissao: permissoes
            })
    })
}

module.exports = inicializarRotas