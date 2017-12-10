// Rotas principais
function inicializarRotas(app){ 

    app.get('/jmj',function(req,res){
        res.render('jmj/jmj')
    })

    app.get('/jmj/cadastrar',function(req,res){
        res.render('jmj/cadastrar')
    })

    app.get('/jmj/visualizar',function(req,res){
        res.render('jmj/visualizar')
    })

    app.get('/jmj/editar',function(req,res){
        res.render('jmj/editar')
    })

    app.get('/jmj/excluir',function(req,res){
        res.render('jmj/excluir')
    })
}

module.exports = inicializarRotas