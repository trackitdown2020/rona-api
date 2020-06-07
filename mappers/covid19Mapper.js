
const countryInfoMapper = ({
    latest_data: {
        deaths,
        confirmed,
        recovered,
        critical,
        calculated
    },
    ...rest
}) => ({
    ...rest,
    most_recent: {
        deaths,
        confirmed,
        recovered,
        critical
    },
    calculated
});

module.exports = {
    countryInfoMapper
}