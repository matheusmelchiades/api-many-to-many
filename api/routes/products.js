const express = require('express')
const router = express.Router()

const controller = require('../controllers/products')

router.get('/', controller.get)

module.exports = {
    basePath: '/products',
    routes: router
}