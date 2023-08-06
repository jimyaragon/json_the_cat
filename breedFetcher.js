const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  const apiUrl = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

  request(apiUrl, (error, response, body) => {
    if (error) {
      callback(error, null);
    } else {
      const data = JSON.parse(body);
      if (Array.isArray(data) && data.length > 0) {
        const firstEntry = data[0];
        const description = firstEntry.description;
        callback(null, description);
      } else {
        callback(`No data found for the breed: ${breedName}`, null);
      }
    }
  });
};

module.exports = { fetchBreedDescription };