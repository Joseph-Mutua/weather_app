const request = require('request');


const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoicWZ0b2dwZGNuc3giLCJhIjoiY2tjdGhqcjd1MHNtdjJ5cDR6eHl2cTVmZiJ9.5Gz-8waHwoI80WFZqzr0mQ';

    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to Location Services!', undefined)
        }
        else if (!response.body.features) {
            callback('Unable to find location. Try another search', undefined)
        }
        else {
            callback(undefined, {
                latitude: response.body.features[0].center[0],
                longitude: response.body.features[0].center[1],
                location: response.body.features[0].place_name
            });
        }
    });
};

module.exports = geocode;