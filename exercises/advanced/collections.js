/**
 * Using Promise.all, write a function, combineFirstLineOfManyFiles, that:
 *    1. Reads each file at the path in the `filePaths` array
 *    2. Plucks the first line of each file
 *    3. Joins each first line into a new file
 *      - The lines should be in the same order with respect to the input array
 *      - i.e. the second line in the new file should be the first line of `filePaths[1]`
 *    4. Writes the new file to the file located at `writePath`
 */
 var fs = require('fs');
 var Promise = require('bluebird');
 var request = require('request');
 Promise.promisifyAll(fs);
 Promise.promisifyAll(require('request'));


 var promiseConstructorFile = require ('../bare_minimum/promiseConstructor.js')
 //var basicChainingFile = require ('../bare_minimum/basicChaining.js')


var combineFirstLineOfManyFiles = function(filePaths, writePath) {
  const promise1 = promiseConstructorFile.pluckFirstLineFromFileAsync(filePaths[0]);
  const promise2 = promiseConstructorFile.pluckFirstLineFromFileAsync(filePaths[1]);
  const promise3 = promiseConstructorFile.pluckFirstLineFromFileAsync(filePaths[2]);
 return new Promise(function(resolve, reject){
 Promise.all([promise1, promise2, promise3]).then((values) => {fs.writeFile(writePath, values.join('\n'), (err)=> {
if(err) reject (err);
 })})
})};

// Export these functions so we can unit test them
module.exports = {
  combineFirstLineOfManyFiles: combineFirstLineOfManyFiles
};