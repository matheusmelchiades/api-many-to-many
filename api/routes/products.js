const express = require('express')
const router = express.Router()

const controller = require('../controllers/products')

router.get('/', controller.get)
router.get('/:id', controller.getById)
router.get('/:id/users', controller.getUsersByProduct)

module.exports = router