const request = require('request');

const fetchBreedData = (breedName) => {
  const apiUrl = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

  request(apiUrl, (error, response, body) => {
    if (error) {
      console.error('Error fetching data:', error);
    } else {
      const data = JSON.parse(body);

      // Check if data is an array and not empty
      if (Array.isArray(data) && data.length > 0) {
        const firstEntry = data[0];
        const description = firstEntry.description;
        console.log('Description:', description);
      } else {
        console.log('No data found for the breed:', breedName);
      }
    }
  });
};

// Read the breed name from the command-line arguments
const args = process.argv.slice(2);
const breedName = args[0];

// Call the fetchBreedData function with the specified breed name
fetchBreedData(breedName);