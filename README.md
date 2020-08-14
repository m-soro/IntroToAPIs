# Application Programming Interface

- Interfaces for code/computers to talk to one another.
- A library, a package, a module.

## Web Api's

- Generally communicate via HTTP.
- Make and http request to an API - Get some data back.

## Data Formats

- When we use the internet, we make http request and get html back.
- *API's responds with data*, not structure and used simpler data formats like:
  - **XML**
    - Extended Markup Language is syntacticly similar to html but, *does not describe presentation like html does*.

  - **JSON**
    - Javascript Object Notation, looks exactly like Javascript objects but, *everything is a string* use ```JSON.parse(body)```  to convert.
    - Access an array with [index] and an object with a ```.``` or
    - ```['objectProperty']```

## Making API Requests with Node

1. Get an info from a website's API thru request, then do something with it!
  - curl from the command line (not really useful)
  - request using node
      - npm install request
      - sample below:  
      ```
      var request = require('request');
      request('http://api.weatherapi.com/v1/forecast.json?key=e023cea032e94529a91193233201408&q=22303&days=1', function(error, response, body) {
        if(!error && response.statusCode == 200){
          var parsedData = JSON.parse(body);
          console.log(`The local forecast is: ${parsedData.current.condition.text} and sunset is ${parsedData.forecast.forecastday[0].astro.sunset}`);
        }
        });
        ```
 2. node first_request.js
