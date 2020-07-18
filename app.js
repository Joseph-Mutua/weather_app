const request = require('request');
const log = console.log;
const url = "https://api.openweathermap.org/data/2.5/onecall?&units=metric&lat=33.441792&lon=-94.037689&%20exclude=hourly,daily&appid=d18f6e53f610b112cec2414b0a7f9b39";


request({ url: url, json: true }, (error, response) => {
    const currWeather = response.body.current;
    log(`It is currently ${currWeather.temp} out. The humidity is about ${currWeather.humidity}`);
});
