
var localStrategy = require('passport-local')

function initialize(passport){
    passport.serializeUser((user,done)=>{
        done(null,user.id_peregrino)
    })

    passport.deserializeUser((id,done)=>{
        var conexao = require('../database/')
        console.log(`SELECT * FROM peregrino WHERE id_peregrino=${id}`)
        conexao.doQuery(`SELECT * FROM peregrino WHERE id_peregrino=${id}`,(error,results)=>{
            console.log(`Results = ${JSON.stringify(results)}`)
            done(error,results[0])
        })
    })

    passport.use(new localStrategy.Strategy({
        usernameField:"cpf",
        passwordField: "senha",
        passReqToCallback: true
    },function(req,cpf,senha,done){
        var conexao = require('../database/')
        conexao.doQuery(`SELECT * FROM peregrino WHERE cpf='${cpf}'`,(error,results)=>{
            if(error){
                req.flash("login",`Erro ao realizar login: ${error}`)
                return done(error,false)
            }
            else if(!results[0]){
                req.flash("login",`Usuario nao encontrado`)
                return done(null,false)
            }else{
                var bcrypt = require('bcrypt')
                bcrypt.compare(senha,results[0].senha,(error,res)=>{
                    if(res){
                        return done(null,results[0])
                    }
                    else{
                        req.flash("login",`Senha incorreta`)
                        return done(null,false)
                    }
                })
            }
        })
    }))   
}

function isAuthenticated(req, res, next) {
    if (req.user) {
        return next()
    } else {
        res.redirect('/login')
    }
}

module.exports.initialize = initialize
module.exports.isAuthenticated = isAuthenticated