const request = require('request');
const log = console.log;
const url = "https://api.openweathermap.org/data/2.5/onecall?&units=metric&lat=33.441792&lon=-94.037689&%20&exclude=hourly,daily&appid=d18f6e53f610b112cec2414b0a7f9b39";
const mapBoxUrl = "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoicWZ0b2dwZGNuc3giLCJhIjoiY2tjdGhqcjd1MHNtdjJ5cDR6eHl2cTVmZiJ9.5Gz-8waHwoI80WFZqzr0mQ";

/*request({ url: url, json: true }, (error, response) => {
    const currWeather = response.body.current;
    log(response.body.minutely);
    log(`It is currently ${currWeather.temp} out. The humidity is about ${currWeather.humidity}`);
});*/


request({ url: mapBoxUrl, json: true }, (error, response) => {
    const locationLong = response.body.features[0].geometry.coordinates[0];
    const locationLat = response.body.features[0].geometry.coordinates[1];
    log(`The longitude is ${locationLong} while the latitude is ${locationLat}`);
});
