const { queryUSTestingData } = require('../../../apis/covid19/testing');

const getUSTestingInfoDData = async (req, res) => {
    const { state='' } = req.query;
    const response = await queryUSTestingData();

    if(response) {
        if(state) {
            const data = await response.filter((stateData) => {
                return stateData.name === state || stateData.state === state
            });
            res.status(200).send(data);
        } else {
            res.status(200).send(response);
        }
    } else {
        res.status(500).send({error: 'Issue getting US state testing info.'});
    }
}

module.exports = {
    getUSTestingInfoDData
}