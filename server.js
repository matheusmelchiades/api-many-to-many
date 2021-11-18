const express = require('express')
const config = require('./config/api')
const api = require('./api')

async function start() {
    try {
        const app = express()

        await api.setup(app)

        await app.listen(config.port, config.hostname)

        console.log('🌎 SERVER RUNNING')
        console.log(`http://${config.hostname}:${config.port}`)
    } catch (err) {
        console.error(` : : ${err.message} : :`)

        process.exit(0)
    }
}

start()