const express = require("express")
const { products } = require('./data');
const app = express()
app.get("/", (req, res) => {
    // res.status(400)
    // res.json({
    //     name: "Kartik",
    //     college: "Uttarakhand Technical University",
    //     course: "Btech",
    //     branch: "Cse",
    //     age: 20
    // })
    // res.json(country)
    res.send(`<h1>Get The Country Plan</h1 :> <a href="/api/products">Products</a>`)

})
app.get('/api/products', (req, res) => {
    const newcountry = products.map((country) => {
        // const id = country.currency;
        // return (id)
        let { id, name, image } = country
        return { id, name, image }
    })
    res.json(newcountry)
}
)
app.get('/api/products/:productId', (req, res) => {
    let { productId } = req.params;
    console.log(productId)
    console.log()
    const newObject = products.find((product) =>
        (product.id === Number(productId))
    )
    res.json(newObject)
}
)
app.get('/api/products/:productId/review/:reviewId', (req, res) => {
    res.send("system")
}
)
app.listen(5000, () =>
    [
        console.log("Listening at port 5000")
    ])
