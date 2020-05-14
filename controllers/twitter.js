const {
    getLanguages,
    getPopularTweetsByQuery
} = require('../apis/twitterApi');
const {
    tweetMapper,
    languageMapper
} = require('../mappers/twitterMapper');

const getHelpLanguages = async (req, res) => {
    const response = await getLanguages();
    const mappedLanguages = await response.map(lang => languageMapper(lang));
    res.status(200).send(mappedLanguages); 
}

const getPopularTweets = async (req, res) => {
    const qs = req.query;
    const { query, lang="en", result_type="popular" } = qs;
    const { statuses:tweets } = await getPopularTweetsByQuery(query, lang, result_type);
    const mappedTweets = await tweets.map(tweet => tweetMapper(tweet));
    res.status(200).send(mappedTweets);
}

module.exports = {
    getHelpLanguages,
    getPopularTweets
}