// Import a module
const http = require('http')

const Content = '<!DOCTYPE html>' +
'<html>' +
'<head>' +
'   <title>My First Web Page</title>' +
'<meta charset"utf-8/">' +
'</head>' +
'<body>' +
'   <h1>Hello World</h1>' +
'</body>' +
'</html>'

// Declare an http server
const serverHandle = function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'})
    res.write(Content)
    res.end()
}
const server = http.createServer(serverHandle);
server.listen(8000);