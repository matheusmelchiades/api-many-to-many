const alasql = require('alasql')
const mock = require('./mock.json')

const db = new alasql.Database()

db.getNextIndex = async (tableName) => {
    const data = await db.exec(`SELECT id FROM ${tableName}`)
    const next = getLastId(data);
    
    return next + 1
}

function getLastId(data) {

    return data
        .map(row => row.id)
        .sort((a, b) => a - b)
        .pop()
}

Object
    .entries(mock)
    .forEach(([tableName, data]) => {
        const indice = getLastId(data);

        db.indices[tableName] = indice

        if (!db.tables[tableName])
            db.tables[tableName] = { data }
        else
            db.tables[tableName].data = data
    })

module.exports = db