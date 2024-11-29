var express = require("express")
var app = express()
var port = process.env.port || 3000;

app.use(express.static("public"))

app.listen(port, () => {
    console.log("App listening to: " + port)
})

app.get("/", (req, res) => {
    res.status(200).send("index.html")
})