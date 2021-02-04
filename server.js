var express = require("express");
var path = require("path")
var fs = require('fs');
//just for testing currently
var notes = [];

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
    var myNotes = req.body;
    myNotes.routeName = myNotes.id
    console.log(myNotes);
    let obj = JSON.parse(fs.readFileSync('./db/db.json', 'utf8'));
    // let obj = JSON.parse(data);
    obj.push(myNotes);
    let newNotes = JSON.stringify(obj);
    fs.writeFileSync('./db/db.json', newNotes);
    res.redirect('back');
});

app.delete("/api/notes/:id", function (req, res) {
    let deleteId = req.params.id;
    console.log(deleteId)
    let obj = JSON.parse(fs.readFileSync('./db/db.json', 'utf8'));

    for (let i = 0; i < obj.length; i++) {
        console.log(deleteId == obj[i].id)
        // console.log(obj[i].id)
        if (deleteId == obj[i].id) {
            obj.splice([i], 1);
            let newNotes = JSON.stringify(obj);
            fs.writeFileSync('./db/db.json', newNotes)
            console.log("we did it")
        };

    };
    res.redirect('back');
});






//listener
app.listen(PORT, function () {
    console.log("App listening on PORT:" + PORT);
});

