// Import a module
const http = require('http')
const handles = require('./handles')
//const curl = require('curl')
const server = http.createServer(handles.serverHandle);

server.listen(8000);

// command with curl to run app
// curl -X POST -d "name=John" http://localhost:8000