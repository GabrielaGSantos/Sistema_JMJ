var main = require('./main.js')
var jmj = require('./jmj.js')
var grupo = require('./grupos.js')
var peregrino = require('./peregrinos.js')
var pagamentos = require('./pagamentos.js')
var outros = require('./outros.js')
var listar = require('./api/listar.js')
var permissoes = require('./api/permissoes.js')

module.exports = {
    main: main,
    jmj: jmj,
    grupo: grupo,
    peregrino: peregrino,
    outros: outros,
    pagamentos: pagamentos,
    listar: listar,
    permissoes: permissoes
}