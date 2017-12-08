// Rotas principais
function inicializarRotas(app){ 
    
        app.get('/outros',function(req,res){
            res.render('outros/outros')
        })
    
        app.get('/outros/paroquias/cadastrar',function(req,res){
            res.render('outros/paroquias/cadastrar')
        })

        app.get('/outros/funcoes/cadastrar',function(req,res){
            res.render('outros/funcoes/cadastrar')
        })

        app.get('/outros/agencia/cadastrar',function(req,res){
            res.render('outros/agencia/cadastrar')
        })

        app.get('/outros/custos/cadastrar',function(req,res){
            res.render('outros/custos/cadastrar')
        })
    }
    
    module.exports = inicializarRotas