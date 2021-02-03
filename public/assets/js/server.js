var express = require("express");
var path = require("path")

var app = express();
var PORT = 3010;
//space magic
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//routes
app.get('/notes', function (req, res) {
    res.
})




//listener
app.listen(PORT, function () {
    console.log("App listening on PORT:" + PORT);
});