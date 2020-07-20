const request = require('request');
const log = console.log;

const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');


geocode('Kitui', (error, data) => {
    log('Error', error);
    log('Data', data);
});

forecast(-75.7088, 44.1545, (error, data) => {
    console.log('Error', error);
    console.log('Data', data);
});
