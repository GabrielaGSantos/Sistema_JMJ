// Rotas principais
function inicializarRotas(app){ 
    
        app.get('/pagamentos',function(req,res){
            res.render('pagamentos/pagamentos')
        })
    
        app.get('/pagamentos/parcelas',function(req,res){
            res.render('pagamentos/parcelas')
        })

        app.get('/pagamentos/caixa',function(req,res){
            res.render('pagamentos/caixa')
        })
    }
    
    module.exports = inicializarRotas