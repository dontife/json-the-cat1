// require request
const request = require('request');
//utilizing command line user input
const args = process.argv.slice(2);

request(`https://api.thecatapi.com/v1/breeds/search/?q=${args[0]}`, (error,response,body) => {
  console.log('error:', error);
  console.log('statusCode:', response && response.statusCode);
  // converting the JSON string to actual object
  const data = JSON.parse(body);
  if (data[0]) {
    //accessing the first entry in the data array to print out the description for the user
    console.log(data[0].description);
  } else {
    console.log('Requested breed is not found');
  }
 
});
