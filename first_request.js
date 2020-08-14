// const request = require('request');
// request('http://api.weatherapi.com/v1/current.json?key=e023cea032e94529a91193233201408&q=22303', function (error, response, body) {
//   console.error('error:', error); // Print the error if one occurred
//   console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//   console.log('body:', body); // Print the HTML for the Google homepage.
// });

var request = require('request');
request('http://api.weatherapi.com/v1/forecast.json?key=e023cea032e94529a91193233201408&q=22303&days=1', function(error, response, body) {
  if(!error && response.statusCode == 200){
    /// APIs will return a string so we need to convert it to an object using JSON.parse(body)
    var parsedData = JSON.parse(body);
    console.log(`The local forecast is: ${parsedData.current.condition.text} and sunset is ${parsedData.forecast.forecastday[0].astro.sunset}`);
  }
});
