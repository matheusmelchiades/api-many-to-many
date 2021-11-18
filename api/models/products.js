const db = require('../../database')

const tableName = 'products'

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

module.exports.findUsersByProductId = (id) => {

    return db.exec(`
        SELECT u.* FROM ${tableName} p
        INNER JOIN user_products up on up.product_id = p.id
        INNER JOIN users u on u.id = up.user_id
        WHERE p.id = ${id}
    `)
}
