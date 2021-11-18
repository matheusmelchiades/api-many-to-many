const alasql = require('alasql');
const mock = require('./mock.json')

const db = new alasql.Database();

Object
    .entries(mock)
    .forEach(([tableName, data]) => {

        if (!db.tables[tableName])
            db.tables[tableName] = { data }
        else
            db.tables[tableName].data = data
    });

module.exports = db;