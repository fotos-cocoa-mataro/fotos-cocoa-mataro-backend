const corsAnywhere = require('cors-anywhere')

// Listen on a specific host via the HOST environment variable
var host = process.env.HOST || '0.0.0.0';
// Listen on a specific port via the PORT environment variable
var port = process.env.PORT || 80;

corsAnywhere.createServer({
    originWhitelist: ['http://localhost', 'http://localhost:3000', 'https://fotos-cocoa-mataro.github.io'],
}).listen(port, host, function () {
    console.log('Running CORS Anywhere on ' + host + ':' + port);
});