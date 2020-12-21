const Twitter = require('twitter');

const tokens = {
    consumer_key: process.env.TWITTER_CONSUMER_KEY,
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
    access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
    access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
}

const twitterClient = new Twitter(tokens);

const TwitterWrapper = (url) => {
    return new Promise((resolve, reject) => {
        twitterClient.get(url, (err, response) => {
            if(err) {
                reject(err);
            } else {
                resolve(response);
            }
        })
    });
}

/**
 * @returns all of the languages Twitter can filter by
 */
const getLanguages = async () => {
    try {
        const response = await TwitterWrapper('help/languages');
        return response;
    } catch(error) {
        throw new Error(error);
        return { error };
    }
}

/**
 * @params query needs to be encoded
 * @returns response of a popular tweet
 */
const getPopularTweetsByQuery = async (query, lang, result_type) => {
    try {
        const url = `search/tweets.json?q=${query}&lang=${lang}&results_type=${result_type}`;
        const response = await TwitterWrapper(url);
        return response;
    } catch(error) {
        throw new Error(error);
        return { error }
    }
}

module.exports = {
    getLanguages,
    getPopularTweetsByQuery
}
