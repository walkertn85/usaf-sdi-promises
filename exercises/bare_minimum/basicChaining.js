/*
 * Write a function WITH NO CALLBACKS that,
 * (1) reads a GitHub username from a `readFilePath`
 *     (the username will be the first line of the file)
 * (2) then, sends a request to the GitHub API for the user's profile
 * (3) then, writes the JSON response of the API to `writeFilePath`
 *
 * HINT: We exported some similar promise-returning functions in previous exercises
 */

var fs = require('fs');
var Promise = require('bluebird');
var request = require('request');
Promise.promisifyAll(fs);
Promise.promisifyAll(require('request'));

var promiseConstructorFile = require ('./promiseConstructor.js')
var promisificationFile = require ('./promisification.js')

var fetchProfileAndWriteToFile = function(readFilePath, writeFilePath) {
  //NO CALLBACKS
  //1) reads a GitHub username from a `readFilePath`(the username will be the first line of the file)
  return promiseConstructorFile.pluckFirstLineFromFileAsync(readFilePath).then((user)=> promisificationFile.getGitHubProfileAsync(user))
  //(2) then, sends a request to the GitHub API for the user's profile
 .then((json)=> fs.writeFileSync(writeFilePath, JSON.stringify(json)))
  //(3) then, writes the JSON response of the API to `writeFilePath`
  //shoouldreturn a promis created by the entire chain

};

// Export these functions so we can test them
module.exports = {
  fetchProfileAndWriteToFile: fetchProfileAndWriteToFile
};
