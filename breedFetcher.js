// require request
const request = require('request');
const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search/?q=${breedName}`, (error,response,body) => {
    if (error) {
      return callback(error, null);
    }
    // converting the JSON string to actual object
    const data = JSON.parse(body);
    if (data[0]) {
      callback(null, data[0].description);
    } else {
      let err = 'Requested breed is not found';
      callback(err,null);
    }
  });
};

module.exports = {fetchBreedDescription};