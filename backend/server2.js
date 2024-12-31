const express = require("express")
const app = express()
app.get("/", (req, res) => {
    res.send("helllo");
})
app.get("/home", (req, res) => {
    res.send("how are u");
})

app.listen(5000, () =>
    console.log("server is listening at 5000"));
