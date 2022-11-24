const request = require('request');

const breedId = 'poo';
request(`https://api.thecatapi.com/v1/breeds/search?q=${breedId}`, (error, response, body) => {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  const data = JSON.parse(body);
  if (body === []) {
    console.log("Breed Not Found");
  }
  console.log(data);
  console.log(typeof data);
  //console.log('body:', body); // Print the HTML for the Google homepage.

  // writeToFile(body, './webfile.txt')
});