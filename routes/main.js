var ano_jmj = '2019'
var lema_jmj = 'Eis aqui a serva do Senhor, Faça-se em mim segundo a tua palavra (Lc 1, 38)'
var usuario = "Gabriela"

// Rotas principais

function inicializarRotas(app,passport){
    app.get('/',function(req,res){
        res.render('index', {
            ano_jmj: ano_jmj, 
            lema_jmj: lema_jmj,
            usuario: req.user.nome.split(' ')[0]
        })
    })

    app.get('/login',function(req,res){
        res.render('login',{message:req.flash('login')})
    })

    app.post('/login',passport.authenticate('local',{failureRedirect:'/login'}),(req,res)=>{
        res.redirect('/')
    })
}

module.exports = inicializarRotas