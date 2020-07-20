const request = require('request');
const log = console.log;

const forecast = (latitude, longitude, callback) => {
    const url = `https://api.openweathermap.org/data/2.5/onecall?&units=metric&lat=${latitude}&lon=${longitude}&%20&appid=d18f6e53f610b112cec2414b0a7f9b39`;
   
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
    
};

module.exports = forecast;