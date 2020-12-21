const request = require("request");
const NewsAPI = require("newsapi");

const apiKey = process.env.GOOGLE_KEY;

const newsapi = new NewsAPI(apiKey);

let queryTopHeadlines = async (qs) => {
  try {
    const response = await newsapi.v2.topHeadlines(qs);
    return response;
  } catch (error) {
    throw new Error(error);
    return { error };
  }
};

let queryAllSources = async (qs) => {
  try {
    const response = await newsapi.v2.sources(qs);
    return response;
  } catch (error) {
    throw new Error(error);
    return { error };
  }
};

let queryEverythingBySubject = async (qs) => {
  try {
    const response = await newsapi.v2.everything(qs);
    return response;
  } catch (error) {
    throw new Error(error);
    return { error };
  }
};

module.exports = {
  queryTopHeadlines,
  queryAllSources,
  queryEverythingBySubject,
};
