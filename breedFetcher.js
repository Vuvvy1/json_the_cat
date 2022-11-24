const request = require('request');

// const breedSearch = 'poo';
// request(`https://api.thecatapi.com/v1/breeds/search?q=${breedSearch}`, (error, response, body) => {
//   console.log('error:', error); // Print the error if one occurred
//   console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//   const data = JSON.parse(body);
//   if (body === []) {
//     console.log("Breed Not Found");
//   }
//   console.log(data);
//   console.log(typeof data);
//   //console.log('body:', body); // Print the HTML for the Google homepage.

//   // writeToFile(body, './webfile.txt')
// });

const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    //console.log('error:', error); // Print the error if one occurred
    //console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    if (error) {
      callback(`Failed to request details: ${error}`,null);
    }
    const data = JSON.parse(body);
    console.log('data[0] ➤',data[0]);
    if (!data[0]) {
      callback(`${breedName} Not Found`, error);
    } else {
      console.log('secess ➤');
      callback(null, data[0].description);
    }
    //console.log('body:', body); // Print the HTML for the Google homepage.

  // writeToFile(body, './webfile.txt')
  });
};
module.exports = { fetchBreedDescription };
//fetchBreedDescription("Siberian", (x) => {console.log(x);})
