var express = require("express");
var path = require("path")

var app = express();
var PORT = 3000;
//space magic
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//routes
app.get('/notes', function (req, res) {
    res.sendFile(path.join(__dirname, "notes.html"))
});
app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, "index.html"))
});



//listener
app.listen(PORT, function () {
    console.log("App listening on PORT:" + PORT);
});