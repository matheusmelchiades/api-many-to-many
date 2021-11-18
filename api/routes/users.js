const express = require('express')
const router = express.Router()

const controller = require('../controllers/users')

router.get('/', controller.get)
router.get('/:id', controller.getById)
router.get('/:id/products', controller.getProductsByUser)

router.post('/', controller.create)

module.exports = router