var http = require('http');
var url = require('url');
var fs = require('fs');
const PORT = process.env.PORT || 5000

http.createServer(function (req, res) {

    var parsedUrl = url.parse(req.url, true);
    var filename = '.' + parsedUrl.pathname;
    if (filename == "./") { 
        filename = './index.html';
     }
     if(!filename.endsWith('.html')){
         filename += ".html";
     }
    fs.readFile(filename, function (err, data) {
        if (err) {
            res.writeHead(404, { 'Content-Type': 'text/html' });
            return res.end("404 error");
        }
        else {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data);
            return res.end();
        }
    });


}).listen(PORT);