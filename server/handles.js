import url from 'url';
import qs from 'querystring';

import {apiHandler} from './api.js';

export function serverHandle(req, res) {
    const content = '<!DOCTYPE html>' +
    '<html>' +
    '<head>' +
    '   <title>My First Web Page</title>' +
    '<meta charset"utf-8/">' +
    '</head>' +
    '<body>' +
    '   <h1>Hello World</h1>' +
    '</body>' +
    '</html>'

    const route = url.parse(req.url)
    const path = route.pathname;
    console.log(path);
    const params = qs.parse(route.query);
    console.log(params);

    /*res.writeHead(200, {'Content-Type': 'text/html'})
    res.write(content)*/

    res.writeHead(200, {'Content-Type': 'text/plain'})
    if(path === '/') {
        res.write('In the URL, add /hello?name=yourname to see a personalized message.\n\nAnother message will be printed with the names of the repository owners and contributors (Oscar, Romain and Paul)\n')
    }
    else if(path === '/hello' && 'name' in params) {
        if(params['name'] == 'Oscar') {
            res.write('Message for the repository owner Oscar (try with Romain or Paul)\n')
        }
        else if(params['name'] == 'Romain') {
            res.write('Message for the repository owner Romain (try with Oscar or Paul)\n')
        }
        else if(params['name'] == 'Paul') {
            res.write('Message for the contributor and teacher Paul (try with Oscar or Romain)\n')
        }
        else {
            res.write('Hello ' + params['name'] + '\n')
        }
    }
    else if(path === '/hello'){
        res.write('add a name in the URL as follows: /hello?name=yourname')
    }
    apiHandler(req, res);
    res.end()
}
