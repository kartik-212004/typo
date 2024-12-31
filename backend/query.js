let express = require("express")
const fs = require("fs")
const { products } = fs.readFileSync("./data.js")
let app = express()
app.get("/", (req, res) => {
    res.send(`<h1> <a href="/api/main"> Click here </a> </h1 > `)
})
app.get("/api/v1/search", (req, res) => {
    console.log(req.query)
    res.send(`<h1> <a href="/"> Go Back </a> </h1 > `)
})


app.listen(5000, () => {
    console.log("Server Is Listening At Port 5000")
}