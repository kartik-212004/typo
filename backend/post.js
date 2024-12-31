const express = require("express");
const { people } = require('./data');
const path = require("path");
const app = express();

app.use(express.static("./methods-public"));
app.use(express.urlencoded({ extendedd: false }));

// app.get("/api/people", (req, res) => {
//     res.status(200).json({ success: true, data: people })
// });
app.post("/login", (req, res) => {
    res.send("post ")
    console.log(req.body)
}
)
app.listen(5000, () => {
    console.log("Listening at port 5000");
});
