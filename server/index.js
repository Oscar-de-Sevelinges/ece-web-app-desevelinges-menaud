// Import a module
import { createServer } from 'http';
import { serverHandle } from './handles.js';
const server = createServer(serverHandle);

server.listen(8000);