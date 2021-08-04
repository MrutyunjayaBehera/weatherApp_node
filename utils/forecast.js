
const request = require('postman-request');

const forecast = (latitude, longitude, callback) => {
  const url = 'http://api.weatherstack.com/current?access_key=27482479247cd55d11ed34459bda52b0&query=' + latitude + ',' + longitude + '&units=s'

  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback('Unable to connect to the server.', undefined);
    } else if (response.body.error) {
      callback('address not found', undefined);
    } else {
      callback(undefined, {
        place_name: response.body.location.name,
        weather: response.body.current.weather_descriptions[0],
        country: response.body.location.country
      })
    }
  })
}

module.exports = forecast;
