var express = require('express');
var bodyParser = require('body-parser');
var fs = require('fs');
var fm = require('gray-matter');

var app = express();

app.use(bodyParser.urlencoded({extended:false}));

app.get('/', function(req, res) {
	res.send('Listening for post requests on port 8081.')
});

app.post('/', function (req, res) {
	console.log('Post request received.');
	console.log(req.body);
	var requestBody = req.body;
	var request;
	var filename;

	if (Object.hasOwnProperty.call(requestBody, 'post')) {
		request = JSON.parse(req.body.post);
	}
	// https://www.npmjs.com/package/gray-matter
	
// 	if (Object.hasOwnProperty.call(requestBody, 'comic')) {
// 		request = JSON.parse(req.body.comic);
// 		fileName = './_comics/' + (request.title || '') + '-' + (request.pageNum || '') + '.html';
// 	} else if (Object.hasOwnProperty.call(requestBody, 'post')) {
// 		request = JSON.parse(req.body.comic);
// 		fileName = './_posts/' (request.date || '') + (request.title || '') + '.html';
// 	} else if (Object.hasOwnProperty.call(requestBody, 'event')) {
// 		request = JSON.parse(req.body.comic);
// 		fileName = './_conventions/' + (request.title || '') + '.html';
// 	} else if (Object.hasOwnProperty.call(requestBody, 'artwork')) {
// 		request = JSON.parse(req.body.comic);
// 		fileName = './_artworks/' + (request.title || '') + '.html';
// 	}

// 	switch (request.type) {
// 		case 'new':
// 		case 'save':
// 			fs.writeFile(fileName, 
// 				'---\n' +
// 				'layout: default\n' +
// 				'date: ' + (request.date || '') + '\n' +
// 				'start_date: ' + (request.startDate || '') + '\n' +
// 				'end_date: ' + (request.endDate || '') + '\n' +
// 				'title: "' + (request.title || '') + '"\n' +
// 				'image_path: ' + (request.imagePath || '') + '\n' +
// 				'page_num: ' + (request.pageNum || '') + '\n' + 
// 				'category: ' + (request.categories || '') +'\n' +
// 				'---\n' +
// 				(request.content || '')
// 			);
// 			break;
// 		case 'delete':
// 			fs.unlink(fileName, (err) => {
// 				if (err) console.log(err);
// 				console.log('Successfully deleted' + fileName);
// 			});
// 			break;
// 		case 'editAll':
// 			for (var i = 1; i <= request.maxPages; i++) {
// 				fs.rename('./_comics/' + request.title + '-' + i + '.html', './_comics/' + request.editTitle + '-' + i + '.html', (err) => {
// 				  if (err) console.log(err);
// 				  console.log('Rename complete');
// 				});
// 			}
// 			break;
// 		case 'deleteAll':
// 			for(var i = 1; i <= request.maxPages; i++){
// 				fs.unlink('./_comics/' + request.title + '-' + i + '.html', (err) => {
// 					if (err) console.log(err);
// 					console.log('Successfully deleted' + fileName);
// 				});
// 			}
// 			break;
// 	}


// });

var server = app.listen(8081, function() {
	var port = server.address().port;
	console.log('Server listening on PORT %s', port);
});