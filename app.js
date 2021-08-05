//weatherstack API key= 27482479247 cd55d11ed34459bda52b0
//mapbox API key= pk.eyJ1IjoidmlrYXNoZWUiLCJhIjoiY2tydGNsN284MTEzMTJucWNjMGozd2hkZyJ9.9rua5cLtgfaR98WqOOaSsw
const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');


geocode('Mumbai', (error, data) => {
  console.log('Error', error);
  console.log('Data', data);
  forecast(data.longitude, data.latitude, (error, data) => {
    console.log('Error', error);
    console.log('Data', data);
  })
})