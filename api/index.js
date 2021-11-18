const main = require('./routes/main')

module.exports.setup = app => {
    app.use(main.basePath, main.routes)
}