const { queryVaccineTrialData } = require('../../../apis/covid19/vaccine');

const getVaccineTrialData = async (req, res) => {
    const response = await queryVaccineTrialData();
    if(response) {
        res.status(200).send(response);
    } else {
        res.status(500).send({error: 'Issue getting vaccine trial data'});
    }
}

module.exports = {
    getVaccineTrialData
}