// Rotas principais
function inicializarRotas(app){ 
    
        app.get('/grupos',function(req,res){
            res.render('grupos/grupos')
        })
    
        app.get('/grupos/cadastrar',function(req,res){
            res.render('grupos/cadastrar')
        })
    }
    
    module.exports = inicializarRotas