/*!
 *
 * now-static
 * ---
 * starter to serve static files for 𝚫 now
 * url: https://github.com/juanbrujo/now-static
 * author: Jorge Epuñan | @csslab
 *
 */

var static = require('node-static');
var file = new static.Server('./public');
var port = 8080;
 
require('http').createServer(function (request, response) {
    request.addListener('end', function () {
        file.serve(request, response);
    }).resume();
}).listen(port);
console.log('Listening to :' + port)