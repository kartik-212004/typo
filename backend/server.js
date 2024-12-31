const http = require("http")
const fs = require("fs")
const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.writeHead(200)
        res.write("Home Page")
        res.end()
    }
    else if (req.url === "/html") {
        const html = fs.readFileSync("./server.html")
        res.writeHead(200, {
            "content-type": "text/html"
        })
        res.write(html)
        res.end()
    }
    else if (req.url === "/css") {
        const style = fs.readFileSync("./style.css")
        res.writeHead(200, {
            "content-type": "text/css"
        })
        res.write(style)
        res.end()
    }
    else if (req.url === "/javascript") {
        const javascript = fs.readFileSync("./index.js")
        res.writeHead(200, {
            "content-type": "text/javascript"
        })
        res.write(javascript)
        res.end()
    }
    else {
        res.writeHead(400, {
            "content-type": "text/html"
        })
        res.write("Error 404")
        res.end()
    }
})
server.listen(3000, () => {
    console.log("port is listening on 3000");
})