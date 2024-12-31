const http = require('http')
const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.writeHead(200, { 'content-type': 'text/html' })
        res.write("<button>System<button/>");
        res.end();
        return;
    }
    // #404
    else {
        res.writeHead(404, { 'content-type': 'text/html' })
        res.write("<h1>Error 404</h1>");
        res.end();
    }


})
server.listen(3000, () => {
    console.log("port is listening at 3000")
})
