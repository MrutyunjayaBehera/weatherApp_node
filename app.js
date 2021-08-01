
//weatherstack API key= 27482479247 cd55d11ed34459bda52b0
//mapbox API key= pk.eyJ1IjoidmlrYXNoZWUiLCJhIjoiY2tydGNsN284MTEzMTJucWNjMGozd2hkZyJ9.9rua5cLtgfaR98WqOOaSsw

const request = require('postman-request');


// get weather report
const url1 = 'http://api.weatherstack.com/current?access_key=27482479247cd55d11ed34459bda52b0&query=17.5947,78.1230&units=s'
// fetch data through url, json=true means the response is now an object unlike before 
request({ url: url1, json: true }, (error, response) => {
  if (error) {
    console.log('Unable to connect to weather service');
  } else {
    const curr = response.body.current;
    console.log(curr.weather_descriptions[0] + '. It is currently ' + curr.temperature + 'degrees outside and ' + curr.precip + '% chance of raining.');
  }
})



// Geocoding
// address -> lat/lon -> weather
// const url2 = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Hyderabad.json?proximity=17.5947,78.1230&access_token=pk.eyJ1IjoidmlrYXNoZWUiLCJhIjoiY2tydGNsN284MTEzMTJucWNjMGozd2hkZyJ9.9rua5cLtgfaR98WqOOaSsw&limit=1';
// request({ url: url2, json: true }, (error, response) => {
//   const curr = response.body.features;
//   console.log('Longitude is: ' + curr[0].center[0] + ' and latitude is: ' + curr[0].center[1]);
// })
