const { 
    querySubredditTop,
    querySubredditHot,
    querySubredditsNew
} = require('../apis/redditApi');

const getSubredditsTopPosts = async (req, res) => {
    const { subreddits, time, limit } = req.query;
    const subsList = subreddits.split(",");
    const response = await querySubredditTop(subsList, time, limit);
    res.status(200).send(response);
}

const getSubredditsHotPosts = async (req, res) => {
    const { subreddits, time, limit } = req.query;
    const subsList = subreddits.split(",");
    const response = await querySubredditHot(subsList, time, limit);
    res.status(200).send(response);
}

const getSubredditsNewPosts = async (req, res) => {
    const { subreddits, time, limit } = req.query;
    const subsList = subreddits.split(",");
    const response = await querySubredditsNew(subsList, time, limit);
    res.status(200).send(response);
}

module.exports = {
    getSubredditsTopPosts,
    getSubredditsHotPosts,
    getSubredditsNewPosts
}