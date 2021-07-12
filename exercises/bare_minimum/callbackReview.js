/**
 * Implement these functions following the node style callback pattern
 */

 const fs = require('fs');
 //to enable the https function in node
 var request = require('request');
 
 // This function should retrieve the first line of the file at `filePath`
 var pluckFirstLineFromFile = function (filePath, callback) {
   fs.readFile(filePath, 'utf8', (err, data) =>{
     if (err) return callback(err);
     //returns the text file as an array split by line format. I.E [line1, line2, line3]
     const textToLines = data.split(/\r?\n/);
     return callback(null, textToLines[0]);
   })
 };
 
 // This function should retrieve the status code of a GET request to `url`
 var getStatusCode = function (url, callback) {
 request(url, function(error, response, body){
   if(error){
 callback(error);
   }else{
 callback(error, response.statusCode)
   }
   }
 )
 }
 
 
 
 // Export these functions so we can test them and reuse them in later exercises
 module.exports = {
   getStatusCode: getStatusCode,
   pluckFirstLineFromFile: pluckFirstLineFromFile
 };
 