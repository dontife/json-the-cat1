//utilizing command line user input
const breedName = process.argv[2];

// importing the breedFetcher file
const { fetchBreedDescription } = require('./breedFetcher');
fetchBreedDescription(breedName, (error, desc) => {
  if (error) {
    console.log('Error fetch details:', error);
  } else {
    console.log(desc);
  }
});