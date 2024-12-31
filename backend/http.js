const http = require("http")
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("Home Page")
    res.end()
  }
  else if (req.url === "/about") {
    res.write("About Page")
    res.end()
  }
  else if (req.url === '/help') {
    res.write('Help Page')
    res.end()
  }
}
)
server.listen(1000)