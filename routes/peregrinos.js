// Rotas principais
function inicializarRotas(app){ 
    
        app.get('/peregrinos',function(req,res){
            res.render('peregrinos/peregrinos',{
                usuario: req.user.nome.split(' ')[0]
            })
        })
    
        app.get('/peregrinos/cadastrar',function(req,res){
            res.render('peregrinos/cadastrar')
        })
    }
    
    module.exports = inicializarRotas