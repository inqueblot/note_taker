var express = require("express");
var path = require("path")
var fs = require('fs');


var app = express();
var PORT = 3000;
//space magic
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname + "/public"));

//routes
app.get('/notes', function (req, res) {
    res.sendFile(path.join(__dirname, "public/notes.html"))
});

app.get('/api/notes', function (req, res) {
    res.sendFile(path.join(__dirname, "db/db.json"))
});

app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, "public/index.html"))
});


app.post('/api/notes', function (req, res) {
    console.log(req.body)
    let data = JSON.stringify(req.body)
    fs.writeFileSync(path.join(__dirname, "db/db.json"), data)
});




//listener
app.listen(PORT, function () {
    console.log("App listening on PORT:" + PORT);
});

