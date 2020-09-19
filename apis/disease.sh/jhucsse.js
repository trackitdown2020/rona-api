const axios = require('axios');

/**
 * Queries for summary of the world 
 * @returns {
        "updated": 1600242862926,
        "cases": 29734175,
        "todayCases": 16241,
        "deaths": 939289,
        "todayDeaths": 806,
        "recovered": 21546862,
        "todayRecovered": 15659,
        "active": 7248024,
        "critical": 60917,
        "casesPerOneMillion": 3815,
        "deathsPerOneMillion": 120.5,
        "tests": 579900028,
        "testsPerOneMillion": 74594.87,
        "population": 7773993673,
        "oneCasePerPeople": 0,
        "oneDeathPerPeople": 0,
        "oneTestPerPeople": 0,
        "activePerOneMillion": 932.34,
        "recoveredPerOneMillion": 2771.66,
        "criticalPerOneMillion": 7.84,
        "affectedCountries": 215
    }
 */
const queryWorld = () => {

}

/**
 * Queries for summary for all countries in the world 
 * @returns {
        "updated": 1600242863203,
        "country": "Afghanistan",
        "countryInfo": {
        "_id": 4,
        "iso2": "AF",
        "iso3": "AFG",
        "lat": 33,
        "long": 65,
        "flag": "https://disease.sh/assets/img/flags/af.png"
        },
        "cases": 38855,
        "todayCases": 40,
        "deaths": 1436,
        "todayDeaths": 10,
        "recovered": 32503,
        "todayRecovered": 405,
        "active": 4916,
        "critical": 93,
        "casesPerOneMillion": 994,
        "deathsPerOneMillion": 37,
        "tests": 107593,
        "testsPerOneMillion": 2751,
        "population": 39105495,
        "continent": "Asia",
        "oneCasePerPeople": 1006,
        "oneDeathPerPeople": 27232,
        "oneTestPerPeople": 363,
        "activePerOneMillion": 125.71,
        "recoveredPerOneMillion": 831.16,
        "criticalPerOneMillion": 2.38
    }
 */
const queryAllCountries = () => {

}


const queryByCountry = (country) => {

}


/**
 * Query a summary of all states in the US
 * [
        {
            "state": "string",
            "updated": 0,
            "cases": 0,
            "todayCases": 0,
            "deaths": 0,
            "todayDeaths": 0,
            "active": 0,
            "casesPerOneMillion": 0,
            "deathsPerOneMillion": 0,
            "tests": 0,
            "testsPerOneMillion": 0,
            "population": 0
        }
    ]
 */
const queryAllUS = () => {

}

const queryByUSState = (state) => {

}