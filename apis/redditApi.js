const snoowrap = require('snoowrap');
const _ = require('lodash');
const { reddit:redditTokens } = require('../config/tokens');
const reddit = new snoowrap(redditTokens);
const { subredditPostMapper } = require('../mappers/redditMapper');

// // hour, day, week, month, year, all
const queryTop = async (sub, time, limit) => {
    const subreddit = await reddit.getSubreddit(sub);
    const topPosts = await subreddit.getTop({time, limit});
    const mappedTopPosts = topPosts.map(subredditPostMapper);
    return mappedTopPosts;
}

const queryHot = async (sub, time, limit) => {
    const subreddit = await reddit.getSubreddit(sub);
    const topPosts = await subreddit.getHot({time, limit});
    const mappedTopPosts = topPosts.map(subredditPostMapper);
    return mappedTopPosts;
}

const queryNew = async (sub, time, limit) => {
    const subreddit = await reddit.getSubreddit(sub);
    const topPosts = await subreddit.getNew({time, limit});
    const mappedTopPosts = topPosts.map(subredditPostMapper);
    return mappedTopPosts;
}

const querySubredditTop = async (subreddits, time='day', limit=3) => {
    const posts = await Promise.all(subreddits.map(subreddit => queryTop(subreddit, time, limit)));
    const flattenedPosts = await _.flatten(posts);
    return flattenedPosts;
}

const querySubredditHot = async (subreddits, time='day', limit=3) => {
    const posts = await Promise.all(subreddits.map(subreddit => queryHot(subreddit, time, limit)));
    const flattenedPosts = await _.flatten(posts);
    return flattenedPosts;
}

const querySubredditsNew = async (subreddits, time='day', limit=3) => {
    const posts = await Promise.all(subreddits.map(subreddit => queryNew(subreddit, time, limit)));
    const flattenedPosts = await _.flatten(posts);
    return flattenedPosts;
}

module.exports = {
    querySubredditTop,
    querySubredditHot,
    querySubredditsNew
};

