const { queryTherapeuticsTrialData } = require('../../../apis/covid19/therapeutics');
const { therapeuticsTrialMapper } = require('../../../mappers/therapeuticsTrialMapper');

const getTherapeuticsTrialData = async (req, res) => {
    const response = await queryTherapeuticsTrialData();
    if(response) {
        const mappedData = therapeuticsTrialMapper(response);
        res.status(200).send(mappedData);
    } else {
        res.status(500).send({error: 'Issue getting therapeutics trial data'});
    }
}

module.exports = {
    getTherapeuticsTrialData
}