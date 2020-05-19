const subredditPostMapper = (post) => {
    const {
        url,
        title,
        ups,
        subreddit_name_prefixed,
        permalink
    } = post;

    return {
        url,
        title,
        ups,
        subreddit_name_prefixed,
        permalink
    };
}
module.exports = { 
    subredditPostMapper
};