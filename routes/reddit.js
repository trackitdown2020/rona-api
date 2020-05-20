const express = require('express');
const router = express.Router();
const {
    getSubredditsTopPosts,
    getSubredditsHotPosts,
    getSubredditsNewPosts
} = require('../controllers/reddit');

router.get('/subredditTop', getSubredditsTopPosts);
router.get('/subredditHot', getSubredditsHotPosts);
router.get('/subredditNew', getSubredditsNewPosts);

module.exports = router;