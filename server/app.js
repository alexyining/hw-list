var path = require('path');
var express = require('express');

var app = express(); // Create an express app!
module.exports = app; // Export it so it can be require('')'d

// Path
var publicPath = path.join(__dirname, '../public');
var indexHtmlPath = path.join(__dirname, '../html/index.html');
var aboutHtmlPath = path.join(__dirname, '../html/about.html')

// http://nodejs.org/docs/latest/api/globals.html#globals_dirname
// for more information about __dirname

// http://nodejs.org/api/path.html#path_path_join_path1_path2
// for more information about path.join

// When our server gets a request and the url matches
// something in our public folder, serve up that file
// e.g. angular.js, style.css
app.use(express.static(publicPath));

// If we're hitting our home page, serve up our index.html file!
app.get('/', function (req, res) {
    res.sendFile(indexHtmlPath);
});

// about page
app.get('/about', function (req, res) {
	res.sendFile(aboutHtmlPath);
})

