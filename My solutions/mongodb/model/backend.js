const express = require('express');
const app = express();
const mongoose = require('mongoose');
const data = require('./model/mongo.mongoose');


// Middleware to parse JSON requests
app.use(express.json());

app.post('/', async (req, res) => {
    const value = req.body
    const hello = await data.create(value)
    res.status(200).json(hello)
});
mongoose.connect('mongodb://localhost:27017/kartik')
    .then(() => {
        app.listen(5000, () => {
            console.log("Port is Listening at 5000");
        });
    })
    .catch(err => {
        console.log("Connection failed", err);
    });
