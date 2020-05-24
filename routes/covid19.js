const express = require('express')
const router = express.Router()
const {
    getMobility
} = require('../controllers/covid19/mobility')

router.get('/mobility', getMobility)

module.exports = router