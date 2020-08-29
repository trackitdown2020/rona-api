const express = require('express')
const router = express.Router()
const {
    getHelpLanguages,
    getPopularTweets
} = require('../controllers/twitter')

router.get('/languages', getHelpLanguages);
router.get('/popularTweets', getPopularTweets);

module.exports = router;