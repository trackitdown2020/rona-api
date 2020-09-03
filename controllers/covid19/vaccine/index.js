const { queryVaccineTrialData } = require('../../../apis/covid19/vaccine');
const { vaccineTrialMapper } = require('../../../mappers/vaccineTrialMapper');

const getVaccineTrialData = async (req, res) => {
    const response = await queryVaccineTrialData();
    if(response) {
        const mappedData = vaccineTrialMapper(response);
        res.status(200).send(mappedData);
    } else {
        res.status(500).send({error: 'Issue getting vaccine trial data'});
    }
}

module.exports = {
    getVaccineTrialData
}