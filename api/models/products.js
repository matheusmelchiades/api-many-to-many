const db = require('../../database')

module.exports.findAll = () => {

    return db.exec(`
        SELECT * FROM products
    `)
}