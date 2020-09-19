const tokens = require('../config/tokens');
const request = require('request');
const Youtube = require("youtube-api");

Youtube.authenticate({
    type: "key",
    key: tokens.youtube.key
});

let querySearchList = async (query) => {
    try {
        const response = await Youtube.search.list(query);
        return response;
    } catch (error) {
        throw new Error(error);
        return;
    }
};

module.exports = {
    querySearchList
};