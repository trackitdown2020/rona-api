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
        console.log(response);
        return response;
    } catch (error) {
        throw new Error(error);
        return;
    }
};
// const query = {
//     "part": [
//         "snippet"
//     ],
//     "maxResults": 5,
//     "q": "COVID-19 news"
// };
// querySearchList(query);

module.exports = {
    querySearchList
};