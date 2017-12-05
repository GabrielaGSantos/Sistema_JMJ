var ano_jmj = '2019'
var lema_jmj = 'Eis aqui a serva do Senhor, Faça-se em mim segundo a tua palavra (Lc 1, 38)'
var usuario = "Gabriela"

// Rotas principais
function inicializarRotas(app){
    app.get('/',function(req,res){
        res.render('index', {
            ano_jmj: ano_jmj, 
            lema_jmj: lema_jmj,
            usuario: usuario
        })
    })

    app.get('/login',function(req,res){
        res.render('login')
    })
}

module.exports = inicializarRotas