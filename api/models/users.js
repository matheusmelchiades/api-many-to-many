const db = require('../../database')

const tableName = 'users'

module.exports.findAll = () => {

    return db.exec(`
        SELECT * FROM ${tableName}
    `)
}

module.exports.findById = (id) => {

    return db.exec(`
        SELECT * FROM ${tableName} 
        WHERE id = ${id}
    `)
}
