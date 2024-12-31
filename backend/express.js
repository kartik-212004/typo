const exp = require("constants");
const express = require("express")
const path = require("path");
let app = express()
app.use(express.static('../express'))

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "./index.html"))
})
app.get("/porn/hello", (req, res) => {
    res.send("Mutthi marega ....dab dab dab ")
})
app.get("/games", (req, res) => {
    res.send("Games ,....eee ka howe games? ")
})
app.get("/ok", (req, res) => {
    res.send("shabash beta")
})
app.all('*', (req, res) => {
    res.status(400)
    res.send("<h1>Error Encountered<h/>")
})
app.listen(5000, () => {
    console.log("Listening At Port 5000...")
})
// app.get
// app.post
// app.put
// app.delete
// app.all
// app.use
// app.listen