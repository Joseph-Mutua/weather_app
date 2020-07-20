const request = require('request');
const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');
const log = console.log;

const locationName = process.argv[2];

geocode(locationName, (error, { latitude, longitude, location }) => {
    if (!locationName) {
        return log("Please input the location!");
    }

    if (error) {
        return log(error);
    }

    forecast(latitude, longitude, (error, forecastData) => {
        if (error) {
            return log('Error', error);
        }

        log(location);
        log(forecastData);
    });

});
