const db = require('../../database')

const tableName = 'products'

module.exports.findAll = () => {

    return db.exec(`
        SELECT * FROM ${tableName}
    `)
}