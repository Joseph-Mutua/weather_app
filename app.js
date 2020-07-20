const request = require('request');
const log = console.log;
const url = "https://api.openweathermap.org/data/2.5/onecall?&units=metric&lat=33.441792&lon=-94.037689&%20&exclude=hourly,daily&appid=d18f6e53f610b112cec2414b0a7f9b39";
const geocode = require('./utils/geocode');

request({ url: url, json: true }, (error, response) => {
    if (error) {
        log("Unable to connect to weather service");
    }
    else if (response.body.cod) {
        log("Unable to find the location!");
    }

    else {
        const currWeather = response.body.current;
        log(`It is currently ${currWeather.temp} out. The humidity is about ${currWeather.humidity}`);
    }
});


geocode('Kitui', (error, data) => {
    log('Error', error);
    log('Data', data);
})
