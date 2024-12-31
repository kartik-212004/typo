const express = require("express")
const app = express()
const logger = require("./logger")
const authorize = require("./authorize")

// app.use([logger, authorize])
app.get("/", [logger, authorize], (req, res) => {
    res.send(req.user + `<br><h1> <a href="/About" > Click Here</a></h1>`)
})
app.get("/About", (req, res) => {
    res.send(`About <br> <h1> <a href="/" > TO Go Back</a></h1>`)
})
app.listen(5000, () => {
    console.log("Port Is Listening At 5000")
})