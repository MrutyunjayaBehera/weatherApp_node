
const request = require('postman-request');

const geocode = (address, callback) => {
  const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+ encodeURIComponent(address) +'.json?proximity=17.5947,78.1230&access_token=pk.eyJ1IjoidmlrYXNoZWUiLCJhIjoiY2tydGNsN284MTEzMTJucWNjMGozd2hkZyJ9.9rua5cLtgfaR98WqOOaSsw&limit=1'

  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback('Unable to connect to the server.', undefined);
    } else if (response.body.features.length === 0) {
      callback('Unable to connect.', undefined);
    } else {
      callback(undefined, {
        latitude: response.body.features[0].center[0],
        longitude: response.body.features[0].center[1],
        location: response.body.features[0].place_name
      })
    }
  })
}


module.exports = geocode;