const express = require("express")
const app = express()
const port = 5000;
app.use(express.static("./express"))
app.use(express.urlencoded({ extended: false }))
app.get("/login", (req, res) => {
    res.send("information Get")
})
app.post("/login", (req, res) => {
    let c = req.body
    console.log(req.body)
    res.end()
})
app.put("/login", (req, res) => {
    res.send("information put")
})
app.delete("/login", (req, res) => {
    res.send("information delete")
})


app.listen(port, () => {
    console.log("Server Is Listening");
})