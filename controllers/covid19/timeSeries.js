const { queryTimeSeriesCountry } = require('../../apis/covid19/timeSeries');
const { timeSeriesFormatter } = require('../../utils/formatters');

const getTimeSeriesCountry = async (req, res) => {
    let qs = req.query;
    const { country, time } = qs;
    console.log(qs)

    if(time && isNaN(time)) {
        res.status(500).send({error: 'Time is not a valid value.'});
    }

    const response = await queryTimeSeriesCountry(country, time);
    if(response) {
        const { timeline } = response;
        const { cases, deaths, recovered } = timeline;
        res.status(200).send([
            {
                id: "Cases",
                data: timeSeriesFormatter(cases)
            },
            {
                id: "Deaths",
                data: timeSeriesFormatter(deaths),
            },
            {
                id: "Recovered",
                data: timeSeriesFormatter(recovered)
            }
        ]);
    } else {
        res.status(500).send({
            error: `Issue getting time series for ${country} in the last ${time} days`
        });
    }
}

module.exports = {
    getTimeSeriesCountry
}