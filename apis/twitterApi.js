const tokens = require('../config/tokens');
const Twitter = require('twitter');
const util = require('util');
const twitterClient = new Twitter(tokens.twitter);

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
        return;
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
        console.log(response);
        return response;
    } catch(error) {
        throw new Error(error);
        return;
    }
}

module.exports = {
    getLanguages,
    getPopularTweetsByQuery
}
