// Rotas principais
function inicializarRotas(app){ 
    
        app.get('/grupos',function(req,res){
            res.render('grupos/grupos',{
                usuario: req.user.nome.split(' ')[0]
            })
        })
    
        app.get('/grupos/cadastrar',function(req,res){
            res.render('grupos/cadastrar')
        })
    }
    
    module.exports = inicializarRotas