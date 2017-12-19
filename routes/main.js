var ano_jmj = '2019'
var lema_jmj = 'Eis aqui a serva do Senhor, Faça-se em mim segundo a tua palavra (Lc 1, 38)'
var usuario = "Gabriela"

// Rotas principais
var database = require('../database')
function inicializarRotas(app, passport) {
    var localStrategy = require('../login')

    /*app.get('/', localStrategy.isAuthenticated, function (req, res) {
        res.render('index', {
            ano_jmj: req.params.ano_jmj,
            lema_jmj: lema_jmj,
            usuario: req.user.nome.split(' ')[0]
        })
    })*/

    app.get('/index/:ano_jmj?/:grupo?', localStrategy.isAuthenticated, function (req, res) {
        database.doQuery(`SELECT * FROM jmj WHERE ano='${req.params.ano_jmj}'`, (error, results) => {
            if (results[0]) {
                var grupo = 0;
                if (req.params.grupo)
                    grupo = req.params.grupo
                verificaPermissao(req.user.id_peregrino, grupo, (permissoes) => {
                    res.render('index', {
                        ano_jmj: results[0].ano,
                        lema_jmj: results[0].lema,
                        usuario: req.user.nome.split(' ')[0],
                        permissoes: permissoes
                    })
                })               
            }
            else {
                res.send("Página Inválida")
            }
        })

    })

    app.get('/login', function (req, res) {
        res.render('login', { message: req.flash('login') })
    })

    app.post('/login/', passport.authenticate('local', { failureRedirect: '/login' }), (req, res) => {
        res.redirect('/verificar_login')
    })

    app.get('/verificar_login', localStrategy.isAuthenticated, function (req, res) {
        var config = require('../config.json')
        console.log(config.permissions.master_users)
        var is_master = false;

        config.permissions.master_users.forEach(id => {
            if (req.user.id_peregrino == id)
                is_master = true;
        });

        if (!is_master)
            res.render('verificar_login', { message: req.flash('login') })
        else
            database.doQuery(`SELECT MAX(ano) as ano,lema FROM sistema_jmj.jmj;`, (error, results) => {
                res.redirect('/index/' + results[0].ano)
            })

    })
    app.post('/verificar_login/', (req, res) => {
        res.redirect('/index/' + req.body.ano)
    })
}


function verificaPermissao(user_id, grupo, callback) {
    var config = require('../config.json')
    var permissoes = 0;

    config.permissions.master_users.forEach(id => {
        if (user_id == id)
            permissoes = 1
    });

    if (permissoes != 1) {
        database.doQuery(`SELECT * FROM grupo_peregrino WHERE id_peregrino=${user_id}`, (error, results) => { 
            results.forEach(grupo_peregrino => {
                if (grupo == grupo_peregrino.id_grupo_jmj) {
                    permissoes = grupo_peregrino.perfil_peregrino;
                    callback(grupo_peregrino.perfil_peregrino)
                }
            });
            if (permissoes == 0) {
                callback(permissoes)
            }
        })
    }
    else 
        callback(permissoes)
}

module.exports = inicializarRotas