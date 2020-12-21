const request = require('request');
const Youtube = require("youtube-api");

Youtube.authenticate({
    type: "key",
    key: process.env.YOUTUBE_API_KEY
});

let querySearchList = async (query) => {
    try {
        const response = await Youtube.search.list(query);
        return response;
    } catch (error) {
        throw new Error(error);
        return { error }; 
    }
};

module.exports = {
    querySearchList
};