//weatherstack API key= 27482479247 cd55d11ed34459bda52b0
//mapbox API key= pk.eyJ1IjoidmlrYXNoZWUiLCJhIjoiY2tydGNsN284MTEzMTJucWNjMGozd2hkZyJ9.9rua5cLtgfaR98WqOOaSsw
const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');
const chalk = require('chalk');


const address = process.argv[2];
if (!address) {
  console.log(chalk.red('Please provide an address'));
} else {
  geocode(address, (error, data) => {
    if (error) {
      return console.log(error);
    }
    forecast(data.longitude, data.latitude, (error, forecastData) => {
      if (error) {
        return console.log(error);
      }
      console.log(data.location);
      console.log(forecastData);
    })
  })
}

console.log(process.argv);