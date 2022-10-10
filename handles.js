const url = require('url')
const qs = require('querystring');

module.exports = {
    serverHandle: function (req, res) {
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
            res.write('In the URL, add /hello?name=yourname to see a personalized message.\nAnother message will be printed with the names of the repository owners (Oscar and Romain)')
        }
        else if(path === '/hello' && 'name' in params) {
            res.write('Hello ' + params['name'])
            if('name' in params === 'Oscar') {
                res.write('Message for the repository owner Oscar (try with Romain)')
            }
            else if('name' in params === 'Romain') {
                res.write('Message for the repository owner Romain (try with Oscar)')
            }
        }
        else {
            res.write('404 Page not found')
        }
        res.end()
    }
}