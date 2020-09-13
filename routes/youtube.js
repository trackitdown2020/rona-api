const express = require('express');
const router = express.Router();
const {
    getSearchList
} = require('../controllers/youtube')

router.get('/searchList', getSearchList)

module.exports = router