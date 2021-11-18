const db = require('../../database')

const tableName = `users`

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

module.exports.findProductsByUserId = (id) => {

    return db.exec(`
        SELECT p.* FROM ${tableName} u
        INNER JOIN user_products up on up.user_id = u.id
        INNER JOIN products p on p.id = up.product_id
        WHERE u.id = ${id}
    `)
}

module.exports.insertOne = async (name) => {
    const nextId = await db.getNextIndex(tableName)

    const user = {
        id: nextId,
        name,
    }

    await db.exec(`INSERT INTO ${tableName} (id, name) VALUES (${user.id}, '${user.name}')`)

    return user;
}