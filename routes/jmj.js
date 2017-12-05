// Rotas principais
function inicializarRotas(app){ 

    app.get('/jmj',function(req,res){
        res.render('jmj/jmj')
    })

    app.get('/jmj/cadastrar',function(req,res){
        res.render('jmj/cadastrar')
    })
}

module.exports = inicializarRotas