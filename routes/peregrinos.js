// Rotas principais
function inicializarRotas(app){ 
    
        app.get('/peregrinos',function(req,res){
            res.render('peregrinos/peregrinos')
        })
    
        app.get('/peregrinos/cadastrar',function(req,res){
            res.render('peregrinos/cadastrar')
        })
    }
    
    module.exports = inicializarRotas