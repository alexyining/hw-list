var server = require('./server');

var PORT = 8888;

server.listen(PORT, function () {
    console.log('Server started on port ' + PORT.toString());
});