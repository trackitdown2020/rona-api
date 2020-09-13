const { querySearchList } = require('../apis/youtubeApi');
const { youtubeMapper } = require('../mappers/youtubeMapper');

const getSearchList = async (req, res) => {
    let qs = req.query;
    const response = await querySearchList(qs);
    const { data, status } = response;
    if (status == 200 && data) {
        let items = data.items;
        const mappedSearch = items.map(items => youtubeMapper(items));
        console.log(mappedSearch);
        res.status(200).send(mappedSearch);
    } else {
        console.log("error");
    }
}

module.exports = {
    getSearchList
}