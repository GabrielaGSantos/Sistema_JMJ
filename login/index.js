var passport_local = require("./passport_local")

module.exports = {
    initialize: passport_local.initialize,
    isAuthenticated: passport_local.isAuthenticated
}
