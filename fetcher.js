const args = process.argv.slice(2);
const request = require('request');
const { writeFile, stat } = require('fs');

const URL = args[0];
const localFilePath = args[1];

request(URL, (error, response, body) => {
	writeFile(localFilePath, body, (err) => {
		stat(localFilePath, (err, stats) =>{
			console.log(`Downloaded and saved ${stats.size} bytes to ${localFilePath}`);
		});
	});
});