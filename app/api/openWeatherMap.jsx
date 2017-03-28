var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=9ad2dd7e5abcd30463c1123451d41654&units=imperial';

// 9ad2dd7e5abcd30463c1123451d41654

module.exports = {
  getTemp: function (location) {
    var encodedLocation = encodeURIComponent(location);
    var requestURL = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    return axios.get(requestURL).then(function(response) {
      // console.log(response.data);
      if(response.data.cod && response.data.message) {
          throw new Error('Unable to fetch weather');
      } else {
          return response.data.main.temp;
      }
    }).catch(function(error) {
      throw new Error(error.response.data.message);
      // console.log(error.response.data.message);
    });
  }
}
